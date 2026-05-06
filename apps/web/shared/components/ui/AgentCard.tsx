import type { AgentInfo } from "@/shared/types/skills";
import { Badge } from "./Badge";

type AgentCardProps = {
  agent: AgentInfo;
  className?: string;
};

export function AgentCard({ agent, className }: AgentCardProps) {
  return (
    <div
      className={`group relative border border-[var(--color-border)] bg-[var(--color-panel)] p-6 transition-all hover:border-[var(--color-border-strong)] hover:bg-[var(--color-panel-strong)] ${className}`}
    >
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
        AGENT
      </div>
      <h3 className="mb-2 font-mono text-xl font-semibold text-[var(--color-foreground)]">
        {agent.name}
      </h3>
      <p className="mb-4 font-mono text-xs text-[var(--color-muted)]">
        Install ARCTIS skills directly into {agent.name} via the CLI. Skills are
        injected as reusable instruction packages your agent can reference during
        code generation.
      </p>
      <div className="flex items-center gap-2">
        <Badge variant="outline">.arctis</Badge>
        <Badge>SKILL.md</Badge>
      </div>
    </div>
  );
}
