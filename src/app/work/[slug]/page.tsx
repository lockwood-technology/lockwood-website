import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return { title: "Case study not found" };
  }
  return {
    title: `${study.client} · ${study.title}`,
    description: study.intro,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const badges: Array<[string, string]> = [
    ["Client", study.client],
    ["Industry", study.meta.industry],
    ["Country", study.meta.country],
    ["Scope", study.meta.scope],
    ["Platform", study.meta.platform],
  ];

  return (
    <>
      {/* Hero band — white per Figma, image sits below */}
      <section className="pt-12 pb-10 lg:pt-32 lg:pb-12 bg-white">
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 border border-primary-500 text-primary-500 font-semibold text-sm px-5 py-3.5 rounded-lg hover:bg-primary-50 transition-colors"
          >
            <span aria-hidden>←</span> Back to work
          </Link>

          <h1 className="display-lg mt-8 lg:mt-10 font-extrabold tracking-[-0.02em] leading-[1.05] text-ink-950 max-w-[1140px]">
            {study.title}
          </h1>

          {study.notice && (
            <div className="mt-6 inline-flex items-start gap-3 max-w-[760px] rounded-xl border border-[#93c8fd] bg-[#ebf5ff] px-4 py-3">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                className="mt-0.5 shrink-0"
              >
                <circle cx="10" cy="10" r="8" stroke="#1570ef" strokeWidth="1.6" />
                <path d="M10 6.5v4M10 13.2v.1" stroke="#1570ef" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <p className="text-[13px] font-semibold text-[#1570ef] leading-snug m-0">
                {study.notice}
              </p>
            </div>
          )}

          <p className="text-lg lg:text-xl leading-[1.55] mt-6 max-w-[820px] font-light text-ink-700">
            {study.intro}
          </p>

          {/* Metadata badges */}
          <div className="flex flex-wrap gap-3 mt-10">
            {badges.map(([label, value]) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-lg bg-ink-50 px-3 py-1.5"
              >
                <span className="text-[13px] font-semibold text-ink-400">{label}</span>
                <span className="w-1 h-1 rounded-full bg-ink-300" aria-hidden />
                <span className="text-[13px] font-semibold text-ink-900">{value}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full-bleed Figma hero asset */}
      <section className="pb-20 lg:pb-28 bg-white">
        <Container>
          <div
            className="rounded-[28px] overflow-hidden"
            style={{ backgroundColor: study.bg }}
          >
            <Image
              src={study.heroImage}
              alt={`${study.client} — ${study.title}`}
              width={1800}
              height={1200}
              priority
              className="w-full h-auto block"
              sizes="(min-width: 1200px) 1200px, 100vw"
            />
          </div>
        </Container>
      </section>

      {/* The brief */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-10 lg:gap-20 max-w-[1140px]">
            <div>
              <div className="eyebrow">The brief</div>
              <h2 className="h-section mt-4 font-light tracking-[-0.025em] text-ink-950 max-w-[420px]">
                What we set out to solve.
              </h2>
            </div>
            <div className="space-y-5">
              {study.brief.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 font-light"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What we delivered */}
      <section className="py-20 lg:py-24 bg-ink-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-10 lg:gap-20 max-w-[1140px]">
            <div>
              <div className="eyebrow">What we delivered</div>
              <h2 className="h-section mt-4 font-light tracking-[-0.025em] text-ink-950 max-w-[420px]">
                What we shipped.
              </h2>
              <div className="mt-8">
                <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-ink-500 mb-3.5">
                  Services
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.services.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium py-1.5 px-3 rounded bg-white border border-ink-200 text-ink-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-5">
              {study.delivered.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-[17px] lg:text-[18px] leading-[1.65] text-ink-700 font-light"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Optional pull quote */}
      {study.quote && (
        <section className="py-20 lg:py-24 bg-white">
          <Container>
            <figure className="max-w-[920px]">
              <blockquote className="font-light text-[28px] lg:text-[40px] tracking-[-0.025em] leading-[1.25] text-ink-950">
                <span className="text-primary-500">&ldquo;</span>
                {study.quote}
                <span className="text-primary-500">&rdquo;</span>
              </blockquote>
              {study.quoteAttribution && (
                <figcaption className="mt-6 text-sm font-semibold tracking-[0.08em] uppercase text-ink-500 font-mono">
                  &mdash; {study.quoteAttribution}
                </figcaption>
              )}
            </figure>
          </Container>
        </section>
      )}

      {/* Blue CTA strip per Figma */}
      <section className="bg-primary-500 py-16 lg:py-20">
        <Container>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <h2 className="font-light text-[36px] lg:text-[48px] tracking-[-0.03em] leading-[1.05] text-white max-w-[700px]">
              Ready to build something?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-500 font-semibold text-base px-7 py-4 rounded-2xl transition-all hover:bg-ink-50"
            >
              Reach out to us →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
