"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { DocsTabBar } from "./DocsTabBar";
import { Sidebar } from "./Sidebar";
import { PrevNextNav } from "./PrevNextNav";

export function Layout({ children }: { children: ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"get-started" | "agents">("get-started");

  return (
    <div className="flex h-screen flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Header />

      <DocsTabBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Mobile sidebar toggle */}
      <button
        className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] hover:bg-[var(--color-panel-strong)] hover:border-[var(--color-border-strong)] transition-colors duration-[var(--transition-fast)] lg:hidden"
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileSidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile sidebar overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 border-x border-[var(--color-border)]">
        {/* Desktop sidebar */}
        <aside className="hidden w-56 shrink-0 border-r border-[var(--color-border)] bg-[var(--color-background)] lg:block overflow-y-auto sticky top-[6.25rem] h-[calc(100vh-6.25rem)]">
          <nav className="px-3 py-4 pb-8">
            <Sidebar activeTab={activeTab} />
          </nav>
        </aside>

        {/* Mobile sidebar */}
        {mobileSidebarOpen && (
          <div className="fixed inset-y-0 left-0 z-40 w-64 lg:hidden top-[6.25rem]"
            style={{ animation: "slide-in 0.15s ease-out" }}
          >
            <div className="h-full overflow-y-auto border-r border-[var(--color-border)] bg-[var(--color-background)]">
              <div className="pt-4">
                <Sidebar activeTab={activeTab} />
              </div>
            </div>
          </div>
        )}

        <main className="min-w-0 flex-1 overflow-y-auto">
          <div className="doc-content">
            {children}
            <PrevNextNav />
          </div>
        </main>
      </div>
    </div>
  );
}
