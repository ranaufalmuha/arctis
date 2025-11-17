"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { DocItem } from "../../interfaces/doc";

type Props = {
  routes: DocItem[];
};

export function Sidebar({ routes }: Props) {
  const pathname = usePathname();

  // group by `group` field
  const grouped = routes.reduce<Record<string, DocItem[]>>((acc, route) => {
    const group = route.group ?? "General";
    if (!acc[group]) acc[group] = [];
    acc[group].push(route);
    return acc;
  }, {});

  return (
    <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-black/40 p-4 text-sm text-white/70 md:block capitalize">
      {Object.entries(grouped).map(([groupLabel, items]) => (
        <div key={groupLabel} className="mb-6">
          <div className="mb-2 tracking-wide text-white/40">{groupLabel}</div>
          <nav className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded px-2 py-1 hover:bg-white/5 hover:text-white",
                  pathname === item.href && "bg-white/10 text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ))}
    </aside>
  );
}
