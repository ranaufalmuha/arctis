export type DocNavGroup = {
  label: string;
  items: DocNavItem[];
  defaultOpen?: boolean;
};

export type DocNavItem = {
  label: string;
  href: string;
  badge?: string;
  slug?: string;
  meta?: {
    type?: string;
    agents?: string[];
    frameworks?: string[];
    installCommand?: string;
  };
};

export const DOCS_NAV: DocNavGroup[] = [
  {
    label: "Introduction",
    defaultOpen: true,
    items: [
      { label: "Getting Started", href: "/docs" },
      { label: "What is ARCTIS?", href: "/docs/what-is-arctis" },
      { label: "What is SKILL.md?", href: "/docs/skill-md" },
    ],
  },
  {
    label: "Themes",
    defaultOpen: true,
    items: [
      { label: "Prismatic Architecture", href: "/docs/themes/prismatic-architecture", badge: "DEFAULT", slug: "prismatic-architecture" },
      { label: "Brutalist UI", href: "/docs/themes/brutalist-ui", slug: "brutalist-ui" },
      { label: "Retro Web", href: "/docs/themes/retro-web", slug: "retro-web" },
    ],
  },
  {
    label: "Add-ons",
    defaultOpen: true,
    items: [
      { label: "GSAP", href: "/docs/addons/gsap", slug: "gsap" },
      { label: "Pixi.js", href: "/docs/addons/pixi", slug: "pixi" },
      { label: "Shadcn", href: "/docs/addons/shadcn", slug: "shadcn" },
      { label: "Tailwind CSS", href: "/docs/addons/tailwind", slug: "tailwind" },
    ],
  },
  {
    label: "Rules",
    defaultOpen: true,
    items: [
      { label: "Zero Radius", href: "/docs/rules/zero-radius", slug: "zero-radius" },
    ],
  },
  {
    label: "Agents",
    defaultOpen: true,
    items: [
      { label: "Claude Code", href: "/docs/agents/claude-code", slug: "claude-code-agent" },
      { label: "OpenCode", href: "/docs/agents/opencode", slug: "opencode-agent" },
      { label: "Codex", href: "/docs/agents/codex", slug: "codex-agent" },
    ],
  },
];

export function getFlatDocsList(): DocNavItem[] {
  return DOCS_NAV.flatMap((group) => group.items);
}

export function getDocByHref(href: string): DocNavItem | undefined {
  return getFlatDocsList().find((item) => item.href === href);
}

export function getPrevNext(href: string): {
  prev: DocNavItem | null;
  next: DocNavItem | null;
} {
  const flat = getFlatDocsList();
  const index = flat.findIndex((item) => item.href === href);
  return {
    prev: index > 0 ? (flat[index - 1] ?? null) : null,
    next: index < flat.length - 1 ? (flat[index + 1] ?? null) : null,
  };
}
