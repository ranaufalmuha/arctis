import Link from "next/link";
import type { BaseDocMeta } from "@/shared/types/docs";

type DocCategoryTemplateProps = {
  metadata: BaseDocMeta;
  items: Array<{
    title: string;
    href: string;
    description?: string;
    badges?: string[];
  }>;
};

export function DocCategoryTemplate({
  metadata: meta,
  items,
}: DocCategoryTemplateProps) {
  return (
    <div>
      <div className="border-b border-[var(--color-border)] py-8">
        <h1 className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl text-[var(--color-foreground)]">
          {meta.title}
        </h1>
        <p className="font-mono text-base leading-relaxed text-[var(--color-muted)]">
          {meta.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 border-t border-l border-[var(--color-border)] my-8">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group block border-b border-r border-[var(--color-border)] p-4 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)]"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-sm font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]">
                {item.title}
              </span>
              {item.badges?.map((badge) => (
                <span
                  key={badge}
                  className="border border-[var(--color-border-accent)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-accent)]"
                >
                  {badge}
                </span>
              ))}
            </div>
            {item.description && (
              <p className="font-mono text-[11px] text-[var(--color-muted)]">
                {item.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
