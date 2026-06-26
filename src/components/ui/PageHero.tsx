import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

interface Stat {
  value: string;
  label: string;
}

interface Props {
  eyebrow?: string;
  /** Headline rendered as light-weight display. Use `bold` to mix the Figma light+bold display style. */
  headline: string;
  /** Optional second line, rendered in primary blue and bold to mirror the Figma display treatment. */
  headlineAccent?: string;
  intro?: string;
  ctas?: CTA[];
  stats?: Stat[];
  /** Optional chips rendered below the intro — used on /work and /products as category filters. */
  chips?: ReactNode;
  /** Hides the right-column O-mark visual (useful where the page should stay one-column). */
  hideVisual?: boolean;
  /** Tighter padding for inner pages. */
  compact?: boolean;
  /** Path under /public for the right-column O-mark variant. Defaults to the home variant. */
  heroImage?: string;
}

export default function PageHero({
  eyebrow,
  headline,
  headlineAccent,
  intro,
  ctas,
  stats,
  chips,
  hideVisual = false,
  compact = false,
  heroImage = "/hero/o-mark-home.png",
}: Props) {
  const padding = compact
    ? "pt-14 pb-12 lg:pt-20 lg:pb-16"
    : "pt-16 pb-20 lg:pt-24 lg:pb-28";
  const gridCols = hideVisual
    ? "grid-cols-1"
    : "grid-cols-1 lg:grid-cols-[1.25fr_1fr]";

  return (
    <section className={`relative ${padding} bg-white`}>
      <Container className={`grid ${gridCols} gap-10 lg:gap-16 items-center`}>
        <div>
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1 className="display-lg mt-5 font-extrabold tracking-[-0.025em] leading-[1.05] text-ink-950 max-w-[760px]">
            {headline}
            {headlineAccent && (
              <>
                <br />
                <span className="text-primary-500">{headlineAccent}</span>
              </>
            )}
          </h1>
          {intro && (
            <p className="text-lg lg:text-xl leading-[1.55] text-ink-600 mt-7 max-w-[560px] font-light">
              {intro}
            </p>
          )}
          {ctas && ctas.length > 0 && (
            <div className="flex gap-3 mt-9 flex-wrap">
              {ctas.map((cta) => {
                const isPrimary = (cta.variant ?? "primary") === "primary";
                const classes = isPrimary
                  ? "inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-base px-7 py-4 rounded-2xl transition-all"
                  : "inline-flex items-center gap-2 bg-white text-ink-950 border border-ink-200 hover:border-ink-400 font-semibold text-base px-7 py-4 rounded-2xl transition-all";
                return (
                  <Link key={cta.label} href={cta.href} className={classes}>
                    {cta.label}
                  </Link>
                );
              })}
            </div>
          )}
          {chips && <div className="mt-8">{chips}</div>}
          {stats && stats.length > 0 && (
            <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-10 max-w-[640px]">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-extrabold text-3xl sm:text-5xl tracking-[-0.02em] leading-none text-ink-950">
                    {s.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-ink-500 mt-2.5 uppercase tracking-[0.08em] font-semibold leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {!hideVisual && (
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="relative aspect-square w-full max-w-[520px]">
              <Image
                src={heroImage}
                alt=""
                fill
                priority
                unoptimized
                sizes="(min-width: 1280px) 520px, 40vw"
                className="object-contain"
              />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
