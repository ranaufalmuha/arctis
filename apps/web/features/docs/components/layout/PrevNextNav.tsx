"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPrevNext } from "../../data/nav";

export function PrevNextNav() {
  const pathname = usePathname();
  const { prev, next } = getPrevNext(pathname);

  if (!prev && !next) return null;

  return (
    <div className="mt-16 grid grid-cols-2 border-t border-b border-[var(--color-border)]">
      <div>
        {prev && (
          <Link
            href={prev.href}
            className="group flex h-full flex-col justify-center border-r border-[var(--color-border)] px-4 py-5 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)]"
          >
            <span className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted-strong)]">
              ← Previous
            </span>
            <span className="font-mono text-sm text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]">
              {prev.label}
            </span>
          </Link>
        )}
      </div>
      <div className="text-right">
        {next && (
          <Link
            href={next.href}
            className="group flex h-full flex-col justify-center px-4 py-5 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)]"
          >
            <span className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted-strong)]">
              Next →
            </span>
            <span className="font-mono text-sm text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]">
              {next.label}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
