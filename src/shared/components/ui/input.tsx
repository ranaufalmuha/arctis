import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(
        "flex h-10 w-full rounded-control border border-border bg-background px-3 text-caption text-foreground transition-colors placeholder:text-muted-strong hover:border-border-strong focus-visible:border-accent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
