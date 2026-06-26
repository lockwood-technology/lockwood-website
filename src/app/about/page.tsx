import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import HeadquartersSection from "@/components/about/HeadquartersSection";
import StoryTimeline from "@/components/about/StoryTimeline";
import WhyLockwood from "@/components/home/WhyLockwood";
import ValuesStrip from "@/components/home/ValuesStrip";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lockwood Technology Ltd is a Tanzanian software and digital solutions company delivering impactful technology across East Africa since 2016.",
};

const PILLARS = [
  {
    eyebrow: "Lockwood products",
    title: "Twelve proprietary platforms.",
    body:
      "Payments, messaging, marketplaces, savings, music — products we build, run, and grow ourselves, used across East Africa every day.",
    href: "/products",
    cta: "Explore products →",
    bg: "bg-primary-500",
    fg: "text-white",
    border: "border-transparent",
    accent: "text-white/70",
  },
  {
    eyebrow: "Lockwood services",
    title: "Eight practice areas.",
    body:
      "Design, build, connect, optimise — for clients across fintech, proptech, edtech, IoT, and social impact, from idea to live system.",
    href: "/services",
    cta: "See what we do →",
    bg: "bg-white",
    fg: "text-ink-950",
    border: "border-ink-200",
    accent: "text-primary-500",
  },
  {
    eyebrow: "Lockwood partnerships",
    title: "Two markets, one team.",
    body:
      "Headquartered in Tanzania, actively delivering in Kenya through a strategic partnership with Malsery — extended reach, single point of accountability.",
    href: "/contact",
    cta: "Talk partnership →",
    bg: "bg-surface-lilac",
    fg: "text-ink-950",
    border: "border-transparent",
    accent: "text-primary-500",
  },
];

const VALUE_PILLARS = [
  {
    title: "Design thinking",
    body:
      "We start by understanding the people, the friction, and the outcome — not the technology. Strategy precedes code.",
  },
  {
    title: "Agile development",
    body:
      "Tight cycles, fast feedback, demos that are honest about what works and what doesn't. No surprises at the end.",
  },
  {
    title: "AI-assisted, human-led",
    body:
      "We use AI to compress the boring parts of engineering. Judgement, taste, and accountability stay with the team.",
  },
  {
    title: "Built for real conditions",
    body:
      "We design for the bandwidth, the device, and the operator that actually exists — not the one in the brief deck.",
  },
];

const facts: [string, string][] = [
  ["Legal Name", "Lockwood Technology Ltd"],
  ["Trading Name", "Lockwood"],
  ["Year Founded", "2016"],
  ["Headquarters", "Sinza Lion, Dar es Salaam, Tanzania"],
  ["Markets Served", "Tanzania · Kenya · East Africa"],
  ["Projects Delivered", "30+"],
  ["Proprietary Products", "12 platforms"],
  ["Fintech Product", "malipopay.co.tz"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="We build digital products for how Africa works."
        intro="Lockwood is a Tanzanian technology company. We design, build, and operate digital platforms for everyday users, individuals, businesses, organisations, and institutions across East Africa — and we help others build theirs."
        heroImage="/hero/o-mark-about.png"
        chips={
          <span className="inline-flex items-center text-sm font-semibold py-1.5 px-3 rounded-lg bg-ink-50 text-primary-500">
            Est. 2020
          </span>
        }
      />

      {/* Two connected things, done well. */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="max-w-[760px] mb-12">
            <div className="eyebrow">What we are</div>
            <h2 className="font-light text-[36px] sm:text-[44px] lg:text-[56px] tracking-[-0.025em] leading-[1.1] text-ink-950 mt-4">
              Two connected things, <span className="font-extrabold">done well.</span>
            </h2>
            <p className="text-base lg:text-[17px] leading-[1.65] text-ink-600 mt-6 font-light max-w-[660px]">
              Lockwood operates as a product company and a delivery partner under the same roof — what we learn building our own platforms feeds the services we deliver for clients, and what we build for clients sharpens our own products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className={`group rounded-3xl border ${p.border} ${p.bg} ${p.fg} p-8 lg:p-10 flex flex-col transition-transform hover:-translate-y-1`}
              >
                <div
                  className={`text-xs font-bold tracking-[0.12em] uppercase font-mono ${p.accent}`}
                >
                  {p.eyebrow}
                </div>
                <h3 className="font-extrabold text-[28px] lg:text-[32px] tracking-[-0.02em] leading-[1.1] mt-5">
                  {p.title}
                </h3>
                <p className="text-[15px] lg:text-[16px] leading-[1.6] mt-5 opacity-90">
                  {p.body}
                </p>
                <div className="flex-1" />
                <div className="mt-8 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  {p.cta}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Practical by design — dark band */}
      <section className="py-24 lg:py-28 bg-ink-950 text-white">
        <Container>
          <div className="max-w-[760px] mb-14">
            <div className="text-xs font-bold tracking-[0.16em] uppercase font-mono text-primary-300">
              How we work
            </div>
            <h2 className="font-light text-[36px] sm:text-[44px] lg:text-[56px] tracking-[-0.025em] leading-[1.1] mt-4">
              Practical by <span className="font-extrabold text-primary-300">design.</span>
            </h2>
            <p className="text-base lg:text-[17px] leading-[1.65] text-white/65 mt-6 font-light max-w-[640px]">
              We do not believe in agency-tactics, vague deliverables, or technology for its own sake. We like the way understanding the work, designing for it, and then shipping it actually feels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUE_PILLARS.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="text-xs font-bold tracking-[0.12em] uppercase font-mono text-white/45">
                  0{i + 1}
                </div>
                <h3 className="font-extrabold text-[20px] tracking-[-0.015em] mt-5 text-white">
                  {v.title}
                </h3>
                <p className="text-sm leading-[1.65] text-white/65 mt-3">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Figma-faithful Headquartered section */}
      <HeadquartersSection />

      {/* Animated story timeline */}
      <StoryTimeline />

      <ValuesStrip />

      <section className="py-24 bg-ink-50">
        <Container>
          <div className="eyebrow">Quick facts</div>
          <h2 className="h-section font-light mt-3.5 tracking-[-0.025em] text-ink-950">
            The short version.
          </h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink-100 border border-ink-100 rounded-lg overflow-hidden">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-white p-6">
                <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-ink-500">
                  {k}
                </div>
                <div className="font-medium text-[17px] tracking-[-0.01em] text-ink-900 mt-2 leading-[1.3]">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WhyLockwood />
      <HomeCTA />
    </>
  );
}
