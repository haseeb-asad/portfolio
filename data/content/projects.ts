import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "@/types";

const projects: Project[] = [
  {
    id: 0,
    title: "Synopt",
    desc: "An AI observability control plane for engineering orgs — usage analytics, per-team cost attribution, and secret detection across Claude Code, Codex and Cursor in one dashboard. The agent is open source and self-hosted, so prompt telemetry never leaves your own infrastructure.",
    img: "/static/images/project-synopt.svg",
    links: [
      { label: "Website", url: "https://synopt.dev" },
      { label: "Demo", url: "https://synopt.dev/demo" },
      { label: "GitHub", url: "https://github.com/haseeb-asad/observability" },
    ],
    tags: ["AI Observability", "Security", "Open Source", "Platform", "Full Stack"],
  },
  {
    id: 1,
    title: "Taperlark",
    desc: "A studio of small, focused macOS apps: CoolCurve for temperature monitoring and fan control on Apple silicon, Preen for menu-bar camera preview, and Submix for per-app volume and audio routing. Download first, license the tools you keep.",
    img: "/static/images/project-taperlark.svg",
    links: [
      { label: "Website", url: "https://taperlark.com" },
    ],
    tags: ["macOS", "Native Apps", "Desktop", "Apple Silicon"],
  },
  {
    id: 2,
    title: "BookWithKhelo",
    desc: "A comprehensive booking platform for sports facilities with mobile apps for both Android and iOS. Enables users to discover, book, and manage sports venue reservations seamlessly across Pakistan.",
    img: "/static/images/project-bookwithkhelo.svg",
    links: [
      { label: "Website", url: "https://bookwithkhelo.com" },
      { label: "Android App", url: "https://play.google.com/store/apps/details?id=com.bookwithkhelo" },
      { label: "iOS App", url: "https://apps.apple.com/app/bookwithkhelo" },
    ],
    tags: ["React Native", "Mobile Apps", "Booking System", "iOS", "Android", "Full Stack"],
  },
  {
    id: 3,
    title: "Sehatmand",
    desc: "A comprehensive health and wellness platform providing healthcare solutions and services. Built to streamline healthcare management and patient care.",
    img: "/static/images/project-sehatmand.svg",
    links: [
      { label: "Website", url: "https://sehatmand.io" },
    ],
    tags: ["Healthcare", "Web App", "NextJS", "Full Stack"],
  },
  {
    id: 4,
    title: "Querify",
    desc: "A powerful query and data management platform designed to simplify complex data operations. Enables efficient data querying and analytics for businesses.",
    img: "/static/images/project-querify.svg",
    links: [
      { label: "Website", url: "https://querify.tech" },
    ],
    tags: ["Data Management", "Query Engine", "Web App", "Analytics"],
  },
  {
    id: 5,
    title: "NativeOps",
    desc: "DevOps and infrastructure management platform for native applications and cloud operations. Streamlines deployment, monitoring, and scaling of cloud-native applications.",
    img: "/static/images/project-nativeops.svg",
    links: [
      { label: "Website", url: "https://nativeops.tech" },
    ],
    tags: ["DevOps", "Cloud", "Infrastructure", "Platform"],
  },
  {
    id: 6,
    title: "openwhenitstime.com",
    desc: "A personal project that lets users create time-locked digital messages and letters. Write something today, set a date, and the recipient can only open it when the time comes. Built with Next.js.",
    img: "/static/images/project-openwhenitstime.svg",
    links: [
      { label: "Website", url: "https://openwhenitstime.com" },
    ],
    tags: ["NextJS", "Side Project"],
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
