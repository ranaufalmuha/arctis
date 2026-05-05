import Link from "next/link";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";

type FooterLink = { label: string; href: string; external?: boolean };

type FooterCol = {
  title: string;
  links: FooterLink[];
};

const footerCols: FooterCol[] = [
  {
    title: "Product",
    links: [
      { label: "Browse Skills", href: "/skills" },
      { label: "Skill Registry", href: "/skills" },
      { label: "Installation", href: "/docs/installation" },
      { label: "Changelog", href: "https://github.com/ranaufalmuha/arctis", external: true },
    ],
  },
  {
    title: "Agents",
    links: [
      { label: "Claude Code", href: "/docs/agents" },
      { label: "OpenCode", href: "/docs/agents" },
      { label: "Codex", href: "/docs/agents" },
      { label: "Compatibility", href: "/docs/agents" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "SKILL.md Spec", href: "/docs/skill-md" },
      { label: "Creating Skills", href: "/docs/creating" },
      { label: "API Reference", href: "/docs" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub", href: "https://github.com/ranaufalmuha/arctis", external: true },
      { label: "Contributing", href: "/docs/contributing" },
      { label: "Community", href: "https://github.com/ranaufalmuha/arctis", external: true },
      { label: "License", href: "https://github.com/ranaufalmuha/arctis", external: true },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-7xl border-x border-t border-[var(--color-border)] bg-[var(--color-background)]">
      {/* Top section */}
      <div className="px-4 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="font-mono text-lg font-bold tracking-tighter text-[var(--color-foreground)]">
                ARCTIS
              </span>
              <span className="border border-[var(--color-border-accent)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-accent)]">
                SKILLS
              </span>
            </Link>
            <p className="max-w-xs font-mono text-sm leading-relaxed text-[var(--color-muted)]">
              An open-source skill registry for AI coding agents. Give your coding agent better taste.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/ranaufalmuha/arctis"
                target="_blank"
                rel="noreferrer"
                className="border border-[var(--color-border)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)] transition-all duration-[var(--transition-fast)]"
              >
                GH
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="border border-[var(--color-border)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)] transition-all duration-[var(--transition-fast)]"
              >
                X
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="border border-[var(--color-border)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)] transition-all duration-[var(--transition-fast)]"
              >
                DC
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title} className="col-span-1 md:col-span-2">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                {col.title}
              </div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-[var(--transition-fast)]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="font-mono text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-[var(--transition-fast)]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <HairlineDivider />

      {/* Bottom bar */}
      <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] text-[var(--color-muted-strong)]">
          <span>{year} ARCTIS</span>
          <span>Open-source</span>
          <span>MIT License</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted)]">
          <span className="text-[var(--color-accent)]">PRISMATIC ARCHITECTURE</span>
          <span className="mx-2 text-[var(--color-muted-strong)]">/</span>
          <span>WHERE FLUID MOTION MEETS BRUTALIST PRECISION</span>
        </div>
      </div>
    </footer>
  );
}
