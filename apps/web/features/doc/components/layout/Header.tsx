import Link from "next/link";

export function Header() {
  return (
    <header className="flex h-12 items-center justify-between border-b border-white/10 bg-black/60 px-4 backdrop-blur ">
      <div className="flex items-center gap-3 text-xs text-white/70">
        <Link href="/" className="text-sm font-semibold text-white">
          Arctis
        </Link>
        <span className="text-white/40">Docs</span>
      </div>

      {/* placeholder untuk search / theme toggle nanti */}
      <div className="h-7 w-40 rounded-full border border-white/15 bg-black/40 text-[10px] text-white/40 flex items-center px-3">
        Search (Ctrl+K)
      </div>
    </header>
  );
}
