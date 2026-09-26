# Haseeb Asad: personal site

Personal site of Haseeb Asad: software engineer at Oasys and founder of Codex Labs.

**Live:** [www.haseebasad.com](https://www.haseebasad.com)

---

## Stack

- **Framework:** Next.js (Pages Router) + TypeScript
- **Styling:** Tailwind CSS + inline styles
- **Animations:** CSS transitions + IntersectionObserver scroll reveals (no animation dependencies)
- **Deployment:** Vercel

## Structure

```
pages/
  index.tsx              # Homepage (hero, projects, experience, skills, testimonials)
  projects.tsx           # Full projects list (client work + personal projects)
  projects/tag/[tag].tsx # Projects filtered by tag
  about.tsx              # About page
components/
  home/                  # Homepage sections (Hero, Projects, Experience, Skills, Testimonials, CTA)
  Projects/              # Project card and grid components
  designs/               # About page components
  global/                # Navbar, MobileNavbar, Footer, SectionTitle
  utility/
    Page.tsx             # Page shell: canonical, OG, JSON-LD
    Reveal.tsx           # Scroll-reveal wrapper (IntersectionObserver)
data/
  content/
    projects.ts          # Personal projects
    home.ts              # Skills, testimonials, experience (career history)
  global.ts              # Routes and footer
lib/
  site.ts                # SITE_URL, identity, Oasys and Codex Labs links
  structured-data.ts     # Person, WebSite, ProfilePage JSON-LD
scripts/
  verify-seo-build.mjs   # checks built HTML (yarn build && yarn verify:seo)
  ping-indexnow.sh       # IndexNow submit, dry run unless --execute
public/static/
  images/                # Project images
  doodles/               # Decorative SVGs
  icons/                 # Skill/social icons
  favicon/               # Favicon set
```

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

- **Projects**: edit [`data/content/projects.ts`](data/content/projects.ts).
- **Career history**: edit the `experience` list in [`data/content/home.ts`](data/content/home.ts).
- **Skills & testimonials**: also in [`data/content/home.ts`](data/content/home.ts).
- **Navigation & footer**: [`data/global.ts`](data/global.ts).

## Deployment

Pushes to `main` auto-deploy via Vercel. The canonical host is
`https://www.haseebasad.com`; `haseebasad.vercel.app` 308s to it (see
`next.config.js`). Analytics is Vercel Web Analytics (`@vercel/analytics`),
which must be enabled in the Vercel project dashboard.

Before merging SEO-affecting changes:

```bash
yarn typecheck && yarn build && yarn verify:seo
```

After a production deploy: `yarn indexnow` (dry run), then
`yarn indexnow --execute`.
