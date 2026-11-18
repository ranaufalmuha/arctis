"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type SpotlightCardProps = React.ComponentProps<"div"> & {
  /** Any CSS color for the pointer spotlight. */
  spotlightColor?: string;
  /** Spotlight radius in pixels. */
  radius?: number;
};

export function SpotlightCard({
  className,
  children,
  spotlightColor = "rgba(255, 235, 80, 0.16)",
  radius = 320,
  ...props
}: SpotlightCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={cardRef}
      data-slot="spotlight-card"
      onPointerMove={handlePointerMove}
      className={cn(
        "group relative overflow-hidden rounded-none border border-border bg-card p-6 text-card-foreground",
        className,
      )}
      style={{ "--spotlight-radius": `${radius}px` } as React.CSSProperties}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
        style={{
          background: `radial-gradient(${radius}px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${spotlightColor}, transparent 72%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
