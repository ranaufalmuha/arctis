"use client";

type DocsTabBarProps = {
  activeTab: "get-started" | "agents";
  onTabChange: (tab: "get-started" | "agents") => void;
};

export function DocsTabBar({ activeTab, onTabChange }: DocsTabBarProps) {
  return (
    <div className="sticky top-16 z-30 mx-auto w-full max-w-7xl border-x border-b border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="flex">
        <button
          onClick={() => onTabChange("get-started")}
          className={`border-r border-[var(--color-border)] px-6 py-2.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-[var(--transition-fast)] ${
            activeTab === "get-started"
              ? "text-[var(--color-foreground)] bg-[var(--color-panel)]"
              : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-panel)]"
          }`}
        >
          Get Started
        </button>
        <button
          onClick={() => onTabChange("agents")}
          className={`px-6 py-2.5 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-[var(--transition-fast)] ${
            activeTab === "agents"
              ? "text-[var(--color-foreground)] bg-[var(--color-panel)]"
              : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-panel)]"
          }`}
        >
          Agents
        </button>
      </div>
    </div>
  );
}
