export interface Service {
  n: string;
  key: string;
  title: string;
  body: string;
  tags: string[];
}

export const services: Service[] = [
  {
    n: "01",
    key: "platform",
    title: "Platform Development",
    body: "Custom websites, software systems, and mobile applications, engineered to solve real business problems and grow as you do.",
    tags: ["Web", "Mobile", "APIs"],
  },
  {
    n: "02",
    key: "ecom",
    title: "E-Commerce Solutions",
    body: "End-to-end commerce platforms that are intuitive, secure, and built for growth. Listings to checkout to post-sale analytics.",
    tags: ["Storefronts", "Inventory", "Checkout"],
  },
  {
    n: "03",
    key: "payments",
    title: "Payment Gateway Integration",
    body: "Accept mobile money, cards, and bank transfers from a single integration. Fast, auditable, easy to reconcile.",
    tags: ["Mobile money", "Cards", "Banks"],
  },
  {
    n: "04",
    key: "uiux",
    title: "UI/UX Design",
    body: "Clear, modern interfaces that feel natural across devices. Research, information architecture, and visual craft.",
    tags: ["Research", "IA", "Visual"],
  },
  {
    n: "05",
    key: "brand",
    title: "Branding",
    body: "Complete brand identity systems that help businesses stand out. Strategy, logo, visual identity, guidelines.",
    tags: ["Strategy", "Identity", "Guidelines"],
  },
  {
    n: "06",
    key: "marketing",
    title: "Digital Marketing",
    body: "Data-driven digital marketing that grows online presence. Social, campaigns, content strategy.",
    tags: ["Social", "Campaigns", "Content"],
  },
  {
    n: "07",
    key: "advisory",
    title: "Systems Support & Advisory",
    body: "Ongoing technical support and strategic consulting, database optimisation, testing, integration, consulting.",
    tags: ["Support", "Optimisation", "Consulting"],
  },
  {
    n: "08",
    key: "consult",
    title: "Digital Consultation",
    body: "Guided conceptualisation and business case validation before a single line of code. Consultancy-first.",
    tags: ["Discovery", "Validation", "Process"],
  },
];
