"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type GlowButtonProps = React.ComponentProps<"button"> & {
  /** Any CSS color used for the halo, border, and focus ring. */
  glowColor?: string;
  /** `strong` doubles the halo size and opacity. */
  intensity?: "soft" | "strong";
};

export function GlowButton({
  className,
  children,
  glowColor = "#ffeb50",
  intensity = "soft",
  type = "button",
  ...props
}: GlowButtonProps) {
  return (
    <span
      data-slot="glow-button"
      className="group relative inline-flex"
      style={{ "--arctis-glow": glowColor } as React.CSSProperties}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -inset-1 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60 group-focus-within:opacity-60 motion-reduce:transition-none",
          intensity === "strong" &&
            "-inset-2 blur-2xl group-hover:opacity-100 group-focus-within:opacity-100",
        )}
        style={{ background: glowColor }}
      />
      <button
        type={type}
        className={cn(
          "relative z-10 inline-flex h-10 items-center justify-center gap-2 rounded-none border border-border bg-foreground px-5 font-mono text-xs font-medium tracking-[0.02em] text-background transition-colors duration-200",
          "hover:border-[color:var(--arctis-glow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--arctis-glow)]",
          "disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </span>
  );
}
