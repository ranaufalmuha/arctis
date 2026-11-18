import type { ReactNode } from "react";

export function DocsSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-12 scroll-mt-20">
      <h2 className="type-section-title border-b border-border pb-3">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-4 text-body text-muted-foreground [&_code]:font-mono [&_code]:text-foreground">
        {children}
      </div>
    </section>
  );
}
