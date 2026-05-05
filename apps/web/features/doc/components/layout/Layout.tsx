"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TableOfContents } from "./TableOfContents";
import { PrevNextNav } from "./PrevNextNav";

export function Layout({ children }: { children: ReactNode }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col bg-[#050505] text-[var(--color-foreground)]">
      {/* Grid background — matching landing page */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Subtle top glow */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] z-0 rounded-full bg-indigo-500/8 blur-3xl" />

      <Header />

      {/* Mobile sidebar toggle */}
      <button
        className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center border border-[var(--color-border)] bg-[var(--color-background)] lg:hidden"
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
        <aside className="hidden w-56 shrink-0 border-r border-[var(--color-border)] bg-[var(--color-background)] lg:block overflow-y-auto sticky top-16 h-[calc(100vh-4rem)]">
          <nav className="px-3 py-4 pb-8">
            <Sidebar />
          </nav>
        </aside>

        {/* Mobile sidebar */}
        {mobileSidebarOpen && (
          <div className="fixed inset-y-0 left-0 z-40 w-64 lg:hidden top-16"
            style={{ animation: "slide-in 0.15s ease-out" }}
          >
            <div className="h-full overflow-y-auto border-r border-[var(--color-border)] bg-[var(--color-background)]">
              <div className="pt-4">
                <Sidebar />
              </div>
            </div>
          </div>
        )}

        <main className="min-w-0 flex-1 overflow-y-auto px-4 py-8 md:px-8 lg:px-10">
          <div className="mx-auto flex w-full max-w-4xl gap-10">
            <div className="min-w-0 flex-1 doc-content">
              {children}
              <PrevNextNav />
            </div>
            <TableOfContents />
          </div>
        </main>
      </div>
    </div>
  );
}
