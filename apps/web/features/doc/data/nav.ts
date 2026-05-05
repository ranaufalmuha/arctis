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
      { label: "Minimal SaaS", href: "/docs/themes/minimal-saas", slug: "minimal-saas" },
      { label: "Retro Web", href: "/docs/themes/retro-web", slug: "retro-web" },
      { label: "Game Storefront", href: "/docs/themes/game-storefront", slug: "game-storefront" },
    ],
  },
  {
    label: "Add-ons",
    defaultOpen: true,
    items: [
      { label: "GSAP Scroll Reveal", href: "/docs/addons/gsap-scroll-reveal", slug: "gsap-scroll-reveal" },
      { label: "Pixi.js Particle Field", href: "/docs/addons/pixi-particle-field", slug: "pixi-particle-field" },
      { label: "Custom Cursor", href: "/docs/addons/custom-cursor", slug: "custom-cursor" },
      { label: "Shader Background", href: "/docs/addons/shader-background", slug: "shader-background" },
      { label: "Magnetic Button", href: "/docs/addons/magnetic-button", slug: "magnetic-button" },
      { label: "Page Transition", href: "/docs/addons/page-transition", slug: "page-transition" },
      { label: "Interactive Grid", href: "/docs/addons/interactive-grid", slug: "interactive-grid" },
    ],
  },
  {
    label: "Rules",
    defaultOpen: true,
    items: [
      { label: "Zero Radius", href: "/docs/rules/zero-radius", slug: "zero-radius" },
      { label: "Hairline Borders", href: "/docs/rules/hairline-borders", slug: "hairline-borders" },
      { label: "Strict Grid", href: "/docs/rules/strict-grid", slug: "strict-grid" },
      { label: "Restrained Accent", href: "/docs/rules/restrained-accent", slug: "restrained-accent" },
      { label: "Accessible Motion", href: "/docs/rules/accessible-motion", slug: "accessible-motion" },
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
  {
    label: "Contribute",
    defaultOpen: false,
    items: [
      { label: "Create a Skill", href: "/docs/contribute/create-skill" },
      { label: "Skill Format", href: "/docs/contribute/skill-format" },
      { label: "Review Checklist", href: "/docs/contribute/review-checklist" },
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
