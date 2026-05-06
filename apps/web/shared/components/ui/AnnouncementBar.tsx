import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 mx-auto w-full max-w-7xl border-x border-b border-[var(--color-border)] bg-[var(--color-panel)]">
      <div className="flex h-9 items-center justify-center px-4">
        <Link
          href="/docs"
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-[var(--transition-fast)]"
        >
          <span className="flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-1.5 w-1.5 animate-ping bg-[var(--color-accent)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 bg-[var(--color-accent)]" />
          </span>
          Explore our collection of agent-ready themes
          <span className="text-[var(--color-accent)]">{"->"}</span>
        </Link>
      </div>
    </div>
  );
}
