export type ArctisSkillType = "theme" | "addon" | "rule" | "agent";

export type AgentTarget = "claude-code" | "opencode" | "codex";

export type SkillDocMeta = {
  title: string;
  slug: string;
  type: ArctisSkillType;
  description: string;
  subtitle?: string;
  badges: string[];
  features?: string[];
  previews?: {
    title: string;
    description: string;
    tags?: string[];
  }[];
  installCommands?: string[];
  folderStructure?: string;
  dependencies?: string[];
  conflictsWith?: string[];
  requires?: string[];
};
