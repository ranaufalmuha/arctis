"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

type DropdownItem = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
};

type NavItem = {
  label: string;
  href?: string;
  children?: DropdownItem[];
};

const navItems: NavItem[] = [
  {
    label: "Docs",
    children: [
      {
        label: "What is ARCTIS?",
        href: "/docs",
        description: "Platform overview",
      },
      {
        label: "SKILL.md Format",
        href: "/docs/skill-md",
        description: "Package anatomy",
      },
      {
        label: "Installation",
        href: "/docs/installation",
        description: "CLI setup guide",
      },
      {
        label: "Creating Skills",
        href: "/docs/creating",
        description: "Build your own",
      },
    ],
  },
];

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isLight, setIsLight] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileExpanded(null);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const lightSections = document.querySelectorAll(
      '[data-section-theme="light"]',
    );
    if (lightSections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some(
          (e) => e.isIntersecting && e.boundingClientRect.top <= 80,
        );
        setIsLight(visible);
      },
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );

    lightSections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 mx-auto w-full max-w-7xl border-x border-b transition-colors duration-300 ${
          isLight
            ? "border-gray-300 bg-white"
            : "border-[var(--color-border)] bg-[#050505]"
        }`}
        style={
          isLight
            ? ({
                "--color-foreground": "#111827",
                "--color-muted": "#6b7280",
                "--color-muted-strong": "#4b5563",
                "--color-border": "rgba(0,0,0,0.12)",
                "--color-border-strong": "rgba(0,0,0,0.20)",
                "--color-border-accent": "rgba(217,119,6,0.30)",
                "--color-accent": "#d97706",
                "--color-accent-glow": "rgba(217,119,6,0.10)",
              } as React.CSSProperties)
            : undefined
        }
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src={
                isLight
                  ? "/logo/logo-horizontal-light.svg"
                  : "/logo/logo-horizontal-dark.svg"
              }
              alt="Arctis"
              width={130}
              height={30}
              className="h-6 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            onMouseLeave={handleMouseLeave}
          >
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openDropdown === item.label;

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-[var(--transition-fast)] ${
                        isOpen
                          ? "text-[var(--color-foreground)]"
                          : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                      }`}
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.label)
                      }
                    >
                      {item.label}
                      <svg
                        className={`h-3 w-3 transition-transform duration-[var(--transition-fast)] ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isOpen && item.children && (
                      <div
                        className="absolute top-full left-0 mt-0 w-72 border border-[var(--color-border)] bg-[var(--color-background)] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                      >
                        <div className="p-3">
                          <div className="mb-2 font-mono text-label uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                            {item.label}
                          </div>
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-start gap-3 px-3 py-2.5 hover:bg-[var(--color-panel)] transition-colors duration-[var(--transition-fast)] group"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-mono text-sm text-[var(--color-foreground)] transition-colors duration-[var(--transition-fast)]">
                                    {child.label}
                                  </span>
                                  {child.badge && (
                                    <span className="border border-[var(--color-border)] px-1 py-0.5 font-mono text-micro uppercase tracking-[0.12em] text-[var(--color-muted)]">
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                {child.description && (
                                  <p className="mt-0.5 font-mono text-caption text-[var(--color-muted)]">
                                    {child.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "/"}
                  className="px-3 py-2 font-mono text-xs uppercase tracking-wider text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-[var(--transition-fast)]"
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="ml-3 flex items-center gap-2 border-l border-[var(--color-border)] pl-3">
              <Link
                href="/docs"
                className="border border-[var(--color-foreground)] bg-[var(--color-foreground)] px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-[var(--color-background)] hover:opacity-90 transition-all duration-[var(--transition-fast)]"
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/ranaufalmuha/arctis"
                target="_blank"
                rel="noreferrer"
                className="border border-[var(--color-border)] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)] transition-all duration-[var(--transition-fast)]"
              >
                GitHub
              </Link>
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-px w-5 bg-[var(--color-foreground)] transition-all duration-[var(--transition-fast)] ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[var(--color-foreground)] transition-all duration-[var(--transition-fast)] ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[var(--color-foreground)] transition-all duration-[var(--transition-fast)] ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-[var(--color-background)] lg:hidden overflow-y-auto">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = mobileExpanded === item.label;

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="border-b border-[var(--color-border)]"
                  >
                    <button
                      className="flex w-full items-center justify-between py-4 font-mono text-sm uppercase tracking-wider text-[var(--color-foreground)]"
                      onClick={() =>
                        setMobileExpanded(isExpanded ? null : item.label)
                      }
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform duration-[var(--transition-fast)] ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isExpanded && item.children && (
                      <div className="pb-3 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block border border-[var(--color-border)] bg-[var(--color-panel)] px-3 py-2.5 hover:bg-[var(--color-panel-strong)] transition-colors duration-[var(--transition-fast)]"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="font-mono text-sm text-[var(--color-foreground)]">
                              {child.label}
                              {child.badge && (
                                <span className="ml-2 border border-[var(--color-border)] px-1 py-0.5 font-mono text-micro uppercase text-[var(--color-muted)]">
                                  {child.badge}
                                </span>
                              )}
                            </div>
                            {child.description && (
                              <p className="mt-1 font-mono text-caption text-[var(--color-muted)]">
                                {child.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "/"}
                  className="block border-b border-[var(--color-border)] py-4 font-mono text-sm uppercase tracking-wider text-[var(--color-foreground)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-6 space-y-3">
              <Link
                href="/docs"
                className="block w-full border border-[var(--color-foreground)] bg-[var(--color-foreground)] py-3 text-center font-mono text-sm font-medium uppercase tracking-wider text-[var(--color-background)] hover:opacity-90 transition-all duration-[var(--transition-fast)]"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/ranaufalmuha/arctis"
                target="_blank"
                rel="noreferrer"
                className="block w-full border border-[var(--color-border)] py-3 text-center font-mono text-sm uppercase tracking-wider text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)] transition-all duration-[var(--transition-fast)]"
                onClick={() => setMobileOpen(false)}
              >
                GitHub
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
