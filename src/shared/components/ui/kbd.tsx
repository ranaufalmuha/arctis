import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Kbd({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-control border border-border bg-panel px-1.5 font-mono text-overline text-muted-foreground",
        className,
      )}
    >
      {children}
    </kbd>
  );
}
