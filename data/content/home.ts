type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Experience = {
  company: string,
  role: string,
  tech: string,
  current?: boolean,
  url?: string
};

export const experience: Experience[] = [
  {
    company: "Oasys",
    role: "Software Engineer",
    tech: "Software for therapy group practices",
    current: true,
    url: "https://oasys.health",
  },
  {
    company: "Codex Labs",
    role: "Founder",
    tech: "Automation, AI agents, web, mobile and macOS apps",
    current: true,
    url: "https://www.codex-labs.dev",
  },
  {
    company: "Khoros (IgniteTech)",
    role: "AI-First Software Engineer II",
    tech: "AI / Full Stack",
    url: "https://www.linkedin.com/company/khoros/",
  },
  {
    company: "Glow",
    role: "Lead Engineer",
    tech: "Full Stack",
    url: "https://www.linkedin.com/company/glowinsurance",
  },
  {
    company: "Bazaar",
    role: "Software Engineer II",
    tech: "Spring Boot / Kotlin / Java",
    url: "https://www.linkedin.com/company/bazaartechnologies/",
  },
];


export const skills: Skill[] = [
  {
    title: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    title: "Stripe",
    icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
  },
  {
    title: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    title: "Google Cloud",
    icon: "/static/icons/googlecloud.svg",
  },
  {
    title: "AWS Services",
    icon: "/static/icons/aws.png",
    style: { filter: "invert(1)" },

  },
  {
    title: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    style: { filter: "invert(1)" },

  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "/static/icons/tailwind.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];
