import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "openwhenitstime.com",
    desc: "A personal project that lets users create time-locked digital messages and letters. Write something today, set a date, and the recipient can only open it when the time comes. Built with Next.js.",
    img: "/static/images/project-openwhenitstime.jpg",
    link: "https://openwhenitstime.com",
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
