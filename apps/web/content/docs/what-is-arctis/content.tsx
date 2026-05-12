import { Section } from "@/shared/components/ui/Section";
import { Badge } from "@/shared/components/ui/Badge";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

export default function Content() {
  return (
    <div className="py-8">
      <div className="mb-8 border-b border-[var(--color-border)] pb-8">
        <div className="mb-4 flex items-center gap-2">
          <Badge variant="accent">DOCS</Badge>
          <Badge>INTRODUCTION</Badge>
        </div>
        <h1 className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl text-[var(--color-foreground)]">
          What is ARCTIS?
        </h1>
        <p className="font-mono text-base leading-relaxed text-[var(--color-muted)]">
          ARCTIS is an open-source skill registry for AI coding agents. It packages design styles, frontend patterns, and project workflows into a single composed SKILL.md for Claude Code, OpenCode, and Codex.
        </p>
      </div>
      <Section>
        <h2 className="mb-4 font-mono text-xl font-semibold tracking-tight text-[var(--color-foreground)]">The Problem</h2>
        <p className="mb-4 font-mono text-sm leading-relaxed text-[var(--color-muted)]">
          AI coding agents lack taste. Given the same prompt, they produce generic output. Components are not enough anymore — agents need design taste, product patterns, and workflow memory.
        </p>
        <h2 className="mb-4 font-mono text-xl font-semibold tracking-tight text-[var(--color-foreground)]">The Solution</h2>
        <p className="mb-4 font-mono text-sm leading-relaxed text-[var(--color-muted)]">
          ARCTIS skills are structured, portable instruction packages. Install with one command and your agent immediately produces code with consistent design taste.
        </p>
        <CommandBlock command="npx arctis add prismatic-architecture --all" />
      </Section>
    </div>
  );
}
