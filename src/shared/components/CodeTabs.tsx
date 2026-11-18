import { useState } from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./CodeBlock";

export type CodeTab = {
  label: string;
  code: string;
  language?: string;
};

export function CodeTabs({
  tabs,
  className,
}: {
  tabs: CodeTab[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  if (!current) return null;

  return (
    <div
      className={cn(
        "flex w-full min-w-0 flex-col overflow-hidden rounded-card border border-border bg-card",
        className,
      )}
    >
      <div className="flex items-center gap-1 border-b border-border bg-panel px-2 py-1.5">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActive(index)}
            data-active={index === active}
            className="segmented-item shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <CodeBlock
        code={current.code}
        language={current.language}
        className="rounded-none border-0"
      />
    </div>
  );
}
