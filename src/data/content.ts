// All copy lives here. Replace the sample content with Vortiq's real details.
import type {
  NavLink,
  ProcessStep,
  Project,
  Service,
  Stat,
  Testimonial,
} from "@/types";

export const company = {
  name: "Vortiq",
  tagline: "Software that moves your business forward.",
  intro:
    "We design, build and run web, mobile, cloud and AI products for growing companies.",
  email: "hello@vortiq.example",
  phone: "+91 00000 00000",
  whatsapp: "https://wa.me/910000000000",
  address: "Mohali, Punjab, India",
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
];

export const services: Service[] = [
  {
    icon: "code",
    title: "Web Development",
    description: "Scalable, high-performance websites and web applications tailored to business needs.",
  },
  {
    icon: "mobile",
    title: "Mobile App Development",
    description: "Intuitive Android and iOS applications built for seamless user experiences.",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description: "Secure cloud infrastructure, automated deployments, and optimized operations.",
  },
  {
    icon: "spark",
    title: "AI & Intelligent Automation",
    description: "AI-powered applications and intelligent workflows that drive efficiency.",
  },
  {
    icon: "layout",
    title: "UI/UX Design",
    description: "User-centric digital experiences combining functionality, usability, and visual clarity.",
  },
  {
    icon: "compass",
    title: "IT Consulting",
    description: "Strategic technology guidance aligned with business objectives and long-term growth.",
  },
];

export const projects: Project[] = [
  { title: "Sample Project One", client: "Client A", category: "Web", summary: "A customer portal for managing orders and invoices.", result: "40% fewer support calls" },
  { title: "Sample Project Two", client: "Client B", category: "Mobile", summary: "A delivery tracking app for field teams.", result: "25k+ active users" },
  { title: "Sample Project Three", client: "Client C", category: "Cloud", summary: "Migration of legacy servers to a managed cloud setup.", result: "30% lower hosting cost" },
  { title: "Sample Project Four", client: "Client D", category: "AI", summary: "A document-reading assistant for the operations team.", result: "10 hrs saved per week" },
  { title: "Sample Project Five", client: "Client E", category: "Web", summary: "A multi-branch booking platform with online payments.", result: "2x online bookings" },
  { title: "Sample Project Six", client: "Client F", category: "AI", summary: "Demand forecasting dashboard for inventory planning.", result: "18% less stock waste" },
];

export const stats: Stat[] = [
  { value: 8, suffix: "+", label: "Years in business" },
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 60, suffix: "+", label: "Happy clients" },
  { value: 35, suffix: "", label: "Team members" },
];

export const techStack = [
  "React", "TypeScript", "Node.js", "Python", "Flutter", "AWS",
  "Azure", "Docker", "Kubernetes", "PostgreSQL", "TensorFlow", "Figma",
];

export const processSteps: ProcessStep[] = [
  { title: "Discover", description: "We learn your goals, users and constraints." },
  { title: "Design", description: "We shape the solution and share clickable prototypes." },
  { title: "Build", description: "We develop in short sprints with regular demos." },
  { title: "Launch and support", description: "We deploy, monitor and keep improving." },
];

export const testimonials: Testimonial[] = [
  { quote: "Vortiq delivered on time and explained every decision clearly.", name: "Client Name", role: "CEO, Company A" },
  { quote: "The team felt like part of ours. The product launched without surprises.", name: "Client Name", role: "CTO, Company B" },
  { quote: "Our new platform paid for itself within the first year.", name: "Client Name", role: "Founder, Company C" },
];
