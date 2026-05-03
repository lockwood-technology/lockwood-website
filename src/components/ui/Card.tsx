import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  const hoverClass = hover ? "hover:shadow-lg hover:-translate-y-1 transition-all duration-200" : "";
  return (
    <div
      className={`bg-white rounded-[var(--radius-card)] border border-ink-200 shadow-sm ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
