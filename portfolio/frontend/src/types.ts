export type Socials = {
  label: string;
  href: string;
  value: string;
};

export type Technology = {
  tag: string;
  icon: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  technologies: Technology[];
  primary: {
    title: string;
    href: string;
  };
  secondary: {
    title: string;
    href: string;
  };
};
