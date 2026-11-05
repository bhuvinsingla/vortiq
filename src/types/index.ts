export interface NavLink {
  label: string;
  href: string;
}

export type IconName =
  | "code"
  | "mobile"
  | "cloud"
  | "spark"
  | "layout"
  | "compass"
  | "arrow"
  | "mail"
  | "pin";

export interface Service {
  title: string;
  description: string;
  icon: IconName;
}

export type ProjectCategory = "Web" | "Mobile" | "Cloud" | "AI";

export interface Project {
  title: string;
  client: string;
  category: ProjectCategory;
  summary: string;
  result: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
