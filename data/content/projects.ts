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
  // {
  //   id: 2,
  //   title: "nextotp.tech",
  //   desc: "A SAAS platform that provides OTPs (for 2FA) for your applications using Whatsapp API at a cheap rate.",
  //   img: "/static/projects/nextotp.png",
  //   link: "https://nextotp.tech",
  //   tags: ["NextJS", "Stripe", "whatsapp API", "Express", "Vercel", "API", "AI", "NLP"],
  // },
  {
    id: 2,
    title: "BookWithKhelo",
    desc: "A comprehensive booking platform for sports facilities with mobile apps for both Android and iOS. Enables users to discover, book, and manage sports venue reservations seamlessly.",
    img: "/static/projects/bookwithkhelo.png",
    links: [
      { label: "Website", url: "https://bookwithkhelo.com" },
      { label: "Android App", url: "https://play.google.com/store/apps/details?id=com.bookwithkhelo" },
      { label: "iOS App", url: "https://apps.apple.com/app/bookwithkhelo" },
    ],
    tags: ["React Native", "Mobile Apps", "Booking System", "iOS", "Android"],
  },
  {
    id: 3,
    title: "Sehatmand",
    desc: "A health and wellness platform providing comprehensive healthcare solutions and services.",
    img: "/static/projects/sehatmand.png",
    links: [
      { label: "Website", url: "https://sehatmand.io" },
    ],
    tags: ["Healthcare", "Web App", "NextJS"],
  },
  {
    id: 4,
    title: "Querify",
    desc: "A powerful query and data management platform designed to simplify complex data operations.",
    img: "/static/projects/querify.png",
    links: [
      { label: "Website", url: "https://querify.tech" },
    ],
    tags: ["Data Management", "Query Engine", "Web App"],
  },
  {
    id: 5,
    title: "NativeOps",
    desc: "DevOps and infrastructure management platform for native applications and cloud operations.",
    img: "/static/projects/nativeops.png",
    links: [
      { label: "Website", url: "https://nativeops.tech" },
    ],
    tags: ["DevOps", "Cloud", "Infrastructure", "Platform"],
  },
  {
    id: 6,
    title: "RAFT Implementatino - Distributed Systems",
    desc: "A simple implementation of the RAFT consensus algorithm in GoLang.",
    img: "/static/projects/github_project.png",
    github: "https://github.com/haseeb-asad/raft-project",
    tags: ["GoLang", "Distributed Systems", "RAFT"],
  },
  {
    id: 7,
    title: "RAG Implementaion, talk to your documents!",
    desc: "A simple implementation of the RAG (Retrieval Augmented Generation) model in Python.",
    img: "/static/projects/github_project.png",
    github: "https://github.com/haseeb-asad/rag_implementation",
    tags: ["Python", "HuggingFace", "RAG"],
  },
  {
    id: 8,
    title: "OTP Server for 2FA",
    desc: "A Flask server deployed onto Amazon EC2 to provide OTPs for 2FA JavaScript and session management and delivering through simple API.",
    img: "/static/projects/github_project.png",
    github: "https://github.com/haseeb-asad/otpserver",
    tags: ["Flask", "Python", "EC2", "AWS", "API", "2FA"],
  },
  {
    id: 9,
    title: "Stock Price API",
    desc: "A Flask server deployed with docker onto Google Cloud Run to fetch real time prices of any stock using yfinance.",
    img: "/static/projects/stockapi.png",
    github: "https://github.com/haseeb-asad/stockPriceFetcher",
    tags: ["Flask", "Python", "Docker", "Google Cloud Run", "API"],
  },
  {
    id: 10,
    title: "Crypto Price API",
    desc: "A Flask server deployed with docker onto Google Cloud Run to fetch real time prices of any cryptocurrency using coingecko.",
    img: "/static/projects/cryptoapi.png",
    github: "https://github.com/haseeb-asad/cryptoPriceFetcher",
    tags: ["Flask", "Python", "Docker", "Google Cloud Run", "API"],
  },
  {
    id: 11,
    title: "Remove Background App",
    desc: "A simple web application using AI to remove background from images.",
    img: "/static/projects/bgremove.png",
    link: "https://remove-background-tvrqmtjgja-uc.a.run.app/",
    github: "https://github.com/haseeb-asad/removeBackground",
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
