// apps/web/components/layouts/MarketingLayout.tsx
import type { ReactNode } from "react";
import { Footer } from "../../../../shared/components/layouts/Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
