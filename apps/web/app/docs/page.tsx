import { Badge } from "@/shared/components/ui/Badge";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mb-8 border-b border-[var(--color-border)] px-4 pb-8 md:px-8 lg:px-10">
        <div className="mb-4 flex items-center gap-2">
          <Badge variant="accent">GETTING STARTED</Badge>
        </div>
        <h1 className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl text-[var(--color-foreground)]">
          Getting Started
        </h1>
        <p className="font-mono text-base leading-relaxed text-[var(--color-muted)]">
          Give your coding agent better taste. Install your first skill in under 30 seconds.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="mb-3 font-mono text-xl font-semibold tracking-tight text-[var(--color-foreground)]">1. Install ARCTIS CLI</h2>
        <CommandBlock command="npm install -g arctis" />
      </div>

      <div className="mb-10">
        <h2 className="mb-3 font-mono text-xl font-semibold tracking-tight text-[var(--color-foreground)]">2. Choose a Skill</h2>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 border-t border-l border-[var(--color-border)]">
          {[
            { label: "Prismatic Architecture", href: "/docs/themes/prismatic-architecture", desc: "Default ARCTIS design system" },
            { label: "Brutalist UI", href: "/docs/themes/brutalist-ui", desc: "Raw, structural, high-contrast" },
            { label: "Retro Web", href: "/docs/themes/retro-web", desc: "Y2K-era web aesthetics" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block border-b border-r border-[var(--color-border)] p-4 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)]"
            >
              <div className="font-mono text-sm font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]">
                {item.label}
              </div>
              <div className="mt-1 font-mono text-[11px] text-[var(--color-muted)]">{item.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="mb-3 font-mono text-xl font-semibold tracking-tight text-[var(--color-foreground)]">3. Install the Skill</h2>
        <CommandBlock command="npx arctis add prismatic-architecture --all" />
        <p className="mt-3 font-mono text-sm text-[var(--color-muted)]">
          Installs into Claude Code, OpenCode, and Codex simultaneously.
        </p>
      </div>

    <div className="px-4 py-8 md:px-8 lg:px-10">
        <h2 className="mb-3 font-mono text-xl font-semibold tracking-tight text-[var(--color-foreground)]">4. Start Building</h2>
        <p className="font-mono text-sm leading-relaxed text-[var(--color-muted)]">
          Your agent now references the installed skill during code generation. Prompt your
          agent normally — the skill&apos;s design rules, component patterns, and workflow
          conventions are applied automatically.
        </p>
      </div>
    </div>
  );
}
