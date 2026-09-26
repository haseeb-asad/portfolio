// Single source of truth for the site's host, identity and outbound links.
// Every canonical, og:url, sitemap entry and JSON-LD url is built from
// SITE_URL, so it must always equal the host that actually serves the site.
// haseebasad.vercel.app redirects here (see next.config.js).

export const SITE_URL = "https://www.haseebasad.com";
export const SITE_NAME = "Haseeb Asad";

export const PERSON = {
  name: "Haseeb Asad",
  // Keep in sync with the Oasys entry in data/content/home.ts.
  jobTitle: "Software Engineer",
  // One line, reused in meta, JSON-LD, llms.txt and the OG image.
  tagline:
    "Software engineer at Oasys and founder of Codex Labs, a studio for automation, AI agents, web, mobile and macOS apps.",
  image: "/static/misc/my.jpeg",
  email: "haseebasad305@gmail.com",
  github: "https://github.com/haseeb-asad",
  linkedin: "https://www.linkedin.com/in/haseeb-asad/",
};

export const OASYS = {
  name: "Oasys",
  url: "https://oasys.health",
  descriptor: "software for therapy group practices",
};

export const CODEX_LABS = {
  name: "Codex Labs",
  url: "https://www.codex-labs.dev",
  getStarted: "https://www.codex-labs.dev/get-started",
  email: "support@codex-labs.dev",
  // Always pair the name with this descriptor: "Codex Labs" alone collides
  // with other brands.
  descriptor: "a studio for automation, AI agents, web, mobile and macOS apps",
};

export const OG_IMAGE = {
  path: "/static/og-image.png",
  width: 1200,
  height: 630,
  alt: "Haseeb Asad: software engineer at Oasys and founder of Codex Labs",
};

/** Absolute URL on the canonical host for a path like "/about". */
export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Canonical URL for a router.asPath: path only, no query or hash. */
export function canonicalFromAsPath(asPath: string): string {
  const path = (asPath || "/").split(/[?#]/)[0] || "/";
  const trimmed = path.length > 1 ? path.replace(/\/+$/, "") : path;
  return absoluteUrl(trimmed);
}
