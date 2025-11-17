// apps/web/app/(marketing)/layout.tsx
import { Layout } from "@/features/marketing/components/layout/Layout";
import type { ReactNode } from "react";

export default function MarketingSegmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
