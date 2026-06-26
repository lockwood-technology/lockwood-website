import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import HomeCTA from "@/components/home/HomeCTA";
import { caseStudies, otherWork } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Lockwood Technology — platforms, integrations, and digital products delivered across East Africa.",
};

const CATEGORIES = [
  "Fintech",
  "Marketplaces",
  "Communication",
  "Property",
  "Social Impact",
  "and more",
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        headline="Work we have delivered."
        intro="Every project here started with a brief from a real organisation trying to solve something specific. Here is what we built."
        heroImage="/hero/o-mark-work.png"
        chips={
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="text-sm font-semibold py-1.5 px-3 rounded-lg bg-ink-50 text-primary-500"
              >
                {c}
              </span>
            ))}
          </div>
        }
      />

      <section className="pt-4 pb-10 lg:pb-14 bg-white">
        <Container>
          <div className="text-center max-w-[820px] mx-auto">
            <h2 className="font-light text-[36px] sm:text-[44px] lg:text-[56px] tracking-[-0.03em] leading-[1.1] text-ink-950">
              The <span className="font-extrabold">brief.</span> The{" "}
              <span className="font-extrabold">build.</span> The{" "}
              <span className="font-extrabold">outcome.</span>
            </h2>
            <p className="text-base lg:text-[17px] leading-[1.6] text-ink-600 mt-5 max-w-[640px] mx-auto font-light">
              Each summary covers what the client needed, what we delivered, and what changed as a result.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((s) => (
              <Link
                key={s.slug}
                href={`/work/${s.slug}`}
                className="group rounded-3xl overflow-hidden border border-ink-200 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(17,17,17,0.08)] flex flex-col"
              >
                <div
                  className="aspect-[16/10] overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: s.bg }}
                >
                  <Image
                    src={s.heroImage}
                    alt={`${s.client} — ${s.title}`}
                    width={1200}
                    height={750}
                    className="w-full h-full object-cover"
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-ink-500">
                    {s.tag} · {s.year}
                  </div>
                  <h3 className="font-bold text-[19px] tracking-[-0.015em] leading-[1.25] mt-3 text-ink-950">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.55] text-ink-600 mt-3 line-clamp-3">
                    {s.intro}
                  </p>
                  <div className="flex-1" />
                  <div className="mt-5 pt-5 border-t border-ink-100 flex items-center justify-between">
                    <span className="text-[12px] font-semibold tracking-[0.04em] uppercase text-ink-700">
                      {s.client}
                    </span>
                    <span className="text-primary-500 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Read case study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-ink-50">
        <Container>
          <div className="eyebrow">Also in the portfolio</div>
          <h2 className="h-section mt-3.5 font-light tracking-[-0.025em] text-ink-950 max-w-[780px]">
            30+ projects delivered across East Africa.
          </h2>
          <div className="mt-10 border-t border-ink-200">
            {otherWork.map((r) => (
              <div
                key={r[0]}
                className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_0.5fr_1fr] py-5 border-b border-ink-200 items-baseline gap-5"
              >
                <div className="font-semibold text-[19px] tracking-[-0.015em] text-ink-900">
                  {r[0]}
                </div>
                <div className="text-ink-600 text-[15px]">{r[1]}</div>
                <div className="font-mono text-[13px] text-ink-500">{r[2]}</div>
                <div className="text-xs text-primary-500 font-semibold tracking-wider uppercase">
                  {r[3]}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <HomeCTA />
    </>
  );
}
