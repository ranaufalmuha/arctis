"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { DOCS_NAV } from "../../data/nav";
import type { DocNavGroup } from "../../data/nav";

export function Sidebar({ activeTab }: { activeTab?: "get-started" | "agents" }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Set<string>>(() => {
    const c = new Set<string>();
    DOCS_NAV.forEach((g) => {
      if (g.defaultOpen === false) c.add(g.label);
    });
    return c;
  });

  const visibleGroups = DOCS_NAV.filter((group) => {
    if (activeTab === "agents") return group.label === "Agents";
    // "get-started" (default): show all except Agents
    return group.label !== "Agents";
  });

  const toggle = (label: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <>
      {visibleGroups.map((group) => (
        <SidebarGroup
          key={group.label}
          group={group}
          pathname={pathname}
          collapsed={collapsed.has(group.label)}
          onToggle={() => toggle(group.label)}
        />
      ))}
    </>
  );
}

function SidebarGroup({
  group,
  pathname,
  collapsed,
  onToggle,
}: {
  group: DocNavGroup;
  pathname: string;
  collapsed: boolean;
  onToggle: () => void;
}) {
  const isActive = group.items.some((item) => pathname === item.href);

  return (
    <div className="mb-3">
      <button
        onClick={onToggle}
        className={clsx(
          "flex w-full items-center justify-between px-1 py-1 text-left",
          "font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-[var(--transition-fast)]",
          isActive
            ? "text-[var(--color-foreground)]"
            : "text-[var(--color-muted-strong)] hover:text-[var(--color-foreground)]",
        )}
      >
        <span>{group.label}</span>
        <svg
          className={clsx(
            "h-2.5 w-2.5 shrink-0 transition-transform duration-[var(--transition-fast)]",
            collapsed && "-rotate-90",
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {!collapsed && (
        <div className="mt-0.5 space-y-px">
          {group.items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center gap-2 py-1.5 font-mono text-sm transition-all duration-[var(--transition-fast)]",
                  active
                    ? "border-l-2 border-[var(--color-accent)] pl-3 -ml-px text-[var(--color-foreground)] bg-[var(--color-accent-glow)]"
                    : "border-l-2 border-transparent pl-3 text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
                )}
              >
                <span className="truncate">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto shrink-0 border border-[var(--color-border-accent)] px-1 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-accent)]">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
