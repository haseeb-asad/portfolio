#!/usr/bin/env node
// Checks the built HTML in .next/server/pages (run after `yarn build`).
// Fails on the regressions this site has already shipped once: a canonical
// pointing at another host or page, an "undefined" analytics ID, template
// identity leftovers, broken JSON-LD, and sitemap entries that are not
// indexable built pages.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://www.haseebasad.com";
const root = new URL("..", import.meta.url).pathname;
const pagesDir = join(root, ".next/server/pages");
const failures = [];
const fail = (where, msg) => failures.push(`${where}: ${msg}`);

if (!existsSync(pagesDir)) {
  console.error(`No build output at ${pagesDir}. Run yarn build first.`);
  process.exit(1);
}

const routes = new Map([
  ["/", "index.html"],
  ["/about", "about.html"],
  ["/projects", "projects.html"],
  ["/resume", "resume.html"],
]);
const tagDir = join(pagesDir, "projects/tag");
for (const f of readdirSync(tagDir).filter((f) => f.endsWith(".html"))) {
  routes.set(`/projects/tag/${f.replace(/\.html$/, "")}`, `projects/tag/${f}`);
}

const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`));
  return m ? m[1] : null;
};
const metas = (html) => [...html.matchAll(/<meta\b[^>]*>/g)].map((m) => m[0]);
const metaContent = (html, key, value) =>
  metas(html)
    .filter((t) => attr(t, key) === value)
    .map((t) => attr(t, "content"));

const indexable = new Set();

for (const [route, file] of routes) {
  const html = readFileSync(join(pagesDir, file), "utf8");
  const expected = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  const isTag = route.startsWith("/projects/tag/");

  const title = html.match(/<title\b[^>]*>([^<]*)<\/title>/)?.[1];
  if (!title) fail(route, "missing <title>");
  else if (title.length > 65) fail(route, `title is ${title.length} chars: ${title}`);

  const desc = metaContent(html, "name", "description");
  if (desc.length !== 1 || !desc[0]) fail(route, "needs exactly one meta description");

  const canonicals = [...html.matchAll(/<link\b[^>]*rel="canonical"[^>]*>/g)].map((m) => attr(m[0], "href"));
  if (canonicals.length !== 1 || canonicals[0] !== expected)
    fail(route, `canonical ${JSON.stringify(canonicals)} != ${expected}`);

  const ogUrl = metaContent(html, "property", "og:url");
  if (ogUrl.length !== 1 || ogUrl[0] !== expected) fail(route, `og:url ${JSON.stringify(ogUrl)} != ${expected}`);

  const ogImage = metaContent(html, "property", "og:image");
  if (ogImage[0] !== `${SITE_URL}/static/og-image.png`) fail(route, `og:image ${ogImage[0]}`);

  if (metaContent(html, "name", "twitter:card")[0] !== "summary_large_image")
    fail(route, "twitter:card missing or not name=");
  if (metas(html).some((t) => /property="twitter:/.test(t))) fail(route, "twitter tag uses property=");
  if (metaContent(html, "name", "keywords").length) fail(route, "meta keywords present");

  const robots = metaContent(html, "name", "robots").join(",");
  if (isTag && !/noindex/.test(robots)) fail(route, "tag page must be noindex");
  if (!isTag && /noindex/.test(robots)) fail(route, "page must be indexable");
  if (!isTag) indexable.add(expected);

  const h1s = html.match(/<h1\b/g) || [];
  if (h1s.length !== 1) fail(route, `expected one h1, found ${h1s.length}`);

  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  const noAlt = imgs.filter((t) => attr(t, "alt") === null);
  if (noAlt.length) fail(route, `${noAlt.length}/${imgs.length} <img> without alt: ${noAlt[0].slice(0, 120)}`);

  const blocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (blocks.length !== 1) fail(route, `expected one JSON-LD block, found ${blocks.length}`);
  for (const [, raw] of blocks) {
    let data;
    try {
      data = JSON.parse(raw);
    } catch (e) {
      fail(route, `JSON-LD does not parse: ${e.message}`);
      continue;
    }
    const nodes = data["@graph"] || [];
    const person = nodes.find((n) => n["@type"] === "Person");
    if (!person || person["@id"] !== `${SITE_URL}/#person`) fail(route, "Person @id missing");
    if (person && person.url !== `${SITE_URL}/`) fail(route, `Person url ${person.url}`);
    if (!nodes.some((n) => n["@type"] === "WebSite")) fail(route, "WebSite node missing");
    if (route === "/about" && !nodes.some((n) => n["@type"] === "ProfilePage"))
      fail(route, "ProfilePage node missing");
    if (/[–—]/.test(raw)) fail(route, "dash in JSON-LD");
  }

  for (const [re, what] of [
    [/vercel\.app/i, "vercel.app reference"],
    [/brayden/i, "template author identity"],
    [/googletagmanager|gtag\(|GTM-/i, "Google Tag Manager or gtag"],
    [/id=undefined|'undefined'/, "undefined analytics id"],
    [/contra\.com/i, "Contra embed"],
    [/—|–/, "em or en dash in page"],
  ]) {
    if (re.test(html)) fail(route, what);
  }
}

// robots.txt and sitemap.xml are static files in public/.
const robots = readFileSync(join(root, "public/robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) fail("robots.txt", "Sitemap line wrong");
if (/crawl-delay/i.test(robots)) fail("robots.txt", "Crawl-delay present");
if ((robots.match(/^User-agent:/gim) || []).length !== 1) fail("robots.txt", "expected a single User-agent group");

const sitemap = readFileSync(join(root, "public/sitemap.xml"), "utf8");
const locs = [...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
const today = new Date().toISOString().slice(0, 10);
for (const loc of locs) {
  if (!indexable.has(loc)) fail("sitemap.xml", `${loc} is not an indexable built page`);
}
for (const url of indexable) if (!locs.includes(url)) fail("sitemap.xml", `missing ${url}`);
for (const [, d] of sitemap.matchAll(/<lastmod>([^<]*)<\/lastmod>/g)) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || d > today) fail("sitemap.xml", `bad or future lastmod ${d}`);
}

// OG image must exist at the advertised size (PNG IHDR width/height).
const og = join(root, "public/static/og-image.png");
if (!existsSync(og)) fail("og-image.png", "missing");
else {
  const buf = readFileSync(og);
  const w = buf.readUInt32BE(16);
  const h = buf.readUInt32BE(20);
  if (w !== 1200 || h !== 630) fail("og-image.png", `is ${w}x${h}, expected 1200x630`);
}

if (failures.length) {
  console.error(`SEO build check failed (${failures.length}):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`SEO build check passed: ${routes.size} pages, ${locs.length} sitemap URLs.`);
