import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const clientProjects: Project[] = [
  {
    id: 0,
    title: "BookWithKhelo",
    desc: "A comprehensive booking platform for sports facilities with mobile apps for both Android and iOS. Enables users to discover, book, and manage sports venue reservations seamlessly across Pakistan.",
    img: "/static/images/project-nebula.jpg",
    links: [
      { label: "Website", url: "https://bookwithkhelo.com" },
      { label: "Android App", url: "https://play.google.com/store/apps/details?id=com.bookwithkhelo" },
      { label: "iOS App", url: "https://apps.apple.com/app/bookwithkhelo" },
    ],
    tags: ["React Native", "Mobile Apps", "Booking System", "iOS", "Android", "Full Stack"],
  },
  {
    id: 1,
    title: "Sehatmand",
    desc: "A comprehensive health and wellness platform providing healthcare solutions and services. Built to streamline healthcare management and patient care.",
    img: "/static/images/project-echo.jpg",
    links: [
      { label: "Website", url: "https://sehatmand.io" },
    ],
    tags: ["Healthcare", "Web App", "NextJS", "Full Stack"],
  },
  {
    id: 2,
    title: "Querify",
    desc: "A powerful query and data management platform designed to simplify complex data operations. Enables efficient data querying and analytics for businesses.",
    img: "/static/images/project-terra.jpg",
    links: [
      { label: "Website", url: "https://querify.tech" },
    ],
    tags: ["Data Management", "Query Engine", "Web App", "Analytics"],
  },
  {
    id: 3,
    title: "NativeOps",
    desc: "DevOps and infrastructure management platform for native applications and cloud operations. Streamlines deployment, monitoring, and scaling of cloud-native applications.",
    img: "/static/images/project-mnemosyne.jpg",
    links: [
      { label: "Website", url: "https://nativeops.tech" },
    ],
    tags: ["DevOps", "Cloud", "Infrastructure", "Platform"],
  },
];

export const allClientTags = []

clientProjects.forEach((project) => {
  project.tags.forEach((tag) => !allClientTags.includes(tag) && allClientTags.push(tag))
});

export const allKebabClientTags = allClientTags.map(tag => (
  kebabCase(tag)
))

export default clientProjects
