// apps/web/app/docs/layout.tsx
import type { ReactNode } from "react";
import { getDocsRoutes } from "@/features/doc/utils/routes";
import { Layout } from "@/features/doc/components/layout/Layout";

export default async function DocsRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const routes = await getDocsRoutes();

  return <Layout routes={routes}>{children}</Layout>;
}
