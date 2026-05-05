import type { ReactNode } from "react";
import { AnnouncementBar } from "@/shared/components/ui/AnnouncementBar";
import { Header } from "@/app/(marketing)/_components/layout/Header";
import { Footer } from "@/app/(marketing)/_components/layout/Footer";
import { PrismaticBackground } from "@/shared/components/ui/PrismaticBackground";

export default function SkillsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
      <PrismaticBackground />
      <AnnouncementBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
