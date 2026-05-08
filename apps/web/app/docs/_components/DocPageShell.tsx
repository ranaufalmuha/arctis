import type { ReactNode } from "react";
import { getDocByHref } from "@/features/doc/data/nav";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

type DocPageShellProps = {
  children: ReactNode;
  href: string;
  title?: string;
};

export function DocPageShell({ children, href, title }: DocPageShellProps) {
  const doc = getDocByHref(href);

  return (
    <div className="doc-content">
      <div className="mb-8 border-b border-[var(--color-border)] pt-8 pb-8">
        {title && (
          <h1 className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl text-[var(--color-foreground)]">
            {title}
          </h1>
        )}

        {doc?.meta?.installCommand && (
          <div className="mt-4">
            <CommandBlock command={doc.meta.installCommand} />
          </div>
        )}
      </div>

      {children}

      <div className="pb-16" />
    </div>
  );
}
