export interface CaseStudyDetail {
  id: string;
  tag: string;
  client: string;
  year: string;
  title: string;
  challenge: string;
  solution: string;
  services: string[];
  bg: string;
  accent: string;
  fg: string;
}

export const caseStudies: CaseStudyDetail[] = [
  {
    id: "casandra",
    tag: "Automotive · Media",
    client: "Casandra",
    year: "2025",
    title: "A lifestyle platform, restructured around two clear journeys.",
    challenge:
      "Casandra is a lifestyle platform in Tanzania connecting users to cars, car-related services, and video content. The previous platform suffered from limited features and poor navigation, resulting in a disjointed experience.",
    solution:
      "Lockwood redesigned the platform and restructured the entire user experience around two clear journeys, Casandra Automotive and Casandra TV, making the platform significantly more intuitive, engaging, and purposeful.",
    services: ["UI/UX Design", "Platform Development", "Branding"],
    bg: "#0E0F15",
    accent: "#FF6A3D",
    fg: "#fff",
  },
  {
    id: "smart-meter",
    tag: "Utilities · Government",
    client: "Smart Meter Middleware",
    year: "2025",
    title: "Water tokens in seconds, delivered by mobile money.",
    challenge:
      "With the rollout of smart water meters and an active government API (MAJIIS) for digital token purchases, the client needed a reliable middleware layer to connect consumer mobile platforms directly to the utility billing system.",
    solution:
      "Lockwood developed a middleware integration connecting mobile applications to MAJIIS, enabling users to purchase water tokens instantly using mobile money. The solution removed physical vending and eliminated manual reconciliation.",
    services: ["Platform Development", "Payment Gateway Integration", "Systems Support & Advisory"],
    bg: "#1F49FF",
    accent: "#fff",
    fg: "#fff",
  },
  {
    id: "gva",
    tag: "Real Estate · Property",
    client: "Great Vision Adventures",
    year: "2025",
    title: "Plot sales, synchronised end-to-end with Odoo ERP.",
    challenge:
      "Great Vision Adventures is a property developer managing land sales across multiple regions in Tanzania. Manual processes were limiting efficiency, financial visibility, and the ability to scale operations.",
    solution:
      "Lockwood delivered a full integration connecting GVA's plot sales system to the Odoo ERP platform, enabling synchronised operations and seamless data flow between land sales and GVA's broader business environment.",
    services: ["Platform Development", "Systems Integration", "Digital Consultation"],
    bg: "#EEF0FF",
    accent: "#1F49FF",
    fg: "#061b31",
  },
];

export const otherWork: [string, string, string, string][] = [
  ["MaliPOS", "Retail POS & inventory", "2024", "E-commerce · POS"],
  ["Tanzania Medical Index", "Healthcare directory", "2024", "Platform · UX"],
  ["Kikoa Marketplace", "Artisan commerce", "2024", "E-commerce · Payments"],
  ["Safari Operators Hub", "Tour operator booking", "2023", "Platform · Integrations"],
  ["Nuru Utilities Portal", "Customer self-service", "2023", "Platform · Support"],
  ["Fundi Logistics", "Last-mile dispatch", "2023", "Platform · Mobile"],
];

// Lighter shape used by the home preview
export interface CaseStudy {
  id: string;
  tag: string;
  client: string;
  title: string;
  body: string;
  metric: string;
  bg: string;
  accent: string;
}

export const caseStudiesPreview: CaseStudy[] = [
  {
    id: "casandra",
    tag: "Automotive · Media",
    client: "Casandra",
    title: "A lifestyle platform, restructured around two clear journeys.",
    body: "We rebuilt Casandra's experience around Casandra Automotive and Casandra TV, turning a disjointed product into something intuitive, engaging, and purposeful.",
    metric: "2 clear journeys",
    bg: "#111111",
    accent: "#FF6A3D",
  },
  {
    id: "smart-meter",
    tag: "Utilities · Government",
    client: "Smart Meter Middleware",
    title: "Water tokens in seconds, delivered by mobile money.",
    body: "A middleware layer connecting consumer mobile apps directly to the MAJIIS utility billing API, removing physical vending and manual reconciliation.",
    metric: "0 manual reconciliation",
    bg: "var(--color-primary-500)",
    accent: "#ffffff",
  },
  {
    id: "gva-odoo",
    tag: "Real Estate",
    client: "GVA Plot Sales",
    title: "Plot sales, synchronised end-to-end with Odoo ERP.",
    body: "A full integration between GVA's plot sales system and Odoo, unifying property management, financial tracking, reporting, and digital payments.",
    metric: "One system, multiple regions",
    bg: "#EEF0FF",
    accent: "var(--color-primary-500)",
  },
];
