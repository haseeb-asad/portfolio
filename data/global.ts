import { CODEX_LABS, PERSON } from "@/lib/site";

type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Resume",
    path: "/resume",
  },
  {
    title: "About Me",
    path: "/about",
  },
  {
    title: "Work with me",
    path: "/#work-with-me",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Resume",
          link: "/resume",
          leavesWebsite: false,
        },
        {
          name: "About Me",
          link: "/about",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: PERSON.github,
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: PERSON.linkedin,
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: `mailto:${PERSON.email}`,
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
    {
      title: "Work with me",
      links: [
        {
          name: "Start a project",
          link: CODEX_LABS.getStarted,
          leavesWebsite: true,
        },
        {
          name: "Codex Labs",
          link: `${CODEX_LABS.url}/`,
          leavesWebsite: true,
        },
        {
          name: CODEX_LABS.email,
          link: `mailto:${CODEX_LABS.email}`,
          leavesWebsite: true,
        },
      ],
    },
  ],
};
