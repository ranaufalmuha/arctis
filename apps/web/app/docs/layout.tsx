import type { ReactNode } from "react";
import { Layout } from "@/features/doc/components/layout/Layout";

export default function DocsRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
