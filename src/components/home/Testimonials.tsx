import Link from "next/link";
import Container from "@/components/ui/Container";
import { caseStudies, type CaseStudyVariant } from "@/data/caseStudies";

interface Props {
  /**
   * When provided, only quotes from these case study slugs are rendered.
   * Useful for embedding on a product page that's related to a specific case.
   * If omitted, every case study that has a quote is shown.
   */
  onlySlugs?: CaseStudyVariant[];
  /** Section heading override. */
  heading?: string;
  eyebrow?: string;
}

export default function Testimonials({
  onlySlugs,
  heading = "In their own words.",
  eyebrow = "What clients say",
}: Props) {
  const items = caseStudies
    .filter((c) => Boolean(c.quote))
    .filter((c) => (onlySlugs ? onlySlugs.includes(c.slug) : true));

  if (items.length === 0) return null;

  return (
    <section className="py-20 lg:py-[120px] bg-white">
      <Container>
        <div className="max-w-[720px] mb-14">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="h-section mt-3.5 font-light tracking-[-0.025em] text-ink-950">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((c) => (
            <Link
              key={c.slug}
              href={`/work/${c.slug}`}
              className="group rounded-3xl border border-ink-200 bg-white p-8 lg:p-10 transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(17,17,17,0.06)] flex flex-col"
            >
              <svg
                width="36"
                height="28"
                viewBox="0 0 36 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                className="text-primary-500"
              >
                <path
                  d="M10 28h6v-12h-6v-4c0-3.3 2.7-6 6-6V0c-6.6 0-12 5.4-12 12v16zm20 0h6v-12h-6v-4c0-3.3 2.7-6 6-6V0c-6.6 0-12 5.4-12 12v16z"
                  fill="currentColor"
                  opacity="0.18"
                />
              </svg>
              <p className="mt-4 text-[20px] lg:text-[22px] leading-[1.45] font-light text-ink-900 tracking-[-0.01em]">
                {c.quote}
              </p>
              <div className="flex-1" />
              <div className="mt-8 pt-6 border-t border-ink-100 flex items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-[15px] text-ink-900 tracking-[-0.01em]">
                    {c.client}
                  </div>
                  <div className="text-xs text-ink-500 mt-0.5 font-mono tracking-[0.04em]">
                    {c.quoteAttribution ?? c.meta.industry}
                  </div>
                </div>
                <span className="text-primary-500 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Read case study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
