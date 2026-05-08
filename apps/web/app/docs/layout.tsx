import type { ReactNode } from "react";
import { Layout } from "@/features/docs/components/layout/Layout";

export default function DocsRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
