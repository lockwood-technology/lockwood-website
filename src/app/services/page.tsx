import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import HomeCTA from "@/components/home/HomeCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Eight practice areas. From idea to product, and everything between. A full spectrum of software development and digital transformation services.",
};

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
      <section className="pt-22 pb-14">
        <Container>
          <div className="eyebrow">What we do</div>
          <h1 className="display-lg mt-4 max-w-[980px] text-ink-950">
            Eight practice areas.{" "}
            <span className="text-ink-500">From idea to product, and everything between.</span>
          </h1>
          <p className="text-xl leading-[1.55] text-ink-600 mt-7 max-w-[700px]">
            A full spectrum of software development and digital transformation services, organised across eight core practice areas. Each one available standalone, or combined into a full engagement.
          </p>
        </Container>
      </section>

      <section className="pt-10 pb-24">
        <Container>
          <div className="flex flex-col">
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
                  <h2 className="font-extrabold text-[clamp(28px,3.4vw,44px)] tracking-[-0.02em] leading-[1.05] text-ink-950">
                    {s.title}
                  </h2>
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

      <section className="py-24 bg-ink-50">
        <Container>
          <div className="eyebrow">How we work</div>
          <h2 className="h-section mt-3.5 max-w-[720px] text-ink-950">
            A consultancy-first approach.{" "}
            <span className="text-ink-500">No code until the strategy is solid.</span>
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
