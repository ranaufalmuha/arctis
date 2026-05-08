export type AgentTarget = "claude-code" | "opencode" | "codex";

export const AGENT_TARGETS: Record<
  AgentTarget,
  { label: string; installPath: string }
> = {
  "claude-code": {
    label: "Claude Code",
    installPath: ".claude/skills/arctis",
  },
  opencode: {
    label: "OpenCode",
    installPath: ".opencode/skills/arctis",
  },
  codex: {
    label: "Codex",
    installPath: ".agents/skills/arctis",
  },
};
