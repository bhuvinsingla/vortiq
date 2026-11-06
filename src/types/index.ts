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

export interface AppScreen {
  device: "web" | "mobile";
  product: string;
  caption: string;
  metrics: { label: string; value: string }[];
  rows: { label: string; meta: string }[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  vertical: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  built: string[];
  result: string;
  stack: string[];
  screen: AppScreen;
}

export interface Vertical {
  id: string;
  label: string;
  title: string;
  description: string;
  values: { value: string; label: string }[];
  screen: AppScreen;
  projectId: string;
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
