import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  centered?: boolean;
  inverted?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  inverted = false,
  className = "",
}: Props) {
  const align = centered ? "text-center mx-auto" : "text-left";
  const titleColor = inverted ? "text-white" : "text-ink-950";
  const subColor = inverted ? "text-white/75" : "text-ink-500";
  const eyeColor = inverted ? "text-white/80" : "text-primary-500";

  return (
    <div className={`max-w-3xl ${align} ${className}`}>
      {eyebrow && (
        <div
          className={`text-xs font-semibold tracking-[0.1em] uppercase mb-3 ${eyeColor}`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.08] tracking-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${subColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
