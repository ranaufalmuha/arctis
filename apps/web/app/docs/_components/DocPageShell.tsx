import type { ReactNode } from "react";
import { getDocByHref } from "@/features/doc/data/nav";
import { Badge } from "@/shared/components/ui/Badge";
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
      <div className="mb-8 border-b border-[var(--color-border)] pb-8">
        {doc?.meta && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {doc.meta.type && <Badge variant="accent">{doc.meta.type}</Badge>}
            {doc.meta.agents?.map((a) => <Badge key={a}>{a}</Badge>)}
            {doc.meta.frameworks?.map((f) => <Badge key={f}>{f}</Badge>)}
          </div>
        )}

        {title && (
          <h1 className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl">
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
    </div>
  );
}
