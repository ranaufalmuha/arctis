import { type ReactNode } from "react";
import clsx from "clsx";

type BadgeVariant = "default" | "accent" | "outline";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantStyles: Record<BadgeVariant, string> = {
  default: "border-[var(--color-border)] text-[var(--color-muted)]",
  accent: "border-[var(--color-border-accent)] text-[var(--color-accent)] bg-[var(--color-accent-glow)]",
  outline: "border-[var(--color-border-strong)] text-[var(--color-foreground)]",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em]",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
