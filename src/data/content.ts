// Site copy. Project and vertical details describe the platforms Vortiq ships.
import type {
  NavLink,
  ProcessStep,
  Project,
  Service,
  Stat,
  Testimonial,
  Vertical,
} from "@/types";

export const company = {
  name: "Vortiq",
  tagline: "Software that moves your business forward.",
  intro:
    "We design, build and run web, mobile, cloud and AI products for healthcare, logistics, retail, finance and industry.",
  email: "hello@vortiq.example",
  phone: "+91 00000 00000",
  whatsapp: "https://wa.me/910000000000",
  address: "Mohali, Punjab, India",
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Verticals", href: "#verticals" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
];

export const services: Service[] = [
  {
    icon: "code",
    title: "Web Development",
    description:
      "Portals, marketplaces and internal tools built to stay fast as branches, users and data grow.",
  },
  {
    icon: "mobile",
    title: "Mobile App Development",
    description:
      "Android and iOS apps for people in the field: drivers, clinicians, store staff and warehouse teams.",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Migrations, CI/CD and managed infrastructure so releases are repeatable and hosting stays predictable.",
  },
  {
    icon: "spark",
    title: "AI & Intelligent Automation",
    description:
      "Document extraction, forecasting and workflow automation that remove repetitive operations work.",
  },
  {
    icon: "layout",
    title: "UI/UX Design",
    description:
      "Screens mapped to the job: dashboards, booking flows and mobile tasks that staff can learn in a shift.",
  },
  {
    icon: "compass",
    title: "IT Consulting",
    description:
      "A clear build plan, stack and rollout sequence before a line of product code is written.",
  },
];

export const projects: Project[] = [
  {
    id: "medisync",
    title: "MediSync Portal",
    client: "Multi-clinic hospital groups",
    vertical: "Healthcare",
    category: "Web",
    summary:
      "One patient and staff portal for appointments, prescriptions and lab reports across clinics.",
    description:
      "Front desks were running appointments on phone calls and paper slips, while lab reports lived in a separate system. MediSync gives each clinic a shared schedule and gives patients a login for bookings, prescriptions and reports.",
    built: [
      "Branch-aware appointment calendar with doctor slots",
      "Patient record with prescriptions and lab PDFs",
      "Role access for reception, doctors and lab staff",
    ],
    result: "40% fewer support calls",
    stack: ["React", "Node.js", "PostgreSQL"],
    screen: {
      device: "web",
      product: "MediSync",
      caption: "Today · City Clinic",
      metrics: [
        { label: "Booked", value: "128" },
        { label: "Waiting", value: "14" },
        { label: "Reports", value: "36" },
      ],
      rows: [
        { label: "Priya S. · Dr. Mehta", meta: "10:30 · Confirmed" },
        { label: "Lab · CBC panel", meta: "Ready to view" },
        { label: "Rx · Amoxicillin", meta: "Sent to pharmacy" },
      ],
    },
  },
  {
    id: "fleettrack",
    title: "FleetTrack Pro",
    client: "Regional logistics fleets",
    vertical: "Logistics",
    category: "Mobile",
    summary:
      "Live GPS tracking and route plans for dispatchers and drivers on the same job.",
    description:
      "Dispatchers were calling drivers for location updates and rebuilding routes in spreadsheets. FleetTrack shows every vehicle on a live map, pushes the next stop to the driver app, and flags delays before a customer calls.",
    built: [
      "Live map for dispatch with geofenced stops",
      "Driver app with turn-by-turn stop list",
      "Delay alerts when a vehicle leaves the planned window",
    ],
    result: "25k+ active field users",
    stack: ["Flutter", "Node.js", "AWS"],
    screen: {
      device: "mobile",
      product: "FleetTrack",
      caption: "Route 14 · 8 stops",
      metrics: [
        { label: "On time", value: "6" },
        { label: "Next", value: "2 km" },
        { label: "Delay", value: "0" },
      ],
      rows: [
        { label: "Warehouse A", meta: "Done · 08:10" },
        { label: "Sector 17 drop", meta: "En route" },
        { label: "Mohali hub", meta: "Planned · 11:40" },
      ],
    },
  },
  {
    id: "cloudlift",
    title: "CloudLift Migration",
    client: "Manufacturers leaving on-prem ERP",
    vertical: "Manufacturing",
    category: "Cloud",
    summary:
      "Lift of on-prem ERP and plant apps onto AWS with CI/CD and autoscaling.",
    description:
      "Plant systems sat on ageing servers with manual releases and weekend outages. CloudLift moved the ERP and supporting services to AWS, put every release through a pipeline, and sized capacity to the shift pattern instead of a fixed rack.",
    built: [
      "Inventory of servers, jobs and cutover order",
      "CI/CD pipeline with staged production releases",
      "Autoscaling and backup runbooks for the ops team",
    ],
    result: "30% lower hosting cost",
    stack: ["AWS", "Docker", "Kubernetes"],
    screen: {
      device: "web",
      product: "CloudLift",
      caption: "Production · ap-south-1",
      metrics: [
        { label: "Services", value: "18" },
        { label: "Deploys", value: "4/wk" },
        { label: "Uptime", value: "99.9%" },
      ],
      rows: [
        { label: "erp-api", meta: "Healthy · 3 tasks" },
        { label: "Release 2.14", meta: "Shipped 09:12" },
        { label: "Nightly backup", meta: "Completed" },
      ],
    },
  },
  {
    id: "documind",
    title: "DocuMind AI",
    client: "Finance and shared-services teams",
    vertical: "Finance",
    category: "AI",
    summary:
      "Reads invoices and contracts, then posts the extracted fields into the accounting system.",
    description:
      "Accounts teams retyped invoice headers, totals and vendor names from PDFs. DocuMind classifies the document, extracts the fields operators actually post, and queues only the low-confidence rows for a person to check.",
    built: [
      "Upload inbox for invoices and contracts",
      "Field extraction with a confidence score",
      "Review queue and export into the ERP",
    ],
    result: "10 hrs saved per week",
    stack: ["Python", "React", "PostgreSQL"],
    screen: {
      device: "web",
      product: "DocuMind",
      caption: "Inbox · 24 documents",
      metrics: [
        { label: "Auto", value: "19" },
        { label: "Review", value: "5" },
        { label: "Posted", value: "16" },
      ],
      rows: [
        { label: "INV-2041 · Apex Steel", meta: "₹4.2L · 98%" },
        { label: "Contract · Lease", meta: "Needs review" },
        { label: "INV-2038 · GridPower", meta: "Posted" },
      ],
    },
  },
  {
    id: "shopnest",
    title: "ShopNest Commerce",
    client: "Multi-vendor retail groups",
    vertical: "Retail",
    category: "Web",
    summary:
      "Marketplace for many sellers, with payments, inventory and a seller dashboard.",
    description:
      "Sellers were updating stock on WhatsApp while finance reconciled payments in a sheet. ShopNest is the storefront, the seller console and the payout view: catalogue, orders, stock and settlements in one place.",
    built: [
      "Storefront with multi-seller catalogue and checkout",
      "Seller dashboard for stock, orders and returns",
      "Payout ledger tied to successful payments",
    ],
    result: "2× online bookings",
    stack: ["React", "Node.js", "PostgreSQL"],
    screen: {
      device: "web",
      product: "ShopNest",
      caption: "Seller · North Store",
      metrics: [
        { label: "Orders", value: "86" },
        { label: "Stock", value: "1.2k" },
        { label: "Payout", value: "₹6.4L" },
      ],
      rows: [
        { label: "Order #4412", meta: "Packed · 2 items" },
        { label: "SKU-19 running shoes", meta: "12 left" },
        { label: "Settlement · Fri", meta: "Scheduled" },
      ],
    },
  },
  {
    id: "pulseops",
    title: "PulseOps Dashboard",
    client: "Retail and FMCG warehouses",
    vertical: "Supply chain",
    category: "AI",
    summary:
      "Demand forecast and stock alerts so planners order before a shelf or a bin runs out.",
    description:
      "Planners reordered from last month’s sales and found out about stockouts from store complaints. PulseOps forecasts demand by SKU and warehouse, then raises an alert when cover days drop below the rule for that item.",
    built: [
      "SKU-level demand forecast by warehouse",
      "Cover-day alerts for buyers",
      "Planner view of suggested order quantities",
    ],
    result: "18% less stock waste",
    stack: ["Python", "React", "PostgreSQL"],
    screen: {
      device: "web",
      product: "PulseOps",
      caption: "Warehouse · Chandigarh",
      metrics: [
        { label: "SKUs", value: "840" },
        { label: "Alerts", value: "11" },
        { label: "Cover", value: "21d" },
      ],
      rows: [
        { label: "Atta 5kg", meta: "Order 400 · 6 days" },
        { label: "Sunflower oil 1L", meta: "Healthy · 28 days" },
        { label: "Detergent 1kg", meta: "Watch · 9 days" },
      ],
    },
  },
];

export const verticals: Vertical[] = [
  {
    id: "healthcare",
    label: "Healthcare",
    title: "Clinics that run on one schedule.",
    description:
      "Reception, doctors and patients share appointments, prescriptions and lab reports instead of calling the front desk for every update.",
    values: [
      { value: "40%", label: "Fewer support calls" },
      { value: "1", label: "Record across branches" },
      { value: "24h", label: "Typical reply on issues" },
    ],
    screen: projects[0].screen,
    projectId: "medisync",
  },
  {
    id: "logistics",
    label: "Logistics",
    title: "Dispatch that can see the fleet.",
    description:
      "Dispatchers and drivers work from the same route. Location, the next stop and delays show up without a phone round.",
    values: [
      { value: "25k+", label: "Field users" },
      { value: "Live", label: "Map for every vehicle" },
      { value: "1 app", label: "Driver stop list" },
    ],
    screen: projects[1].screen,
    projectId: "fleettrack",
  },
  {
    id: "retail",
    label: "Retail",
    title: "Many sellers, one checkout.",
    description:
      "Catalogue, orders, stock and payouts sit in the same product so a retail group can add sellers without adding spreadsheets.",
    values: [
      { value: "2×", label: "Online bookings" },
      { value: "1", label: "Ledger for payouts" },
      { value: "Live", label: "Seller stock counts" },
    ],
    screen: projects[4].screen,
    projectId: "shopnest",
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    title: "Plant systems that release on a pipeline.",
    description:
      "On-prem ERP and plant apps move to a managed cloud with staged deploys, backups and capacity that follows the shift.",
    values: [
      { value: "30%", label: "Lower hosting cost" },
      { value: "CI/CD", label: "Every production release" },
      { value: "AWS", label: "Target platform" },
    ],
    screen: projects[2].screen,
    projectId: "cloudlift",
  },
  {
    id: "finance",
    label: "Finance",
    title: "Invoices posted without retyping.",
    description:
      "Invoices and contracts are read into the fields accounts already uses. Only low-confidence rows wait for a person.",
    values: [
      { value: "10h", label: "Saved each week" },
      { value: "Score", label: "On every extracted field" },
      { value: "Queue", label: "For exceptions only" },
    ],
    screen: projects[3].screen,
    projectId: "documind",
  },
  {
    id: "supply",
    label: "Supply chain",
    title: "Orders placed before the bin is empty.",
    description:
      "Buyers see demand by SKU and warehouse, with an alert when cover days fall under the rule for that item.",
    values: [
      { value: "18%", label: "Less stock waste" },
      { value: "SKU", label: "Forecast grain" },
      { value: "Days", label: "Cover on every alert" },
    ],
    screen: projects[5].screen,
    projectId: "pulseops",
  },
];

export const stats: Stat[] = [
  { value: 6, suffix: "", label: "Industry verticals" },
  { value: 6, suffix: "", label: "Platforms in market" },
  { value: 40, suffix: "%", label: "Fewer clinic calls" },
  { value: 18, suffix: "%", label: "Less warehouse waste" },
];

export const techStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Flutter",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "TensorFlow",
  "Figma",
];

export const processSteps: ProcessStep[] = [
  { title: "Discover", description: "We learn the workflow, the users and the systems that already exist." },
  { title: "Design", description: "We share the screens and the rollout plan before build starts." },
  { title: "Build", description: "We ship in short sprints with a working demo each cycle." },
  { title: "Launch and support", description: "We deploy, watch the first weeks and keep the backlog moving." },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Patients book visits, open lab reports and read prescriptions without calling the front desk.",
    name: "MediSync Portal",
    role: "Healthcare · Web",
  },
  {
    quote:
      "Dispatch sees the vehicle and the driver sees the next stop. Delay alerts fire before the customer calls.",
    name: "FleetTrack Pro",
    role: "Logistics · Mobile",
  },
  {
    quote:
      "Buyers get a cover-day alert per SKU instead of finding a stockout from a store complaint.",
    name: "PulseOps Dashboard",
    role: "Supply chain · AI",
  },
];
