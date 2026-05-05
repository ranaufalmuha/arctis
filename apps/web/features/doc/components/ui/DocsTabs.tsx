"use client";

import { useState, type ReactNode } from "react";

type Tab = {
  key: string;
  label: string;
  content: ReactNode;
};

type DocsTabsProps = {
  tabs: Tab[];
  defaultTab?: string;
};

export function DocsTabs({ tabs, defaultTab }: DocsTabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.key ?? "");

  const current = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div>
      <div className="flex border-b border-[var(--color-border)]" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={tab.key === active}
            onClick={() => setActive(tab.key)}
            className={`border-r border-[var(--color-border)] px-5 py-2.5 font-mono text-sm uppercase tracking-[0.1em] transition-all duration-[var(--transition-fast)] ${
              tab.key === active
                ? "text-[var(--color-foreground)] bg-[var(--color-panel)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-panel)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="pt-6">{current?.content}</div>
    </div>
  );
}
