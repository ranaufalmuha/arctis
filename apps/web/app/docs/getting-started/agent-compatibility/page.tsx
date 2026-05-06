import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

export default function Page() {
  return (
    <DocPageShell href="/docs/getting-started/agent-compatibility" title="Agent Compatibility">
      <Section>
        <p className="max-w-2xl font-mono text-lg leading-relaxed text-[var(--color-muted)]">
          ARCTIS skills are agent-agnostic. A single skill package works across
          Claude Code, OpenCode, and Codex without modification. Each agent
          loads skills from its own configuration directory, and the ARCTIS CLI
          handles installation for any target.
        </p>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Supported Agents
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {[
            {
              agent: "Claude Code",
              installPath: "~/.claude/skills/",
              configLocation: "~/.claude/CLAUDE.md",
              loading: "Scans the skills directory on startup and injects SKILL.md content as project-level instructions.",
            },
            {
              agent: "OpenCode",
              installPath: "~/.opencode/skills/",
              configLocation: "~/.opencode/config.json",
              loading: "Discovers skill packages in the workspace config and loads SKILL.md files as workspace-level rules.",
            },
            {
              agent: "Codex",
              installPath: "~/.codex/skills/",
              configLocation: "~/.codex/config.yaml",
              loading: "Imports skills as custom instruction sets applied per-project through the Codex configuration layer.",
            },
          ].map((item) => (
            <div
              key={item.agent}
              className="border border-[var(--color-border)] bg-[var(--color-panel)] p-6"
            >
              <h3 className="mb-4 font-mono text-lg font-semibold text-[var(--color-foreground)]">
                {item.agent}
              </h3>
              <div className="space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
                <div>
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)]">
                    Install Path
                  </div>
                  <code className="font-mono text-sm text-[var(--color-foreground)]">
                    {item.installPath}
                  </code>
                </div>
                <div>
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)]">
                    Config Location
                  </div>
                  <code className="font-mono text-sm text-[var(--color-foreground)]">
                    {item.configLocation}
                  </code>
                </div>
                <div>
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)]">
                    How Skills Are Loaded
                  </div>
                  <p>{item.loading}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Install Across All Agents
        </h2>
        <p className="mb-4 text-base leading-relaxed text-[var(--color-muted)]">
          Use the <code className="text-[var(--color-accent)]">--all</code> flag
          to install a skill into every supported agent simultaneously:
        </p>
        <CommandBlock command="npx arctis add prismatic-architecture --all" />
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
          This copies the skill package into each agent&apos;s skills directory
          and registers it in the corresponding configuration file. The skill
          becomes immediately available on the next agent session.
        </p>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Per-Agent Installation
        </h2>
        <p className="mb-4 text-base leading-relaxed text-[var(--color-muted)]">
          You can also target a specific agent if you only use one:
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Claude Code only",
              cmd: "npx arctis add prismatic-architecture --agent claude-code",
            },
            {
              label: "OpenCode only",
              cmd: "npx arctis add prismatic-architecture --agent opencode",
            },
            {
              label: "Codex only",
              cmd: "npx arctis add prismatic-architecture --agent codex",
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-2 font-mono text-xs text-[var(--color-muted)]">
                {item.label}
              </div>
              <CommandBlock command={item.cmd} />
            </div>
          ))}
        </div>
      </Section>
    </DocPageShell>
  );
}
