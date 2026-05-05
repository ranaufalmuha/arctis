import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

export default function InstallationPage() {
  return (
    <div>
      <Section glowAccent>
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
          DOCUMENTATION
        </div>
        <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight">
          How to Install a Skill
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          Install ARCTIS skills into your agent with a single CLI command.
        </p>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          Prerequisites
        </h2>
        <div className="space-y-3">
          <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
            <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)]">
              1. Install the ARCTIS CLI
            </div>
            <CommandBlock command="npm install -g arctis" />
          </div>
          <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
            <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)]">
              2. Verify installation
            </div>
            <CommandBlock command="arctis --version" />
          </div>
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          Install Commands
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Install for a specific agent",
              cmd: "npx arctis add brutalist-ui --agent claude-code",
            },
            {
              title: "Install for all supported agents",
              cmd: "npx arctis add brutalist-ui --all",
            },
            {
              title: "Install multiple skills at once",
              cmd: "npx arctis add minimal-saas brutalist-ui --all",
            },
            {
              title: "List installed skills",
              cmd: "npx arctis list",
            },
            {
              title: "Remove a skill",
              cmd: "npx arctis remove brutalist-ui",
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="mb-2 font-mono text-xs text-[var(--color-muted)]">
                {item.title}
              </div>
              <CommandBlock command={item.cmd} />
            </div>
          ))}
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          Where Skills Are Installed
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
          <p>
            ARCTIS installs skills into your agent&apos;s configuration directory.
            The exact location depends on your agent:
          </p>
          <div className="space-y-3">
            {[
              {
                agent: "Claude Code",
                path: "~/.claude/skills/{skill-name}/",
              },
              {
                agent: "OpenCode",
                path: "~/.opencode/skills/{skill-name}/",
              },
              {
                agent: "Codex",
                path: "~/.codex/skills/{skill-name}/",
              },
            ].map((item) => (
              <div
                key={item.agent}
                className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4"
              >
                <div className="mb-1 font-mono text-sm font-semibold text-[var(--color-foreground)]">
                  {item.agent}
                </div>
                <div className="font-mono text-sm text-[var(--color-muted)]">
                  {item.path}
                </div>
              </div>
            ))}
          </div>
          <p>
            Your agent automatically discovers and loads these skills on
            startup. No additional configuration is needed.
          </p>
        </div>
      </Section>
    </div>
  );
}
