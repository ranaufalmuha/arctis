import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { DEMOS } from "../demos";

export function DemoFrame({
  name,
  props,
  className,
  compact = false,
}: {
  name: string;
  props?: Record<string, unknown>;
  className?: string;
  compact?: boolean;
}) {
  const Demo = DEMOS[name];

  if (!Demo) return null;

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden rounded-shell border border-border bg-panel/50",
        compact ? "min-h-[180px]" : "min-h-[380px] sm:min-h-[440px]",
        className,
      )}
    >
      <Suspense
        fallback={
          <span className="type-eyebrow text-muted-strong">
            Loading preview
          </span>
        }
      >
        <Demo {...props} />
      </Suspense>
    </div>
  );
}
