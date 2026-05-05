"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".doc-content h2, .doc-content h3",
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
        level: el.tagName === "H2" ? 2 : 3,
      };
    });

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block w-48 shrink-0">
      <div className="sticky top-28 pt-1">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
          On this page
        </div>
        <ul className="space-y-1 border-l border-[var(--color-border)]">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                className={`block py-1 font-mono text-xs leading-relaxed transition-colors duration-[var(--transition-fast)] hover:text-[var(--color-foreground)] ${
                  h.id === activeId
                    ? "border-l-2 border-[var(--color-accent)] pl-[calc(0.5rem-2px)] text-[var(--color-foreground)] -ml-px"
                    : "border-l-2 border-transparent pl-2 text-[var(--color-muted)]"
                } ${h.level === 3 ? "pl-6" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
