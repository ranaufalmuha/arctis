import type { ArctisSkillType } from "./skills";

export type DocKind = "static" | "category" | "skill" | "agent";

export type BaseDocMeta = {
  title: string;
  slug: string;
  description: string;
  subtitle?: string;
  badges?: string[];
};

export type SkillDocMeta = BaseDocMeta & {
  type: ArctisSkillType;
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

export type ResolvedDocPage =
  | {
      kind: "static";
      href: string;
      metadata: BaseDocMeta;
      Content: React.ComponentType;
    }
  | {
      kind: "category";
      href: string;
      metadata: BaseDocMeta;
      items: Array<{
        title: string;
        href: string;
        description?: string;
        badges?: string[];
      }>;
    }
  | {
      kind: "skill";
      href: string;
      metadata: SkillDocMeta;
      Content: React.ComponentType;
      sourceMarkdown: string;
      sourceFilename: "theme.md" | "addon.md" | "rule.md";
    }
  | {
      kind: "agent";
      href: string;
      metadata: SkillDocMeta;
      Content: React.ComponentType;
    };
