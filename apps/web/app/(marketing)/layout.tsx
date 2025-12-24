// apps/web/app/(marketing)/layout.tsx
import type { ReactNode } from "react";
import { Header } from "./_components/layout/Header";
import { Footer } from "@/app/(marketing)/_components/layout/Footer";

export default function MarketingSegmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
