import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white" | "outline-white";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary-500 text-white hover:bg-primary-600",
  secondary: "bg-ink-900 text-white hover:bg-ink-800",
  outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 bg-white",
  ghost: "text-primary-500 hover:bg-primary-50",
  white: "bg-white text-primary-500 hover:bg-ink-50",
  "outline-white": "border-2 border-white text-white bg-transparent hover:bg-white/10",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-5 py-3 text-[15px] rounded-[14px]",
  lg: "px-7 py-4 text-base rounded-2xl",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
