import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

export default function AgentsPage() {
  return (
    <div>
      <Section glowAccent>
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
          DOCUMENTATION
        </div>
        <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight">
          Agent Setup
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          Configure each supported agent to work with ARCTIS skills.
        </p>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          Claude Code
        </h2>
        <p className="mb-4 text-base leading-relaxed text-[var(--color-muted)]">
          Claude Code loads skills from <code className="text-[var(--color-accent)]">~/.claude/skills/</code>.
          Install skills directly with the ARCTIS CLI:
        </p>
        <div className="space-y-4">
          <CommandBlock command="npx arctis add brutalist-ui --agent claude-code" />
          <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
            <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)]">
              Manual Setup
            </div>
            <p className="mb-3 text-sm leading-relaxed text-[var(--color-muted)]">
              If you prefer manual setup, clone the skill into your Claude Code
              skills directory:
            </p>
            <CommandBlock command="git clone https://github.com/arctis/skills/brutalist-ui ~/.claude/skills/brutalist-ui" />
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              Claude Code automatically scans this directory and loads any valid
              SKILL.md files it finds.
            </p>
          </div>
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          OpenCode
        </h2>
        <p className="mb-4 text-base leading-relaxed text-[var(--color-muted)]">
          OpenCode skills are loaded as workspace-level configurations. Install
          with the ARCTIS CLI or manually:
        </p>
        <div className="space-y-4">
          <CommandBlock command="npx arctis add brutalist-ui --agent opencode" />
          <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
            <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)]">
              Manual Setup
            </div>
            <p className="mb-3 text-sm leading-relaxed text-[var(--color-muted)]">
              Copy the skill package into your OpenCode config:
            </p>
            <CommandBlock command="cp -r brutalist-ui ~/.opencode/skills/brutalist-ui" />
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              OpenCode reads <code className="text-[var(--color-accent)]">~/.opencode/skills/</code> on
              startup and loads all discovered SKILL.md files.
            </p>
          </div>
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          Codex
        </h2>
        <p className="mb-4 text-base leading-relaxed text-[var(--color-muted)]">
          Codex imports skills as custom instruction sets applied per-project.
        </p>
        <div className="space-y-4">
          <CommandBlock command="npx arctis add brutalist-ui --agent codex" />
          <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
            <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)]">
              Manual Setup
            </div>
            <p className="mb-3 text-sm leading-relaxed text-[var(--color-muted)]">
              Copy the skill into your Codex directory and reference it in your
              project config:
            </p>
            <CommandBlock command="mkdir -p ~/.codex/skills && cp -r brutalist-ui ~/.codex/skills/" />
          </div>
        </div>
      </Section>
    </div>
  );
}
