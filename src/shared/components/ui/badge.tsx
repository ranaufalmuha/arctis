import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  default: "border-border bg-panel text-muted-foreground",
  accent: "border-border-accent bg-accent-glow text-accent",
  outline: "border-border-strong text-foreground",
} as const;

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-control border px-2 py-0.5 type-eyebrow",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
