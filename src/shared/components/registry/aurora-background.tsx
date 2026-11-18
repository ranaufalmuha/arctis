"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type AuroraBackgroundProps = React.ComponentProps<"div"> & {
  /** Three CSS colors used for the aurora layers. */
  colors?: [string, string, string];
  /** Animation duration in seconds. */
  speed?: number;
};

export function AuroraBackground({
  className,
  children,
  colors = ["#ffeb50", "#f59e0b", "#f97316"],
  speed = 14,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      data-slot="aurora-background"
      className={cn(
        "relative isolate overflow-hidden border border-border bg-background",
        className,
      )}
      style={{ "--aurora-duration": `${speed}s` } as React.CSSProperties}
      {...props}
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {colors.map((color, index) => (
          <span
            key={color}
            className="arctis-aurora absolute h-[60%] w-[60%] rounded-full opacity-40 blur-3xl motion-reduce:animate-none"
            style={{
              background: color,
              top: `${index * 18 - 10}%`,
              left: `${index * 22 - 5}%`,
              animationDelay: `${index * -3}s`,
            }}
          />
        ))}
        <span
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
