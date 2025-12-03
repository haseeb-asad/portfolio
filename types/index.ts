export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  links?: {
    label: string;
    url: string;
  }[];
  tags: string[];
};
