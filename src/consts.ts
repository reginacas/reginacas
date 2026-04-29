import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Regina Castro",
  DESCRIPTION: "Astro Micro is an accessible and lightweight blog.",
  EMAIL: "reginacas97@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Regina Castro",
  DESCRIPTION: "Regina Castro is a Design Engineer and master's student in Human-Computer Interaction at the University of Siegen.",
};

export const BLOG: Metadata = {
  TITLE: "Feed",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Work",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/reginacas",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/reginacas",
  },
];
