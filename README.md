# Haseeb Asad — Portfolio

Personal portfolio and project showcase for Haseeb Asad, Full-Stack Engineer.

**Live:** [haseebasad.vercel.app](https://haseebasad.vercel.app)

---

## Stack

- **Framework:** Next.js (Pages Router) + TypeScript
- **Styling:** Tailwind CSS + inline styles
- **Animations:** GSAP + ScrollTrigger
- **Fonts:** Geist Pixel, IBM Plex Mono, Fragment Mono
- **Deployment:** Vercel

## Structure

```
pages/
  index.tsx              # Homepage (brutalist landing)
  projects.tsx           # Full projects list
  projects/[slug].tsx    # Project detail pages
  about.tsx              # About page
components/
  brutalist/             # New design components (Hero, Manifesto, Facilities, Archives, Contact...)
  Projects/              # Project card and grid components
  designs/               # About page components
  utility/Page.tsx       # Page shell (SEO, analytics)
data/
  brutalConfig.ts        # All homepage content (projects, career, config)
  content/               # Projects data
public/static/
  images/                # Project images
  videos/                # Manifesto video
  fonts/                 # Geist Pixel (self-hosted)
  favicon/               # Favicon set
```

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All homepage content lives in [`data/brutalConfig.ts`](data/brutalConfig.ts) — update projects, career history, nav links, and copy there.

Project detail pages at `/projects/[slug]` are statically generated from `facilitiesConfig.items` in the same file.

## Deployment

Pushes to `main` auto-deploy via Vercel.
