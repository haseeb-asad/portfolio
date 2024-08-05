import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "SecureTeams",
    desc: "A Secure Platform for IT Companies to manage their teams and projects. Secured using encryption in storage and transit. Real-time chat and file sharing using sockets.",
    img: "/static/projects/secureteams.png",
    link: "https://secureteams.onrender.com/",
    github: "https://github.com/HaseeebA/SecureTeams",
    tags: ["React", "TailwindCSS", "CSS", "MongoDB", "Socket.io"],
  },
  {
    id: 1,
    title: "Stock Price API",
    desc: "A Flask server deployed with docker onto Google Cloud Run to fetch real time prices of any stock using yfinance.",
    img: "/static/projects/stockapi.png",
    github: "https://github.com/HaseeebA/stockPriceFetcher",
    tags: ["Flask", "Python", "Docker", "Google Cloud Run", "API"],
  },
  {
    id: 2,
    title: "Crypto Price API",
    desc: "A Flask server deployed with docker onto Google Cloud Run to fetch real time prices of any cryptocurrency using coingecko.",
    img: "/static/projects/react-emoji-search.png",
    github: "https://github.com/HaseeebA/cryptoPriceFetcher",
    tags: ["Flask", "Python", "Docker", "Google Cloud Run", "API"],
  },
  {
    id: 3,
    title: "Remove Background Application",
    desc: "A simple web application using AI to remove background from images.",
    img: "/static/projects/bitcointemp.png",
    link: "https://remove-bg-latest.onrender.com",
    github: "https://github.com/HaseeebA/removeBackground",
    tags: ["Flask", "Python", "Rembg", "API", "Render", "Docker"],
  },
  // {
  //   id: 4,
  //   title: "CasaMigo Android Application",
  //   desc: "Generate a vanilla HTML boilerplate in a flash!",
  //   img: "/static/projects/create-html-boilerplate.png",
  //   tags: ["Node", "Javascript", "NPM", "HTML"],
  // },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
