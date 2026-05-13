import Link from "next/link";
import Image from "next/image";
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
      { label: "Browse Themes", href: "/docs" },
      { label: "Documentation", href: "/docs" },
      { label: "Installation", href: "/docs/installation" },
      {
        label: "Changelog",
        href: "https://github.com/ranaufalmuha/arctis",
        external: true,
      },
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
      {
        label: "GitHub",
        href: "https://github.com/ranaufalmuha/arctis",
        external: true,
      },
      { label: "Contributing", href: "/docs/contributing" },
      {
        label: "Community",
        href: "https://github.com/ranaufalmuha/arctis",
        external: true,
      },
      {
        label: "License",
        href: "https://github.com/ranaufalmuha/arctis",
        external: true,
      },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t border-gray-200 bg-white"
      style={
        {
          "--color-foreground": "#111827",
          "--color-muted": "#6b7280",
          "--color-muted-strong": "#4b5563",
          "--color-border": "rgba(0,0,0,0.12)",
          "--color-border-strong": "rgba(0,0,0,0.20)",
          "--color-border-accent": "rgba(217,119,6,0.30)",
          "--color-accent": "#d97706",
          "--color-accent-glow": "rgba(217,119,6,0.10)",
          "--color-background": "#ffffff",
          "--color-panel": "rgba(0,0,0,0.03)",
          "--color-panel-strong": "rgba(0,0,0,0.06)",
        } as React.CSSProperties
      }
    >
      <div className="mx-auto w-full max-w-7xl border-x border-gray-200">
        {/* CTA Section */}
        <section className="border-b border-border flex max-md:flex-col py-10 justify-between">
          <div className="w-2/4 text-black my-auto text-3xl sm:text-4xl md:text-5xl px-6 max-md:py-8 py-16 lg:px-10 lg:py-20 max-md:w-full">
            Interested in the future of AI tooling?
          </div>
          <div className="px-6 py-16 max-md:py-8 lg:px-10 lg:py-20">
            <div className="mx-auto flex w-70 max-md:w-full flex-col items-center gap-4">
              <Link
                href="/docs"
                className="w-full border border-foreground bg-foreground px-8 py-3 text-center font-mono text-sm font-medium tracking-wider text-background hover:opacity-90 transition-opacity duration-(--transition-fast)"
              >
                Browse Skills
              </Link>
              <Link
                href="https://github.com/ranaufalmuha/arctis"
                target="_blank"
                rel="noreferrer"
                className="w-full border border-border px-8 py-3 text-center font-mono text-sm tracking-wider text-muted hover:border-border-strong hover:text-foreground transition-all duration-(--transition-fast)"
              >
                Star on GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="relative border-b border-border h-[200px] overflow-hidden flex items-center justify-center">
          <div
            className="full-bleed absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/background.jpg')" }}
          />
          <div className="relative text-center px-6">
            <Image
              src="/logo/logo-with-bg.svg"
              alt="ARCTIS"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
        </section>

        {/* Top section */}
        <div className="px-4 py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-4">
              <Link href="/" className="inline-flex items-center gap-2 mb-4">
                <Image
                  src="/logo/logo-horizontal-light.svg"
                  alt="Arctis"
                  width={130}
                  height={30}
                  className="h-6 w-auto"
                />
              </Link>
              <p className="font-mono text-sm leading-relaxed text-[var(--color-muted)]">
                An open-source skill registry for AI coding agents. Give your
                coding agent better taste.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://github.com/ranaufalmuha/arctis"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[var(--color-border)] px-2 py-1 font-mono text-overline tracking-wider text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)] transition-all duration-[var(--transition-fast)]"
                >
                  GH
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[var(--color-border)] px-2 py-1 font-mono text-overline tracking-wider text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)] transition-all duration-[var(--transition-fast)]"
                >
                  X
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-[var(--color-border)] px-2 py-1 font-mono text-overline tracking-wider text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)] transition-all duration-[var(--transition-fast)]"
                >
                  DC
                </a>
              </div>
            </div>

            {/* Link columns */}
            {footerCols.map((col) => (
              <div key={col.title} className="col-span-1 md:col-span-2">
                <div className="mb-3 font-mono text-overline tracking-[0.15em] text-[var(--color-muted-strong)]">
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
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-overline text-[var(--color-muted-strong)]">
            <span>{year} ARCTIS</span>
            <span>Open-source</span>
            <span>MIT License</span>
          </div>
          <div className="font-mono text-overline tracking-[0.12em] text-[var(--color-muted)]">
            <span className="text-[var(--color-muted)]">
              PRISMATIC ARCHITECTURE
            </span>
            <span className="mx-2 text-[var(--color-muted-strong)]">/</span>
            <span>WHERE FLUID MOTION MEETS BRUTALIST PRECISION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
