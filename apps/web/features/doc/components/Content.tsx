import React from "react";

type DocsContentProps = {
  children?: React.ReactNode;
};

export default function DocsContent({ children }: DocsContentProps) {
  return (
    <section className="border border-[var(--color-border)] bg-[var(--color-panel)] overflow-hidden w-full aspect-5/3 flex items-center justify-center">
      {children ?? <p className="font-mono text-sm text-[var(--color-muted)]">Component preview</p>}
    </section>
  );
}
