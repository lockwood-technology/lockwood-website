import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import HomeCTA from "@/components/home/HomeCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Lockwood helps you build, connect, and optimise. Eight practice areas, from idea to product, and everything between.",
};

const PATHS: Array<{
  title: string;
  body: string;
  matches: string[];
  cta: { label: string; href: string };
}> = [
  {
    title: "I have an idea and need to build it",
    body:
      "We take a brief — or a hunch — through discovery, design, and engineering, and ship the first usable version.",
    matches: ["Discovery", "Product Design", "Platform Development"],
    cta: { label: "Start a build", href: "/contact" },
  },
  {
    title: "I have a system that needs improving",
    body:
      "Performance, reliability, integrations, payments — we lift what's running today without rewriting from scratch.",
    matches: ["Systems Support & Advisory", "Payments", "Integrations"],
    cta: { label: "Plan a fix", href: "/contact" },
  },
  {
    title: "I need to connect systems or add payments",
    body:
      "Mobile-money rails, ERP integrations, middleware, partner APIs — we wire systems together so finance and ops can close cleanly.",
    matches: ["Payment Gateway", "ERP integration", "Middleware"],
    cta: { label: "Talk integration", href: "/contact" },
  },
  {
    title: "I need creative and marketing support",
    body:
      "Brand systems, UI craft, social-ready content, campaigns. We can lead a fresh identity or extend an existing one.",
    matches: ["Branding", "UI/UX Design", "Digital Marketing"],
    cta: { label: "Brief us", href: "/contact" },
  },
];

const STEPS: [string, string][] = [
  ["Discover", "Context, constraints, and the outcomes you actually need."],
  ["Design", "Information architecture, flows, visual system, prototypes."],
  ["Build", "Engineering with transparency, no glue code, no surprises."],
  ["Launch", "Hardening, integrations, enablement, and go-live."],
  ["Support", "Ongoing advisory and optimisation as things evolve."],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline="We help you build, connect, and optimise."
        intro="From product idea to working platform. We work with individuals, startups, businesses, organisations, and institutions to design, build, manage, and improve digital systems."
        heroImage="/hero/o-mark-services.png"
        chips={
          <div className="flex flex-wrap gap-3">
            {[
              "Individuals",
              "Startups",
              "SMEs",
              "Corporates",
              "Institutions",
              "Public sector",
              "NGOs",
            ].map((a) => (
              <span
                key={a}
                className="text-sm font-semibold py-1.5 px-3 rounded-lg bg-ink-50 text-primary-500"
              >
                {a}
              </span>
            ))}
          </div>
        }
      />

      {/* Task-led paths */}
      <section className="pt-2 pb-24 lg:pb-32 bg-white">
        <Container>
          <div className="max-w-[720px] mb-12">
            <div className="eyebrow">Pick your path</div>
            <h2 className="font-light text-[36px] sm:text-[44px] lg:text-[56px] tracking-[-0.025em] leading-[1.1] text-ink-950 mt-4">
              What are you trying to{" "}
              <span className="font-extrabold">do?</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {PATHS.map((path, i) => (
              <Link
                key={path.title}
                href={path.cta.href}
                className={`group block py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr_auto] gap-6 lg:gap-10 items-start border-t border-ink-200 hover:bg-ink-50 transition-colors px-2 lg:px-4 -mx-2 lg:-mx-4 rounded-lg ${
                  i === PATHS.length - 1 ? "border-b" : ""
                }`}
              >
                <h3 className="font-extrabold text-[24px] lg:text-[30px] tracking-[-0.02em] leading-[1.15] text-ink-950 max-w-[460px]">
                  {path.title}
                </h3>
                <div>
                  <p className="text-[16px] lg:text-[17px] leading-[1.6] text-ink-600">
                    {path.body}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {path.matches.map((m) => (
                      <span
                        key={m}
                        className="text-xs font-semibold py-1 px-2.5 rounded-full bg-surface-lilac text-primary-500"
                      >
                        × {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-end text-primary-500 font-semibold text-sm group-hover:translate-x-1 transition-transform whitespace-nowrap">
                  {path.cta.label} →
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* The eight practice areas — kept as the deep reference */}
      <section className="py-20 lg:py-28 bg-ink-50">
        <Container>
          <div className="eyebrow">All practice areas</div>
          <h2 className="h-section mt-3.5 font-light tracking-[-0.025em] text-ink-950 max-w-[760px]">
            Eight practice areas.{" "}
            <span className="text-ink-500">From idea to product, and everything between.</span>
          </h2>

          <div className="mt-12 flex flex-col">
            {services.map((s, i) => (
              <div
                key={s.key}
                id={s.key}
                className={`py-9 grid grid-cols-1 lg:grid-cols-[80px_1.3fr_1fr] gap-10 items-start border-t border-ink-200 ${
                  i === services.length - 1 ? "border-b" : ""
                } scroll-mt-24`}
              >
                <div className="font-mono text-sm font-semibold text-primary-500 pt-1.5">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-extrabold text-[clamp(24px,3vw,38px)] tracking-[-0.02em] leading-[1.05] text-ink-950">
                    {s.title}
                  </h3>
                  <div className="flex gap-2 flex-wrap mt-4">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold py-1.5 px-3 rounded-full bg-surface-lilac text-primary-500"
                      >
                        × {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[16.5px] leading-[1.65] text-ink-600 m-0">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="py-24 bg-white">
        <Container>
          <div className="eyebrow">How we work</div>
          <h2 className="h-section mt-3.5 max-w-[760px] font-light tracking-[-0.025em] text-ink-950">
            A consultancy-first approach.{" "}
            <span className="font-extrabold">No code until the strategy is solid.</span>
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {STEPS.map(([t, b], i) => (
              <div
                key={t}
                className="p-6 bg-white border border-ink-200 rounded-[18px]"
              >
                <div className="font-mono text-xs font-semibold text-primary-500">
                  Step 0{i + 1}
                </div>
                <h3 className="font-extrabold text-[22px] tracking-[-0.015em] mt-2.5 mb-2 text-ink-950">
                  {t}
                </h3>
                <p className="text-sm leading-[1.55] text-ink-600 m-0">{b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <HomeCTA />
    </>
  );
}
