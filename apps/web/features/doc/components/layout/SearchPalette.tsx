"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { getFlatDocsList } from "../../data/nav";
import type { DocNavItem } from "../../data/nav";

export function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const flat = getFlatDocsList();

  const results = query
    ? flat.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.href.toLowerCase().includes(query.toLowerCase()),
      )
    : flat.slice(0, 8);

  const navigate = useCallback(
    (item: DocNavItem) => {
      setOpen(false);
      setQuery("");
      router.push(item.href);
    },
    [router],
  );

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setQuery("");
      setSelected(0);
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && results[selected]) {
      navigate(results[selected]);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-7 min-w-0 items-center gap-2 border border-[var(--color-border)] bg-[var(--color-panel)] px-3 text-left font-mono text-[10px] text-[var(--color-muted)] hover:border-[var(--color-border-strong)] transition-colors duration-[var(--transition-fast)]"
      >
        <svg className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="truncate">Search docs...</span>
        <span className="ml-auto shrink-0 text-[var(--color-muted-strong)]">Ctrl+K</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative z-50 w-full max-w-lg border border-[var(--color-border)] bg-[var(--color-background)] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-3">
              <svg className="h-4 w-4 shrink-0 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelected(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search documentation..."
                className="flex-1 bg-transparent font-mono text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-strong)] outline-none"
              />
              <button
                onClick={() => setOpen(false)}
                className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
              >
                Esc
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {results.length === 0 ? (
                <div className="px-3 py-8 text-center font-mono text-sm text-[var(--color-muted)]">
                  No results found.
                </div>
              ) : (
                results.map((item, i) => (
                  <button
                    key={item.href}
                    onClick={() => navigate(item)}
                    onMouseEnter={() => setSelected(i)}
                    className={`flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors duration-[var(--transition-fast)] ${
                      i === selected
                        ? "bg-[var(--color-accent-glow)]"
                        : "hover:bg-[var(--color-panel)]"
                    }`}
                  >
                    <span className="font-mono text-sm text-[var(--color-foreground)]">
                      {item.label}
                    </span>
                    {item.meta?.type && (
                      <span className="ml-auto shrink-0 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]">
                        {item.meta.type}
                      </span>
                    )}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
