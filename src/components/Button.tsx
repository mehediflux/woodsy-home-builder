import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "light" | "outline" | "icon";
};

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  light: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
  outline: "border border-border-strong text-foreground hover:bg-muted",
  icon: "bg-surface-glass text-primary-foreground hover:bg-surface-glass-strong",
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 text-xs font-semibold uppercase tracking-widest transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}