import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import HomeCTA from "@/components/home/HomeCTA";
import { caseStudies, otherWork } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Thirty plus projects. Three we're especially proud of. Casandra, Smart Meter Middleware, and Great Vision Adventures, delivered in 2025.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-24 pb-12">
        <Container>
          <div className="eyebrow">Selected work · 2025</div>
          <h1 className="display-xl mt-5 max-w-[1000px] font-light tracking-[-0.035em] text-ink-950">
            Thirty plus projects.
            <br />
            <span className="text-ink-500">Three we&apos;re especially proud of.</span>
          </h1>
          <p className="text-[19px] leading-[1.5] text-ink-600 mt-7 max-w-[640px] font-light">
            Each of these projects, delivered in 2025, demonstrates Lockwood&apos;s commitment to solving real client challenges through thoughtful design, seamless integration, and user-centric engineering.
          </p>
        </Container>
      </section>

      {caseStudies.map((s) => {
        const isDark = s.fg === "#fff";
        const muted = isDark ? "rgba(255,255,255,0.72)" : "var(--color-ink-600)";
        const mutedLabel = isDark ? "rgba(255,255,255,0.55)" : "var(--color-ink-500)";
        return (
          <section key={s.id} className="py-8">
            <Container>
              <div
                className="rounded-[28px] p-10 sm:p-16 relative overflow-hidden"
                style={{
                  backgroundColor: s.bg,
                  color: s.fg,
                  border: !isDark ? "1px solid var(--color-ink-200)" : undefined,
                }}
              >
                {isDark && (
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.08] pattern-mark mix-blend-screen"
                  />
                )}
                <div className="relative grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14">
                  <div>
                    <div
                      className="font-mono text-[11px] font-semibold tracking-[0.08em] uppercase"
                      style={{ color: mutedLabel }}
                    >
                      {s.tag} · {s.year}
                    </div>
                    <div
                      className="font-light text-[44px] tracking-[-0.025em] leading-none mt-4"
                      style={{ color: s.accent }}
                    >
                      {s.client}
                    </div>
                    <h2
                      className="font-light text-[34px] tracking-[-0.02em] leading-[1.1] mt-5 max-w-[440px]"
                      style={{ color: s.fg }}
                    >
                      {s.title}
                    </h2>
                    <div className="mt-10">
                      <div
                        className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-3.5"
                        style={{ color: mutedLabel }}
                      >
                        Services
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {s.services.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-medium py-1.5 px-3 rounded"
                            style={{
                              background: isDark ? "rgba(255,255,255,0.1)" : "#fff",
                              border: isDark
                                ? "1px solid rgba(255,255,255,0.15)"
                                : "1px solid var(--color-ink-200)",
                              color: s.fg,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <div
                        className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-2.5"
                        style={{ color: mutedLabel }}
                      >
                        Challenge
                      </div>
                      <p
                        className="text-base leading-[1.6] m-0 font-light"
                        style={{ color: muted }}
                      >
                        {s.challenge}
                      </p>
                    </div>
                    <div>
                      <div
                        className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-2.5"
                        style={{ color: mutedLabel }}
                      >
                        Solution
                      </div>
                      <p
                        className="text-base leading-[1.6] m-0 font-light"
                        style={{ color: muted }}
                      >
                        {s.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="py-24">
        <Container>
          <div className="eyebrow">Also in the portfolio</div>
          <h2 className="h-section mt-3.5 font-light tracking-[-0.02em] text-ink-950">
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
