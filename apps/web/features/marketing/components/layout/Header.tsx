import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-white">Arctis</span>
          <span className="ml-1 text-sm text-white/50">UI</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm text-white/70">
          <Link href="/docs" className="hover:text-white">
            Docs
          </Link>
          <Link href="/docs/components/button" className="hover:text-white">
            Components
          </Link>
          <Link href="/(marketing)/examples" className="hover:text-white">
            Examples
          </Link>
          <Link
            href="https://github.com/…"
            className="rounded-full border border-white/15 px-3 py-1 hover:border-white/40"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}
