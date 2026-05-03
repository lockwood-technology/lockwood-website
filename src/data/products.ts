import type { IconName } from "@/components/ui/Icons";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  href: string;
  color: string;
  icon: IconName;
  category: string;
  url: string;
  blurb: string;
}

export const products: Product[] = [
  {
    id: "malipopay",
    name: "Malipopay",
    tagline: "One platform. Every payment.",
    href: "/products/malipopay",
    color: "#1F49FF",
    icon: "creditCard",
    category: "Flagship fintech",
    url: "malipopay.co.tz",
    blurb:
      "Mobile money, cards, bank transfers, POS, and EFD-ready invoicing, from a single integration with automated reconciliation built in.",
  },
  {
    id: "wedding",
    name: "Wedding",
    tagline: "Plan your perfect day. All in one place.",
    href: "/products/wedding",
    color: "#C2476E",
    icon: "heart",
    category: "Event tech & marketplace",
    url: "wedding.co.tz",
    blurb:
      "East Africa's dedicated wedding platform, verified vendors, bookings, budget, guest management, and a personalised wedding website.",
  },
  {
    id: "send",
    name: "Send",
    tagline: "Messages that land, systems that scale.",
    href: "/products/send",
    color: "#0EA789",
    icon: "send",
    category: "Messaging platform",
    url: "send.co.tz",
    blurb:
      "SMS, WhatsApp, and email from a single API. Transactional alerts, OTPs, marketing broadcasts, and two-way conversations on one delivery pipeline that reports back in under 200ms.",
  },
  {
    id: "link",
    name: "Link",
    tagline: "Short links. Smart QR. Powerful pages.",
    href: "/products/link",
    color: "#0B5FFF",
    icon: "link",
    category: "Link management",
    url: "link.co.tz",
    blurb:
      "Branded short links, dynamic QR codes, and conversion-ready landing pages with real-time analytics.",
  },
  {
    id: "housing",
    name: "Housing",
    tagline: "Find your perfect space in Tanzania.",
    href: "/products/housing",
    color: "#1B4332",
    icon: "house",
    category: "Real estate marketplace",
    url: "housing.co.tz",
    blurb:
      "Property listings and management for buyers, tenants, landlords, agents, and developers across East Africa.",
  },
  {
    id: "localhost",
    name: "Localhost",
    tagline: "Tanzania-built hosting. Always online.",
    href: "/products/localhost",
    color: "#4A6CF7",
    icon: "globe",
    category: "Hosting & cloud",
    url: "localhost.co.tz",
    blurb:
      "Reliable shared, VPS, and managed cloud hosting built for Tanzanian businesses, with local support and TZS billing.",
  },
  {
    id: "investors",
    name: "Investors",
    tagline: "Grow your wealth. Start today.",
    href: "/products/investors",
    color: "#0D1B2A",
    icon: "trendingUp",
    category: "WealthTech",
    url: "investors.co.tz",
    blurb:
      "Bonds, T-bills, unit trusts, fixed deposits, and startup deals for East African retail and institutional investors.",
  },
  {
    id: "kikaba",
    name: "Kikaba",
    tagline: "Group savings, in the open.",
    href: "/products/kikaba",
    color: "#F0762E",
    icon: "users",
    category: "VICOBA / SACCOS",
    url: "kikaba.app",
    blurb:
      "Modern digital chama for groups that save together. Contributions, loans, and clear records, fully transparent.",
  },
  {
    id: "drivers",
    name: "Drivers",
    tagline: "The smart way to service your vehicle.",
    href: "/products/drivers",
    color: "#0A1628",
    icon: "smartphone",
    category: "Automotive",
    url: "drivers.co.tz",
    blurb:
      "Service history, smart maintenance reminders, and a verified marketplace of dealers and spare parts shops, in one app.",
  },
  {
    id: "mchango",
    name: "Mchango",
    tagline: "Pamoja tunaweza, together we can.",
    href: "/products/mchango",
    color: "#E63946",
    icon: "heart",
    category: "Community fundraising",
    url: "mchango.co.tz",
    blurb:
      "Group fundraising and harambee for weddings, funerals, medical bills, and community projects, with mobile money built in.",
  },
  {
    id: "fungulakumi",
    name: "FungulaKumi",
    tagline: "Toa kwa moyo, give with heart.",
    href: "/products/fungulakumi",
    color: "#4A1C6F",
    icon: "shield",
    category: "Faith tech",
    url: "fungulakumi.co.tz",
    blurb:
      "Digital sadaka, tithe, pledges, and congregation management for East African churches and faith communities.",
  },
  {
    id: "mziki",
    name: "Mziki",
    tagline: "The groove lives here.",
    href: "/products/mziki",
    color: "#0A0A0A",
    icon: "messageSquare",
    category: "Music & culture",
    url: "mziki.co.tz",
    blurb:
      "Tanzania's Piano City. Amapiano and house DJ mixes, live weekend Piano Sessions, events, and Mziki Radio.",
  },
];

export const productById = (id: string) => products.find((p) => p.id === id);

// Hero products use richer chips for the homepage spotlight
export const heroProductIds = ["malipopay", "wedding"] as const;
export const bottomHeroProductIds = ["fungulakumi", "mziki"] as const;
export const productChips: Record<string, string[]> = {
  malipopay: ["M-Pesa", "TigoPesa", "Airtel", "Halopesa", "T-Pesa", "CRDB", "NMB", "Visa", "Mastercard"],
  wedding: ["Venues", "Catering", "Photography", "Decor", "Entertainment", "Transport"],
  fungulakumi: ["Sadaka", "Zaka", "Pledges", "Members", "Statements", "Multi-branch"],
  mziki: ["Amapiano", "House", "Piano Sessions", "DJ Mixes", "Mziki Radio", "Events"],
};
