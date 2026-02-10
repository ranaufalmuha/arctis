// apps/web/app/(marketing)/layout.tsx
import type { ReactNode } from "react";
import { Header } from "@/shared/components/layout/Header";
import { Footer } from "@/shared/components/layout/Footer";
import "@/shared/styles/globals.css";

export default function MarketingSegmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html className="flex min-h-screen flex-col bg-black text-white">
      <body>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
