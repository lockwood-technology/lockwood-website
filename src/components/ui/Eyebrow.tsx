import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`text-xs font-semibold tracking-[0.1em] uppercase text-primary-500 ${className}`}
    >
      {children}
    </span>
  );
}
