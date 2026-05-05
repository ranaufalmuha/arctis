export type AgentId = "claude-code" | "opencode" | "codex";

export type AgentInfo = {
  id: AgentId;
  name: string;
  shortName: string;
  installLabel: string;
};

export type SkillCategory =
  | "design-style"
  | "layout-pattern"
  | "industry-template"
  | "interaction"
  | "motion";

export type Skill = {
  slug: string;
  name: string;
  category: SkillCategory;
  description: string;
  longDescription: string;
  agents: AgentId[];
  frameworks: string[];
  installCommand: string;
  bestFor: string[];
  notGoodFor: string[];
  examplePrompt: string;
};

export const CATEGORY_LABELS: Record<SkillCategory, string> = {
  "design-style": "Design Style",
  "layout-pattern": "Layout Pattern",
  "industry-template": "Industry Template",
  interaction: "Interaction",
  motion: "Motion",
};

export const AGENTS: Record<AgentId, AgentInfo> = {
  "claude-code": {
    id: "claude-code",
    name: "Claude Code",
    shortName: "Claude",
    installLabel: "claude-code",
  },
  opencode: {
    id: "opencode",
    name: "OpenCode",
    shortName: "OpenCode",
    installLabel: "opencode",
  },
  codex: {
    id: "codex",
    name: "Codex",
    shortName: "Codex",
    installLabel: "codex",
  },
};
