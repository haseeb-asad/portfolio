import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "FinTrail App",
    desc: "Track all your financials in one place, A simple phone application to track your expenses, income, bill splitting and investments.",
    img: "/static/projects/fintrail.png",
    link: "https://play.google.com/store/apps/details?id=com.flutterflow.fintrail",
    tags: ["Flutter", "Flask", "GCP", "AWS", "API"],
  },
  {
    id: 1,
    title: "dataclean.tech",
    desc: "A SAAS Startup that uses AI to provide clean APIs for extracting unstructured data from text and converting it into structured data.",
    img: "/static/projects/dataclean.png",
    link: "https://dataclean.tech",
    tags: ["NextJS", "Stripe", "Express", "Vercel", "API", "AI", "NLP"],
  },
  {
    id: 2,
    title: "nextotp.tech",
    desc: "A SAAS platform that provides OTPs for your applications using Whatsapp API at a cheap rate.",
    img: "/static/projects/nextotp.png",
    link: "https://nextotp.tech",
    tags: ["NextJS", "Stripe", "whatsapp API", "Express", "Vercel", "API", "AI", "NLP"],
  },
  {
    id: 3,
    title: "SecureTeams",
    desc: "A Secure Platform for IT Companies to manage their teams and projects. Secured using encryption in storage and transit. Real-time chat and file sharing using sockets.",
    img: "/static/projects/secureteams.png",
    link: "https://secureteams.onrender.com/",
    github: "https://github.com/HaseeebA/SecureTeams",
    tags: ["React", "TailwindCSS", "CSS", "MongoDB", "Socket.io"],
  },
  {
    id: 4,
    title: "Stock Price API",
    desc: "A Flask server deployed with docker onto Google Cloud Run to fetch real time prices of any stock using yfinance.",
    img: "/static/projects/stockapi.png",
    github: "https://github.com/HaseeebA/stockPriceFetcher",
    tags: ["Flask", "Python", "Docker", "Google Cloud Run", "API"],
  },
  {
    id: 5,
    title: "Crypto Price API",
    desc: "A Flask server deployed with docker onto Google Cloud Run to fetch real time prices of any cryptocurrency using coingecko.",
    img: "/static/projects/cryptoapi.png",
    github: "https://github.com/HaseeebA/cryptoPriceFetcher",
    tags: ["Flask", "Python", "Docker", "Google Cloud Run", "API"],
  },
  {
    id: 6,
    title: "Remove Background App",
    desc: "A simple web application using AI to remove background from images.",
    img: "/static/projects/bgremove.png",
    link: "https://remove-background-tvrqmtjgja-uc.a.run.app/",
    github: "https://github.com/HaseeebA/removeBackground",
    tags: ["Flask", "Python", "Rembg", "API", "Render", "Docker"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
