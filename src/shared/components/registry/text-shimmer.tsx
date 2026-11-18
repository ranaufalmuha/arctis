"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type TextShimmerProps = React.ComponentProps<"span"> & {
  /** Animation duration in seconds. */
  duration?: number;
  /** Color of the moving highlight. */
  highlight?: string;
  /** Base text color. */
  baseColor?: string;
};

export function TextShimmer({
  className,
  children,
  duration = 4,
  highlight = "#ffffff",
  baseColor = "#71717a",
  ...props
}: TextShimmerProps) {
  return (
    <span
      data-slot="text-shimmer"
      className={cn(
        "arctis-shimmer inline-block bg-clip-text text-transparent",
        className,
      )}
      style={
        {
          backgroundImage: `linear-gradient(110deg, ${baseColor} 20%, ${highlight} 50%, ${baseColor} 80%)`,
          backgroundSize: "200% 100%",
          "--shimmer-duration": `${duration}s`,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </span>
  );
}
