export type DocNavGroup = {
  label: string;
  href?: string;
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
    href: "/docs",
    defaultOpen: true,
    items: [
      { label: "Getting Started", href: "/docs" },
      { label: "Skill Folder Structure", href: "/docs/skill-folder-structure" },
      { label: "What is ARCTIS?", href: "/docs/what-is-arctis" },
    ],
  },
  {
    label: "Themes",
    href: "/docs/themes",
    defaultOpen: true,
    items: [
      { label: "Prismatic Architecture", href: "/docs/themes/prismatic-architecture", slug: "prismatic-architecture" },
      { label: "Brutalist UI", href: "/docs/themes/brutalist-ui", slug: "brutalist-ui" },
      { label: "Retro Web", href: "/docs/themes/retro-web", slug: "retro-web" },
    ],
  },
  {
    label: "Add-ons",
    href: "/docs/addons",
    defaultOpen: true,
    items: [
      { label: "GSAP Scroll Reveal", href: "/docs/addons/gsap-scroll-reveal", slug: "gsap-scroll-reveal" },
      { label: "Pixi Particle Field", href: "/docs/addons/pixi-particle-field", slug: "pixi-particle-field" },
      { label: "Custom Cursor", href: "/docs/addons/custom-cursor", slug: "custom-cursor" },
    ],
  },
  {
    label: "Rules",
    href: "/docs/rules",
    defaultOpen: true,
    items: [
      { label: "Zero Radius", href: "/docs/rules/zero-radius", slug: "zero-radius" },
      { label: "Hairline Borders", href: "/docs/rules/hairline-borders", slug: "hairline-borders" },
      { label: "Strict Grid", href: "/docs/rules/strict-grid", slug: "strict-grid" },
      { label: "Restrained Accent", href: "/docs/rules/restrained-accent", slug: "restrained-accent" },
    ],
  },
  {
    label: "Agents",
    href: "/docs/agents",
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
