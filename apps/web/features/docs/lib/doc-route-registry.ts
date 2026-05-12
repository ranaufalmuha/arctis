import type { ArctisSkillType } from "@/shared/types/skills";
import { readSourceMarkdown } from "./read-source-markdown";

type RouteEntry =
  | {
      kind: "static";
      content: () => Promise<{ default: React.ComponentType }>;
      metadata: () => Promise<{ metadata: { title: string; description: string; badges?: string[]; subtitle?: string } }>;
    }
  | {
      kind: "category";
      category: "themes" | "addons" | "rules" | "agents";
    }
  | {
      kind: "skill";
      type: ArctisSkillType;
      content: () => Promise<{ default: React.ComponentType }>;
      metadata: () => Promise<{
        metadata: {
          title: string;
          description: string;
          type: ArctisSkillType;
          features?: { label: string }[];
          previews?: { title: string; caption: string; tags: string[] }[];
          installCommands?: { agent: string; command: string }[];
          allInstallCommand?: string;
          folderStructure?: { name: string; type: "file" | "folder"; children?: { name: string; type: "file" | "folder"; children?: any[] }[] }[];
          skillMarkdown: string;
        };
      }>;
      sourcePath: string;
    }
  | {
      kind: "agent";
      content: () => Promise<{ default: React.ComponentType }>;
      metadata: () => Promise<{
        metadata: {
          title: string;
          description: string;
          type: "agent";
          features?: { label: string }[];
          previews?: { title: string; caption: string; tags: string[] }[];
          installCommands?: { agent: string; command: string }[];
          allInstallCommand?: string;
          folderStructure?: { name: string; type: "file" | "folder"; children?: { name: string; type: "file" | "folder"; children?: any[] }[] }[];
          skillMarkdown: string;
        };
      }>;
    };

export const docRouteRegistry: Record<string, RouteEntry> = {
  "/docs": {
    kind: "static",
    content: () => import("@/app/docs/content/index/content"),
    metadata: () => import("@/app/docs/content/index/metadata"),
  },
  "/docs/what-is-arctis": {
    kind: "static",
    content: () => import("@/app/docs/content/what-is-arctis/content"),
    metadata: () => import("@/app/docs/content/what-is-arctis/metadata"),
  },
  "/docs/skill-folder-structure": {
    kind: "static",
    content: () => import("@/app/docs/content/skill-folder-structure/content"),
    metadata: () => import("@/app/docs/content/skill-folder-structure/metadata"),
  },

  "/docs/themes": {
    kind: "category",
    category: "themes",
  },
  "/docs/themes/prismatic-architecture": {
    kind: "skill",
    type: "theme",
    content: () => import("@/app/docs/themes/prismatic-architecture/content"),
    metadata: () => import("@/app/docs/themes/prismatic-architecture/metadata"),
    sourcePath: "apps/web/app/docs/themes/prismatic-architecture/theme.md",
  },
  "/docs/themes/brutalist-ui": {
    kind: "skill",
    type: "theme",
    content: () => import("@/app/docs/themes/brutalist-ui/content"),
    metadata: () => import("@/app/docs/themes/brutalist-ui/metadata"),
    sourcePath: "apps/web/app/docs/themes/brutalist-ui/theme.md",
  },
  "/docs/themes/retro-web": {
    kind: "skill",
    type: "theme",
    content: () => import("@/app/docs/themes/retro-web/content"),
    metadata: () => import("@/app/docs/themes/retro-web/metadata"),
    sourcePath: "apps/web/app/docs/themes/retro-web/theme.md",
  },

  "/docs/addons": {
    kind: "category",
    category: "addons",
  },
  "/docs/addons/gsap-scroll-reveal": {
    kind: "skill",
    type: "addon",
    content: () => import("@/app/docs/addons/gsap-scroll-reveal/content"),
    metadata: () => import("@/app/docs/addons/gsap-scroll-reveal/metadata"),
    sourcePath: "apps/web/app/docs/addons/gsap-scroll-reveal/addon.md",
  },
  "/docs/addons/pixi-particle-field": {
    kind: "skill",
    type: "addon",
    content: () => import("@/app/docs/addons/pixi-particle-field/content"),
    metadata: () => import("@/app/docs/addons/pixi-particle-field/metadata"),
    sourcePath: "apps/web/app/docs/addons/pixi-particle-field/addon.md",
  },
  "/docs/addons/custom-cursor": {
    kind: "skill",
    type: "addon",
    content: () => import("@/app/docs/addons/custom-cursor/content"),
    metadata: () => import("@/app/docs/addons/custom-cursor/metadata"),
    sourcePath: "apps/web/app/docs/addons/custom-cursor/addon.md",
  },

  "/docs/rules": {
    kind: "category",
    category: "rules",
  },
  "/docs/rules/zero-radius": {
    kind: "skill",
    type: "rule",
    content: () => import("@/app/docs/rules/zero-radius/content"),
    metadata: () => import("@/app/docs/rules/zero-radius/metadata"),
    sourcePath: "apps/web/app/docs/rules/zero-radius/rule.md",
  },
  "/docs/rules/hairline-borders": {
    kind: "skill",
    type: "rule",
    content: () => import("@/app/docs/rules/hairline-borders/content"),
    metadata: () => import("@/app/docs/rules/hairline-borders/metadata"),
    sourcePath: "apps/web/app/docs/rules/hairline-borders/rule.md",
  },
  "/docs/rules/strict-grid": {
    kind: "skill",
    type: "rule",
    content: () => import("@/app/docs/rules/strict-grid/content"),
    metadata: () => import("@/app/docs/rules/strict-grid/metadata"),
    sourcePath: "apps/web/app/docs/rules/strict-grid/rule.md",
  },
  "/docs/rules/restrained-accent": {
    kind: "skill",
    type: "rule",
    content: () => import("@/app/docs/rules/restrained-accent/content"),
    metadata: () => import("@/app/docs/rules/restrained-accent/metadata"),
    sourcePath: "apps/web/app/docs/rules/restrained-accent/rule.md",
  },

  "/docs/agents": {
    kind: "category",
    category: "agents",
  },
  "/docs/agents/claude-code": {
    kind: "agent",
    content: () => import("@/app/docs/agents/claude-code/content"),
    metadata: () => import("@/app/docs/agents/claude-code/metadata"),
  },
  "/docs/agents/opencode": {
    kind: "agent",
    content: () => import("@/app/docs/agents/opencode/content"),
    metadata: () => import("@/app/docs/agents/opencode/metadata"),
  },
  "/docs/agents/codex": {
    kind: "agent",
    content: () => import("@/app/docs/agents/codex/content"),
    metadata: () => import("@/app/docs/agents/codex/metadata"),
  },
};

export const SOURCE_FILENAME: Record<"theme" | "addon" | "rule", "theme.md" | "addon.md" | "rule.md"> = {
  theme: "theme.md",
  addon: "addon.md",
  rule: "rule.md",
};

export function getDocRouteEntry(href: string): RouteEntry | undefined {
  return docRouteRegistry[href];
}

export function getCategoryItems(category: "themes" | "addons" | "rules" | "agents") {
  return Object.entries(docRouteRegistry)
    .filter(([href, entry]) => {
      if (entry.kind !== "skill" && entry.kind !== "agent") return false;
      const prefix = `/docs/${category}/`;
      return href.startsWith(prefix);
    })
    .map(([href]) => href);
}

export function getDocRouteAllPaths(): string[] {
  return Object.keys(docRouteRegistry);
}

export async function readSourceFile(entry: RouteEntry & { kind: "skill" }): Promise<string> {
  return readSourceMarkdown(entry.sourcePath);
}
