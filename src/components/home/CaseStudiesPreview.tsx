import Link from "next/link";
import Container from "@/components/ui/Container";
import { caseStudiesPreview as caseStudies } from "@/data/caseStudies";

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 lg:py-[120px]">
      <Container>
        <div className="flex justify-between items-end gap-10 mb-14 flex-wrap">
          <div>
            <div className="eyebrow">Selected work · 2025</div>
            <h2 className="h-section mt-3.5 max-w-[700px] text-ink-950">
              Outcomes, <span className="text-ink-500">not just outputs.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="bg-white text-ink-950 border border-ink-200 hover:border-ink-400 font-semibold text-[15px] px-5 py-3.5 rounded-[14px] transition-all"
          >
            All case studies →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudies.map((s) => {
            const isDark = s.fg === "#fff";
            return (
              <Link
                key={s.slug}
                href={`/work/${s.slug}`}
                className={`flex flex-col rounded-3xl p-7 min-h-[460px] transition-transform duration-200 hover:-translate-y-1 ${
                  isDark ? "" : "border border-ink-200"
                }`}
                style={{
                  backgroundColor: s.bg,
                  color: isDark ? "#fff" : "var(--color-ink-950)",
                }}
              >
                <div
                  className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase"
                  style={{ color: isDark ? "rgba(255,255,255,0.55)" : "var(--color-ink-500)" }}
                >
                  {s.tag}
                </div>
                <div
                  className="font-extrabold text-[26px] tracking-[-0.02em] mt-2.5"
                  style={{ color: s.accent }}
                >
                  {s.client}
                </div>
                <h3
                  className="font-bold text-[22px] tracking-[-0.015em] leading-[1.2] mt-5 mb-3"
                  style={{ color: isDark ? "#fff" : "var(--color-ink-950)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[14.5px] leading-[1.55]"
                  style={{ color: isDark ? "rgba(255,255,255,0.75)" : "var(--color-ink-600)" }}
                >
                  {s.body}
                </p>
                <div className="flex-1" />
                <div
                  className="mt-6 pt-5 flex justify-between items-center border-t"
                  style={{
                    borderColor: isDark ? "rgba(255,255,255,0.15)" : "var(--color-ink-200)",
                  }}
                >
                  <span className="text-[13px] font-semibold">{s.metric}</span>
                  <span className="text-lg">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
