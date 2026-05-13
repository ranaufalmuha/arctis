import Link from "next/link";
import Image from "next/image";
import { SearchPalette } from "./SearchPalette";

export function Header() {
  return (
    <header className="sticky top-0 z-40 mx-auto w-full max-w-7xl border-x border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur">
      <div className="flex h-16 items-center gap-6 px-4 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/logo/logo-horizontal-dark.svg"
            alt="Arctis"
            width={120}
            height={28}
            className="h-5 w-auto"
          />
          <span className="border border-[var(--color-border-accent)] px-1.5 py-0.5 font-mono text-label uppercase tracking-[0.15em] text-[var(--color-accent)]">
            DOCS
          </span>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <SearchPalette />
          <Link
            href="https://github.com/ranaufalmuha/arctis"
            target="_blank"
            rel="noreferrer"
            className="hidden border border-[var(--color-border)] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)] transition-all duration-[var(--transition-fast)] sm:block"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
