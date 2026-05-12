import type { ReactNode } from "react";
import type { BaseDocMeta } from "@/shared/types/docs";

type DocPageTemplateProps = {
  metadata: BaseDocMeta;
  children: ReactNode;
};

export function DocPageTemplate({ children }: DocPageTemplateProps) {
  return <div className="doc-content">{children}</div>;
}
