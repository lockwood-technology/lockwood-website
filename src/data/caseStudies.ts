export type CaseStudyVariant =
  | "casandra"
  | "dirent"
  | "stem-hub"
  | "imara"
  | "maiflow"
  | "mchezo"
  | "grant-link";

export interface CaseStudyDetail {
  slug: CaseStudyVariant;
  /** Card-level tag ("Industry · Country"-style) used on listing & preview. */
  tag: string;
  client: string;
  year: string;
  /** Hero headline. From Figma. */
  title: string;
  /** Short body shown under the headline. From Figma. */
  intro: string;
  /** Two-paragraph problem statement, rendered under "The brief". */
  brief: string;
  /** Two-paragraph solution narrative, rendered under "What we delivered". */
  delivered: string;
  /** Listing-card body (one-liner). */
  challenge: string;
  /** Listing-card body (one-liner). */
  solution: string;
  services: string[];
  /** Five metadata badges shown on the detail hero. From Figma. */
  meta: {
    industry: string;
    country: string;
    scope: string;
    platform: string;
  };
  /** Optional NDA / privacy notice rendered above the intro. */
  notice?: string;
  /** Optional pull quote rendered below "What we delivered". */
  quote?: string;
  quoteAttribution?: string;
  /** Path under /public to the hero image (downloaded from Figma). */
  heroImage: string;
  /** Background colour used on listing card and home preview. */
  bg: string;
  accent: string;
  fg: string;
}

export const caseStudies: CaseStudyDetail[] = [
  {
    slug: "casandra",
    tag: "Automotive & Entertainment · Tanzania",
    client: "Casandra",
    year: "2025",
    title: "Two lifestyle products, cars and content, in one app.",
    intro:
      "A fragmented automotive platform split into two coherent products sharing one app and login.",
    brief:
      "Casandra is a Tanzanian lifestyle platform connecting users to cars, car-related services, and video content. The legacy product mixed every audience into a single feed — someone trying to book a service ended up watching a music video, and someone there to watch a show couldn't find the marketplace.\n\nThe team needed a structural rethink — not just a coat of paint. Navigation, content models, and the underlying account experience all had to be re-grounded around what users were actually trying to do.",
    delivered:
      "Lockwood split the product into two clear journeys with their own homepages, navigation, and content models: Casandra Automotive (cars, services, marketplace) and Casandra TV (long-form video, shows, creators). A single account spans both, so users move between them without re-authenticating or losing context.\n\nWe rebranded each journey to feel distinct without breaking the parent brand, and rebuilt the platform on a modern stack with editorial tooling so the content team can publish to either journey without a developer in the loop.",
    challenge:
      "A lifestyle platform with cars and video content stitched into a single feed, where neither audience could find what they came for.",
    solution:
      "Split into two journeys, Casandra Automotive and Casandra TV, sharing one account and a unified mobile shell.",
    services: ["UI/UX Design", "Platform Development", "Branding"],
    meta: {
      industry: "Automotive & Entertainment",
      country: "Tanzania",
      scope: "Product design (UI/UX)",
      platform: "Mobile",
    },
    heroImage: "/case-studies/casandra-1.png",
    bg: "#FBDCDC",
    accent: "#E5484D",
    fg: "#1B1B1C",
  },
  {
    slug: "dirent",
    tag: "Proptech · Kenya",
    client: "Dirent",
    year: "2025",
    title: "Rent collection that works the way landlords already do.",
    intro:
      "A mobile platform that brought structure to informal rent management without changing how landlords operate.",
    brief:
      "Across East Africa, most landlords manage rent informally — WhatsApp messages, paper receipts, mobile-money screenshots, a phone call when something's overdue. Existing property-management tools assume a level of formality that rules these landlords out before they start.\n\nDirent set out to bring structure to that informal model without forcing landlords to abandon the practices that work for them.",
    delivered:
      "We designed and built Dirent as a mobile-first platform that wraps the existing landlord workflow: tenants, units, rent due, collected, and outstanding — all entered in seconds, all surfaced as a clean monthly view. Mobile-money confirmations capture automatically; arrears are flagged before they snowball.\n\nThe brand, the visual system, and the product flow were all delivered together so Dirent ships as a coherent product. Landlords keep doing what they've always done — they just see it.",
    challenge:
      "Most landlords manage rent informally; existing property tools assume a formality they don't have.",
    solution:
      "A mobile platform that absorbs the landlord's existing workflow and turns it into a structured monthly view, payments and arrears included.",
    services: ["Brand Development", "Product Design (UI/UX)", "Platform Development"],
    meta: {
      industry: "Proptech",
      country: "Kenya",
      scope: "Brand Development · Product Design (UI/UX)",
      platform: "Mobile",
    },
    heroImage: "/case-studies/dirent-1.jpg",
    bg: "#EEF1F4",
    accent: "#0A4A3F",
    fg: "#1B1B1C",
  },
  {
    slug: "stem-hub",
    tag: "Edtech · Tanzania",
    client: "Inspire STEM Hub",
    year: "2025",
    title: "One design system, two learning experiences.",
    intro:
      "An offline-first STEM platform built for primary and secondary students, calibrated differently for each.",
    brief:
      "Inspire STEM Hub wanted to reach Tanzanian students in classrooms where bandwidth is unreliable and a single device often serves several learners. A primary-school child and a secondary-school student aren't the same audience — content depth, navigation, and tone all need to flex.\n\nThe brief was to ship two distinct learning experiences that nonetheless feel like one product, share one back-end, and are maintained by one team.",
    delivered:
      "Lockwood designed and built Inspire STEM Hub as a desktop-first, offline-capable platform with a single content backbone and two front-of-house experiences — one calibrated for primary, one for secondary. A shared design system keeps both products consistent; per-audience tokens flex tone, complexity, and progression mechanics.\n\nLessons sync when a device gets online, then stay available offline through the next school week. Teachers see a roll-up of progress across every learner on every device.",
    challenge:
      "Two learner audiences, the same content backbone, classrooms with unreliable bandwidth.",
    solution:
      "An offline-first platform with a shared design system and two calibrated front-of-house experiences, syncing as connectivity allows.",
    services: ["Product Design (UI/UX)", "Platform Development"],
    meta: {
      industry: "Edtech",
      country: "Tanzania",
      scope: "Product design (UI/UX) · Development",
      platform: "Desktop-first",
    },
    heroImage: "/case-studies/stem-hub-1.png",
    bg: "#EEF0FF",
    accent: "#1F49FF",
    fg: "#1B1B1C",
  },
  {
    slug: "imara",
    tag: "Fintech · Tanzania",
    client: "Withheld (NDA)",
    year: "2025",
    title: "An investment platform built for first-time retail investors.",
    intro:
      "A confidential fintech product that grew from 3,000 to 14,000 users in its first month.",
    brief:
      "First-time retail investors in Tanzania face the same wall everywhere: products designed for people who already know the language. Minimums, fees, risk levels, fund types — every word is a barrier before money moves.\n\nThe brief was to build an investment platform that meets a first-time investor exactly where they are: in plain language, with structured guidance, and with the regulator on the right side of every screen.",
    delivered:
      "Lockwood designed the product end-to-end: a guided onboarding that explains as it asks, a portfolio view that hides what isn't relevant yet, and a deposit flow tied directly to mobile money. Risk language is in Swahili-first plain English, with the regulated terminology one tap away for those who want it.\n\nThe product launched quietly and grew from 3,000 to 14,000 active investors in its first month — entirely word-of-mouth among the first cohort.",
    challenge:
      "Investment products were written for people who already speak the language, which kept first-time investors out.",
    solution:
      "A guided, plain-language platform with a mobile-money deposit flow that meets first-timers where they are.",
    services: ["Product Design (UI/UX)"],
    meta: {
      industry: "Fintech",
      country: "Tanzania",
      scope: "Product design (UI/UX)",
      platform: "Mobile",
    },
    notice: "Product name changed. Client details withheld under NDA.",
    heroImage: "/case-studies/imara-1.png",
    bg: "#0A2C4E",
    accent: "#5FB1FF",
    fg: "#FFFFFF",
  },
  {
    slug: "maiflow",
    tag: "IoT & Utilities · Tanzania",
    client: "SF Smart Energy",
    year: "2025",
    title: "Water consumption data that operators can finally read and act on.",
    intro:
      "A mobile interface that turned raw IoT consumption data into something car wash operators could act on.",
    brief:
      "SF Smart Energy installs IoT meters across commercial water consumers — car washes, light industry, hospitality. The hardware was producing rich consumption telemetry; the problem was that the people who needed to act on it (the operators themselves) couldn't read it.\n\nThe brief was to turn raw telemetry into something an operator could open on a phone between customers and act on the same shift.",
    delivered:
      "Lockwood designed and built Maiflow — a mobile interface that takes the IoT consumption stream and renders it as the three things an operator actually wants: am I using more than usual, how does this shift compare to last, and is anything leaking. Anomalies are surfaced as plain-language alerts; ledger detail is one tap away for whoever wants it.\n\nThe product is now in production across the SF Smart Energy customer base and is being extended to other commercial-water verticals.",
    challenge:
      "Rich IoT telemetry that operators couldn't read, so they couldn't act on it.",
    solution:
      "A mobile interface that surfaces the three questions an operator actually has — consumption vs usual, shift vs shift, leaks — in plain language.",
    services: ["Product Design (UI/UX)", "Platform Development"],
    meta: {
      industry: "IoT · Utilities",
      country: "Tanzania",
      scope: "Product design (UI/UX) · Development",
      platform: "Mobile",
    },
    heroImage: "/case-studies/maiflow-1.png",
    bg: "#E6F1F8",
    accent: "#0E5FB8",
    fg: "#1B1B1C",
  },
  {
    slug: "mchezo",
    tag: "Fintech · Tanzania",
    client: "Mchezo",
    year: "2025",
    title: "Rotating savings, made reliable.",
    intro:
      "A digital platform that formalized the chama savings model with structure, trust, and visibility.",
    brief:
      "Chamas — rotating savings groups — have moved billions through informal channels in East Africa for generations. The model works because of trust, but the trust is held together by spreadsheets, WhatsApp threads, and the chairperson's memory. Any of those breaks, the group breaks.\n\nMchezo's brief was to formalize the model without losing what makes it work: groups still set the rules, members still vote, the chairperson is still in charge — but the structure is held by software, not by chance.",
    delivered:
      "Lockwood delivered Mchezo as a mobile-first platform plus a brand system. Groups configure their own contribution cycle, rotation order, and rules; members contribute via mobile money; the platform keeps the ledger and surfaces it to every member in real time.\n\nDisputes drop because the source of truth is shared. Defaulters surface early. The chairperson role shifts from bookkeeper to facilitator — and the chama can finally grow past the dozen-member ceiling that informal trust imposes.",
    challenge:
      "Chamas run on trust, but the trust is held together by spreadsheets and memory — any break breaks the group.",
    solution:
      "A mobile platform that holds the rules, ledger, and rotation in software so the trust scales with the membership.",
    services: ["Brand Development", "Product Design (UI/UX)", "Platform Development"],
    meta: {
      industry: "Fintech",
      country: "Tanzania",
      scope: "Brand Development · Product Design (UI/UX)",
      platform: "Mobile",
    },
    heroImage: "/case-studies/mchezo-1.png",
    bg: "#FFF1E8",
    accent: "#E04E1B",
    fg: "#1B1B1C",
  },
  {
    slug: "grant-link",
    tag: "Nonprofit Tech · Tanzania",
    client: "Refined",
    year: "2025",
    title: "A searchable database connecting NGOs to the right funding.",
    intro:
      "A grant discovery tool that reduced the time NGOs spent finding and qualifying relevant opportunities.",
    brief:
      "Refined works with NGOs across East Africa, and the team kept watching small, capable organisations miss the right grants — not because they weren't eligible, but because grant information lives across hundreds of funder sites, mailing lists, and PDFs.\n\nThe brief was a single source of truth: a searchable, filterable, current database that an in-country programme manager could open, find five relevant grants for, and act on the same morning.",
    delivered:
      "Lockwood designed and built Grant Link as a desktop-first product. Grants are modelled with structured eligibility, deadlines, focus areas, and funder profiles; search is filterable across every dimension a programme manager actually uses. NGOs save searches and get alerts when new grants match.\n\nThe content side is run by Refined's team through a custom editor that mirrors the user-facing schema, so updates are fast and the database stays current. We handled product design, UI/UX, and development end-to-end.",
    challenge:
      "Grant information is scattered across funder sites, mailing lists, and PDFs. Small NGOs miss opportunities they're qualified for simply because finding them is full-time work.",
    solution:
      "A structured, searchable database with filtering across the dimensions programme managers actually use, saved searches, and matching alerts.",
    services: ["Product Design", "UI/UX", "Platform Development"],
    meta: {
      industry: "Nonprofit Tech",
      country: "Tanzania",
      scope: "Product Design (UI/UX) · Development",
      platform: "Desktop-first",
    },
    heroImage: "/case-studies/grant-link-1.png",
    bg: "#E6FAF6",
    accent: "#0E8C76",
    fg: "#0a1f1a",
  },
];

/**
 * Lookup by slug; returns undefined if the slug isn't a case study.
 */
export function getCaseStudy(slug: string): CaseStudyDetail | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

/** Lighter table-row entries shown under "Also in the portfolio". */
export const otherWork: [string, string, string, string][] = [
  ["Smart Meter Middleware", "Water tokens via mobile money", "2025", "Middleware · Payments"],
  ["GVA Plot Sales", "Plot sales tied to Odoo ERP", "2025", "ERP integration"],
  ["Safari Operators Hub", "Tour operator booking", "2023", "Platform · Integrations"],
  ["Fundi Logistics", "Last-mile dispatch", "2023", "Platform · Mobile"],
];

/**
 * Lighter shape used by the home preview. We derive it from `caseStudies`
 * so home + listing + detail never drift apart.
 */
export interface CaseStudyPreviewItem {
  slug: CaseStudyVariant;
  tag: string;
  client: string;
  title: string;
  body: string;
  metric: string;
  bg: string;
  accent: string;
  fg: string;
  heroImage: string;
}

/**
 * Slugs (in order) curated for the home-page preview.
 * Edit this short list to re-cast which three case studies surface on /.
 */
export const homeFeaturedSlugs: CaseStudyVariant[] = [
  "casandra",
  "grant-link",
  "dirent",
];

/** Derived from caseStudies. Used by CaseStudiesPreview on home. */
export const caseStudiesPreview: CaseStudyPreviewItem[] = homeFeaturedSlugs
  .map((slug) => caseStudies.find((c) => c.slug === slug))
  .filter((c): c is CaseStudyDetail => Boolean(c))
  .map((c) => ({
    slug: c.slug,
    tag: c.tag,
    client: c.client,
    title: c.title,
    body: c.intro,
    metric: c.meta.scope,
    bg: c.bg,
    accent: c.accent,
    fg: c.fg,
    heroImage: c.heroImage,
  }));
