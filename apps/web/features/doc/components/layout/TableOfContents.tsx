"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".doc-content h2, .doc-content h3, .doc-content [data-toc-label]",
      ),
    );

    const items: TocItem[] = elements.map((el) => {
      const id =
        el.id ||
        el.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") ||
        "";

      el.id = id;
      return {
        id,
        text: el.textContent || "",
        level: el.tagName === "H2" || el.hasAttribute("data-toc-label") ? 2 : 3,
      };
    });

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);

            // Auto-scroll TOC to keep active heading visible
            const link = navRef.current?.querySelector(
              `a[href="#${entry.target.id}"]`,
            );
            if (link) {
              link.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-56 shrink-0 border-l border-[var(--color-border)] bg-[var(--color-background)]">
      <nav ref={navRef} className="sticky top-[6.25rem] h-[calc(100vh-6.25rem)] overflow-y-auto px-3 py-4">
        <div className="mb-3 px-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-strong)]">
          On this page
        </div>
        <ul className="space-y-0">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block py-1.5 font-mono text-sm leading-relaxed transition-colors duration-[var(--transition-fast)] hover:text-[var(--color-foreground)] ${
                  h.id === activeId
                    ? "border-l-2 border-[var(--color-accent)] pl-[calc(0.75rem-2px)] text-[var(--color-foreground)] bg-[var(--color-accent-glow)] -ml-px"
                    : "border-l-2 border-transparent pl-3 text-[var(--color-muted)]"
                } ${h.level === 3 ? "pl-8" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(h.id);
                  if (target) {
                    const main = target.closest("main");
                    if (main) {
                      const top = target.offsetTop - 80;
                      main.scrollTo({ top, behavior: "smooth" });
                    }
                  }
                }}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
