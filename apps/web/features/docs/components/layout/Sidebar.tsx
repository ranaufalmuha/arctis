"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LuPaintbrush, LuPlus, LuListChecks, LuBot, LuInfo } from "react-icons/lu";
import type { IconType } from "react-icons";
import { DOCS_NAV } from "../../data/nav";
import type { DocNavGroup } from "../../data/nav";

const GROUP_ICONS: Record<string, IconType> = {
  Introduction: LuInfo,
  Themes: LuPaintbrush,
  "Add-ons": LuPlus,
  Rules: LuListChecks,
  Agents: LuBot,
};

export function Sidebar({ activeTab }: { activeTab?: "get-started" | "agents" }) {
  const pathname = usePathname();

  const visibleGroups = DOCS_NAV.filter((group) => {
    if (activeTab === "agents") return group.label === "Agents";
    return group.label !== "Agents";
  });

  return (
    <>
      {visibleGroups.map((group) => (
        <SidebarGroup key={group.label} group={group} pathname={pathname} />
      ))}
    </>
  );
}

function SidebarGroup({
  group,
  pathname,
}: {
  group: DocNavGroup;
  pathname: string;
}) {
  const isActive = group.items.some((item) => pathname === item.href);
  const isGroupActive = group.href ? pathname === group.href : false;
  const highlight = isActive || isGroupActive;
  const Icon = GROUP_ICONS[group.label];

  return (
    <div className="mb-5">
      {group.href ? (
        <Link
          href={group.href}
          className={clsx(
            "flex items-center gap-2 px-1 py-1 font-mono text-sm font-bold transition-colors duration-[var(--transition-fast)]",
            highlight
              ? "text-[var(--color-foreground)]"
              : "text-[var(--color-muted-strong)] hover:text-[var(--color-foreground)]",
          )}
        >
          {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
          {group.label}
        </Link>
      ) : (
        <div
          className={clsx(
            "flex items-center gap-2 px-1 py-1 font-mono text-sm font-bold",
            highlight
              ? "text-[var(--color-foreground)]"
              : "text-[var(--color-muted-strong)]",
          )}
        >
          {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
          {group.label}
        </div>
      )}

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
    </div>
  );
}
