# Haseeb Asad — Portfolio

Personal portfolio and project showcase for Haseeb Asad, Full-Stack Engineer.

**Live:** [haseebasad.vercel.app](https://haseebasad.vercel.app)

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
    Page.tsx             # Page shell (SEO, analytics)
    Reveal.tsx           # Scroll-reveal wrapper (IntersectionObserver)
data/
  content/
    projects.ts          # Personal projects
    clientProjects.ts    # Client work
    home.ts              # Skills, testimonials, experience (career history)
    designs.ts           # About page content
  global.ts              # Routes and footer
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

- **Projects** — edit [`data/content/clientProjects.ts`](data/content/clientProjects.ts) (client work) and [`data/content/projects.ts`](data/content/projects.ts) (personal projects).
- **Career history** — edit the `experience` list in [`data/content/home.ts`](data/content/home.ts).
- **Skills & testimonials** — also in [`data/content/home.ts`](data/content/home.ts).
- **Navigation & footer** — [`data/global.ts`](data/global.ts).

## Deployment

Pushes to `main` auto-deploy via Vercel.
