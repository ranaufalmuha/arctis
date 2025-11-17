import React from "react";

type DocsContentProps = {
  children?: React.ReactNode;
};

export default function DocsContent({ children }: DocsContentProps) {
  return (
    <section className="border border-white/20 rounded-lg overflow-hidden w-full aspect-5/3 flex items-center justify-center">
      {children ?? <p className="text-sm text-white/40">Component preview</p>}
    </section>
  );
}
