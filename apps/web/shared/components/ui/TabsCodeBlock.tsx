"use client";

import { useState, useCallback } from "react";
import clsx from "clsx";
import { CodeBlock, CodeBlockCode } from "./CodeBlock";

type Tab = {
  key: string;
  label: string;
  command: string;
};

type TabsCodeBlockProps = {
  tabs: Tab[];
  defaultTab?: string;
  lang?: string;
  className?: string;
};

export function TabsCodeBlock({
  tabs,
  defaultTab,
  lang = "bash",
  className,
}: TabsCodeBlockProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.key ?? "");
  const current = tabs.find((t) => t.key === active)?.command ?? "";

  const [copied, setCopied] = useState(false);
  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(current);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }, [current]);

  return (
    <CodeBlock className={className}>
      <div className="flex items-center justify-between border-b border-border bg-panel">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={clsx(
                "relative px-inline py-compact font-mono text-xs tracking-wide transition-colors border-r border-border",
                active === tab.key
                  ? "bg-panel text-foreground z-10 border-b"
                  : "text-muted-strong hover:text-muted",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button
          onClick={copy}
          className="border-l border-border p-compact text-xs hover:border-border-strong transition-colors duration-(--transition-fast) text-muted"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <CodeBlockCode code={current} language={lang} showHeader={false} />
    </CodeBlock>
  );
}
