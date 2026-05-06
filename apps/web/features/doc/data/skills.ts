export type SkillType = "theme" | "addon" | "rule" | "agent" | "guide";

export type PreviewItem = {
  title: string;
  caption: string;
  tags: string[];
};

export type FeatureItem = {
  label: string;
};

export type InstallCommand = {
  agent: string;
  command: string;
};

export type FolderNode = {
  name: string;
  type: "file" | "folder";
  children?: FolderNode[];
};

export type SkillDoc = {
  slug: string;
  title: string;
  type: SkillType;
  description: string;
  subtitle: string;
  badges: string[];
  agents: string[];
  features: FeatureItem[];
  previews: PreviewItem[];
  installCommands: InstallCommand[];
  allInstallCommand: string;
  folderStructure: FolderNode[];
  skillMarkdown: string;
};

export const SKILL_DOCS: Record<string, SkillDoc> = {
  // THEMES
  "prismatic-architecture": {
    slug: "prismatic-architecture",
    title: "Prismatic Architecture",
    type: "theme",
    description:
      "A sharp, prismatic theme for AI-generated interfaces with zero-radius geometry, hard borders, restrained glow, and technical typography.",
    subtitle: "Where fluid motion meets brutalist precision.",
    badges: ["Theme", "Zero Radius", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "Zero-radius layout" },
      { label: "Hard glass panels" },
      { label: "Hairline grid borders" },
      { label: "Monospace metadata" },
      { label: "Restrained #ffeb50 accent" },
      { label: "Fast linear motion" },
    ],
    previews: [
      { title: "Landing Page Hero", caption: "Large editorial hero with glow accent and CTAs", tags: ["Hero", "CTA", "Glow"] },
      { title: "Docs Layout", caption: "Three-column docs with sidebar, content, and TOC", tags: ["Sidebar", "TOC", "Grid"] },
      { title: "Skill Registry Grid", caption: "Bordered skill cards with metadata badges", tags: ["Grid", "Cards", "Badges"] },
      { title: "CTA Section", caption: "Final CTA with install command block", tags: ["CTA", "Command", "Glow"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add prismatic-architecture --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add prismatic-architecture --agent opencode" },
      { agent: "Codex", command: "npx arctis add prismatic-architecture --agent codex" },
    ],
    allInstallCommand: "npx arctis add prismatic-architecture --all",
    folderStructure: [
      { name: "prismatic-architecture/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "examples/", type: "folder", children: [
          { name: "landing-page.md", type: "file" },
          { name: "docs-layout.md", type: "file" },
          { name: "registry-grid.md", type: "file" },
        ]},
        { name: "references/", type: "folder", children: [
          { name: "visual-rules.md", type: "file" },
          { name: "typography.md", type: "file" },
          { name: "motion.md", type: "file" },
        ]},
        { name: "snippets/", type: "folder", children: [
          { name: "background.tsx", type: "file" },
          { name: "grid-panel.tsx", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# Prismatic Architecture

Use this skill when the user wants a sharp, premium, technical interface with zero-radius geometry, hard borders, subtle glow, and restrained accent color.

## Core Rules

- Use black and white as the dominant palette.
- Use #ffeb50 only as a restrained accent (5-10%).
- Use zero border-radius everywhere.
- Use hard 1px borders and strict grid layouts.
- Use monospace typography for labels, metadata, and command blocks.
- Use subtle radial glow behind hero or important panels.
- Use fast, precise, linear transitions.

## Avoid

- Rounded cards
- Playful SaaS gradients
- Overuse of yellow
- Soft bubbly components
- Slow bouncy animations`,
  },

  "brutalist-ui": {
    slug: "brutalist-ui",
    title: "Brutalist UI",
    type: "theme",
    description:
      "Raw, structural, high-contrast interfaces with strict grids, hard geometry, and unapologetic visual hierarchy.",
    subtitle: "No soft corners. No gradients. No fluff.",
    badges: ["Theme", "High Contrast", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "Strict modular grid" },
      { label: "Hard-edged containers" },
      { label: "Monospace-dominant typography" },
      { label: "Maximum contrast black/white" },
      { label: "Exposed raw structure" },
      { label: "Zero soft shadows" },
    ],
    previews: [
      { title: "Dashboard Grid", caption: "Dense data grid with monospace labels", tags: ["Grid", "Data", "Mono"] },
      { title: "Content Block", caption: "Raw structural content panel", tags: ["Panel", "Raw", "Contrast"] },
      { title: "Navigation Bar", caption: "Strict horizontal nav with hard dividers", tags: ["Nav", "Dividers", "Mono"] },
      { title: "Stat Card", caption: "Number-heavy stat display with minimal chrome", tags: ["Stats", "Numbers", "Mono"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add brutalist-ui --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add brutalist-ui --agent opencode" },
      { agent: "Codex", command: "npx arctis add brutalist-ui --agent codex" },
    ],
    allInstallCommand: "npx arctis add brutalist-ui --all",
    folderStructure: [
      { name: "brutalist-ui/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "examples/", type: "folder", children: [
          { name: "dashboard.md", type: "file" },
          { name: "content-page.md", type: "file" },
        ]},
        { name: "references/", type: "folder", children: [
          { name: "grid-system.md", type: "file" },
          { name: "typography.md", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# Brutalist UI

## Core Rules
- Use strict modular grid systems.
- Use hard 90-degree geometry everywhere.
- Use monospace as primary typeface.
- Use maximum contrast: pure black/white.
- Expose structural elements as design.
- Never use gradients or soft shadows.

## Avoid
- Rounded corners
- Drop shadows
- Color gradients
- Decorative elements`,
  },

  "retro-web": {
    slug: "retro-web",
    title: "Retro Web",
    type: "theme",
    description:
      "Y2K-era web aesthetics with pixel fonts, scanlines, terminal vibes, and nostalgic UI patterns from the early internet.",
    subtitle: "GeoCities meets neobrutalism.",
    badges: ["Theme", "Pixel", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "Pixel font stacks" },
      { label: "Scanline overlays" },
      { label: "Terminal chrome" },
      { label: "8-bit decorative borders" },
      { label: "Neon-on-black palettes" },
      { label: "Visitor counter patterns" },
    ],
    previews: [
      { title: "Blog Layout", caption: "Y2K blog with pixel font and scanlines", tags: ["Blog", "Pixel", "Scanline"] },
      { title: "Terminal Window", caption: "Terminal-inspired content window", tags: ["Terminal", "Window", "Green"] },
      { title: "Navigation Bar", caption: "8-bit styled nav with decorative borders", tags: ["Nav", "8-bit", "Borders"] },
      { title: "Footer Block", caption: "Retro footer with visitor counter", tags: ["Footer", "Counter", "Badges"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add retro-web --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add retro-web --agent opencode" },
      { agent: "Codex", command: "npx arctis add retro-web --agent codex" },
    ],
    allInstallCommand: "npx arctis add retro-web --all",
    folderStructure: [
      { name: "retro-web/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "examples/", type: "folder", children: [
          { name: "blog.md", type: "file" },
          { name: "portfolio.md", type: "file" },
        ]},
        { name: "references/", type: "folder", children: [
          { name: "fonts.md", type: "file" },
          { name: "effects.md", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# Retro Web

## Core Rules
- Use pixel/bitmap font stacks for headings and labels.
- Add scanline overlay effects using CSS.
- Use terminal-inspired window chrome.
- Use 8-bit decorative borders and dividers.
- Use neon-on-black or CRT green-on-black palettes.
- Include retro web elements like visitor counters.

## Avoid
- Modern design trends
- Smooth gradients
- Rounded corners
- Minimalist whitespace`,
  },

  // ADD-ONS
  "gsap": {
    slug: "gsap",
    title: "GSAP",
    type: "addon",
    description:
      "Professional-grade animation library with scroll-triggered reveals, stagger effects, timelines, and high-performance transforms.",
    subtitle: "Scroll-triggered animation toolkit.",
    badges: ["Add-on", "GSAP", "Animation", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "ScrollTrigger reveals" },
      { label: "Stagger animations" },
      { label: "Timeline sequences" },
      { label: "Configurable easing" },
      { label: "Reduced-motion support" },
    ],
    previews: [
      { title: "Scroll Reveal", caption: "Elements fade and slide up on scroll", tags: ["Scroll", "Reveal", "Fade"] },
      { title: "Stagger Grid", caption: "Cards stagger in with sequential delay", tags: ["Stagger", "Grid", "Cards"] },
      { title: "Parallax Section", caption: "Layered parallax on scroll", tags: ["Parallax", "Depth", "Scroll"] },
      { title: "Timeline Sequence", caption: "Chained animation timeline", tags: ["Timeline", "Sequence", "Chain"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add gsap --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add gsap --agent opencode" },
      { agent: "Codex", command: "npx arctis add gsap --agent codex" },
    ],
    allInstallCommand: "npx arctis add gsap --all",
    folderStructure: [
      { name: "gsap/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "snippets/", type: "folder", children: [
          { name: "scroll-reveal.tsx", type: "file" },
          { name: "stagger-list.tsx", type: "file" },
          { name: "timeline.tsx", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# GSAP

## Core Rules
- Use GSAP for all animation sequences.
- Use ScrollTrigger for scroll-based reveals.
- Apply staggered delays to list items (0.05-0.1s).
- Use power2.out or power3.out for smooth easing.
- Respect prefers-reduced-motion.
- Keep durations between 300-600ms.

## Avoid
- Long animations over 1 second
- Bounce or elastic easing
- Animating layout-triggering properties`,
  },

  "pixi": {
    slug: "pixi",
    title: "Pixi.js",
    type: "addon",
    description:
      "WebGL rendering engine for particle systems, shader backgrounds, and high-performance interactive graphics.",
    subtitle: "GPU-accelerated WebGL rendering.",
    badges: ["Add-on", "Pixi.js", "WebGL", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "WebGL particle system" },
      { label: "Mouse-responsive interaction" },
      { label: "Shader-based backgrounds" },
      { label: "Configurable particle count" },
      { label: "GPU-accelerated rendering" },
    ],
    previews: [
      { title: "Particle Field", caption: "Interactive particle background", tags: ["Particles", "WebGL", "Mouse"] },
      { title: "Shader Gradient", caption: "Animated gradient background", tags: ["Shader", "Gradient", "Animate"] },
      { title: "Connection Mesh", caption: "Proximity-based connection lines", tags: ["Lines", "Network", "Mesh"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add pixi --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add pixi --agent opencode" },
      { agent: "Codex", command: "npx arctis add pixi --agent codex" },
    ],
    allInstallCommand: "npx arctis add pixi --all",
    folderStructure: [
      { name: "pixi/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "snippets/", type: "folder", children: [
          { name: "particle-field.tsx", type: "file" },
          { name: "shader-bg.tsx", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# Pixi.js

## Core Rules
- Use Pixi.js for WebGL rendering in React.
- Initialize application in useEffect with cleanup.
- Particles respond to mouse position.
- Keep particle count configurable (default 150).
- Run as non-blocking background layer.
- Use requestAnimationFrame for smooth rendering.

## Avoid
- Excessive particle count (>500)
- Complex physics without throttling
- Blocking the main thread`,
  },

  "shadcn": {
    slug: "shadcn",
    title: "Shadcn",
    type: "addon",
    description:
      "Component library integration for buttons, dialogs, forms, dropdowns, and navigation — built on Radix primitives with Tailwind styling.",
    subtitle: "Accessible component primitives.",
    badges: ["Add-on", "Shadcn", "Components", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "Button variants and sizes" },
      { label: "Dialog and sheet overlays" },
      { label: "Form inputs and validation" },
      { label: "Dropdown menus" },
      { label: "Navigation components" },
    ],
    previews: [
      { title: "Button Group", caption: "Primary, secondary, ghost variants", tags: ["Button", "Variant", "Group"] },
      { title: "Dialog Modal", caption: "Overlay dialog with form content", tags: ["Dialog", "Modal", "Form"] },
      { title: "Dropdown Menu", caption: "Context menu with icon items", tags: ["Dropdown", "Menu", "Context"] },
      { title: "Form Layout", caption: "Input group with validation states", tags: ["Form", "Input", "Validation"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add shadcn --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add shadcn --agent opencode" },
      { agent: "Codex", command: "npx arctis add shadcn --agent codex" },
    ],
    allInstallCommand: "npx arctis add shadcn --all",
    folderStructure: [
      { name: "shadcn/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "snippets/", type: "folder", children: [
          { name: "button.tsx", type: "file" },
          { name: "dialog.tsx", type: "file" },
          { name: "form.tsx", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# Shadcn

## Core Rules
- Use shadcn/ui components as the base component library.
- Install components via npx shadcn-ui add.
- Customize with Tailwind classes and CSS variables.
- Follow shadcn's className merging patterns.
- Support light and dark mode with CSS variables.
- Prefer Radix primitives for complex interactions.

## Avoid
- Custom rebuilding of existing components
- Inconsistent styling between shadcn and custom
- Ignoring accessibility attributes`,
  },

  "tailwind": {
    slug: "tailwind",
    title: "Tailwind CSS",
    type: "addon",
    description:
      "Utility-first CSS framework with design tokens, responsive utilities, dark mode, and a comprehensive set of spacing, color, and typography classes.",
    subtitle: "Design tokens as utility classes.",
    badges: ["Add-on", "Tailwind", "CSS", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "Utility-first class system" },
      { label: "Design token configuration" },
      { label: "Responsive breakpoints" },
      { label: "Dark mode support" },
      { label: "Custom CSS variable mapping" },
    ],
    previews: [
      { title: "Token System", caption: "CSS variables mapped to Tailwind theme", tags: ["Tokens", "CSS", "Theme"] },
      { title: "Responsive Grid", caption: "Breakpoint-aware grid layout", tags: ["Grid", "Responsive", "Breakpoint"] },
      { title: "Dark Mode", caption: "Dark mode with CSS variable overrides", tags: ["Dark", "Mode", "Variables"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add tailwind --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add tailwind --agent opencode" },
      { agent: "Codex", command: "npx arctis add tailwind --agent codex" },
    ],
    allInstallCommand: "npx arctis add tailwind --all",
    folderStructure: [
      { name: "tailwind/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "references/", type: "folder", children: [
          { name: "tokens.md", type: "file" },
          { name: "config.md", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# Tailwind CSS

## Core Rules
- Use Tailwind utility classes for all styling.
- Define design tokens via CSS variables.
- Map CSS variables to Tailwind's @theme block.
- Use responsive prefixes consistently (sm:, md:, lg:, xl:).
- Support dark mode with class-based toggling.
- Configure spacing scale: 4, 8, 16, 24, 32, 48, 64.

## Avoid
- Mixing inline styles with utility classes
- Custom CSS when a utility exists
- Hardcoded color values`,
  },

  // RULES
  "zero-radius": {
    slug: "zero-radius",
    title: "Zero Radius",
    type: "rule",
    description:
      "Enforce zero border-radius across all UI elements. Every card, button, input, and container uses sharp 90-degree corners.",
    subtitle: "No rounded corners. Ever.",
    badges: ["Rule", "Geometry", "Sharp"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "No border-radius on any element" },
      { label: "Sharp 90-degree corners everywhere" },
      { label: "Extends to modals and dropdowns" },
      { label: "Works with any theme" },
    ],
    previews: [
      { title: "Sharp Card", caption: "Card with zero-radius borders", tags: ["Card", "Sharp", "Zero"] },
      { title: "Sharp Button", caption: "Rectangular button with hard edges", tags: ["Button", "Rect", "Hard"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add zero-radius --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add zero-radius --agent opencode" },
      { agent: "Codex", command: "npx arctis add zero-radius --agent codex" },
    ],
    allInstallCommand: "npx arctis add zero-radius --all",
    folderStructure: [
      { name: "zero-radius/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
      ]},
    ],
    skillMarkdown: `# Zero Radius

## Core Rule
- Set border-radius: 0 on all elements globally.
- Use \`* { border-radius: 0 !important; }\` as base reset.
- Override only when a third-party component requires it.

## When to apply
- Always. This is a global visual constraint.`,
  },

  // AGENTS
  "claude-code-agent": {
    slug: "claude-code-agent",
    title: "Claude Code",
    type: "agent",
    description:
      "Anthropic's agentic coding tool. ARCTIS skills are injected as project-level instructions and referenced during generation.",
    subtitle: "Skills as project instructions.",
    badges: ["Agent", "Anthropic", "Claude"],
    agents: ["claude-code"],
    features: [
      { label: "Skills auto-loaded from ~/.claude/skills/" },
      { label: "Project-level instruction injection" },
      { label: "SKILL.md referenced during generation" },
      { label: "Persists across sessions" },
    ],
    previews: [
      { title: "Install Path", caption: "~/.claude/skills/{skill-name}/", tags: ["Path", "Config", "Install"] },
      { title: "Config Format", caption: "Skills loaded as .claude/skills entries", tags: ["Config", "JSON", "Skills"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add <skill> --agent claude-code" },
    ],
    allInstallCommand: "npx arctis add <skill> --agent claude-code",
    folderStructure: [
      { name: "~/.claude/skills/", type: "folder", children: [
        { name: "skill-name/", type: "folder", children: [
          { name: "SKILL.md", type: "file" },
          { name: "examples/", type: "folder" },
          { name: "references/", type: "folder" },
        ]},
      ]},
    ],
    skillMarkdown: `# Claude Code Integration

Skills installed at: ~/.claude/skills/{skill-name}/

Claude Code auto-discovers SKILL.md files in this directory.
No additional configuration needed.`,
  },

  "opencode-agent": {
    slug: "opencode-agent",
    title: "OpenCode",
    type: "agent",
    description:
      "Open-source AI coding agent. Skills are loaded as workspace-level configuration files and applied per-project.",
    subtitle: "Workspace-level skill loading.",
    badges: ["Agent", "Open-Source", "OpenCode"],
    agents: ["opencode"],
    features: [
      { label: "Skills loaded from ~/.opencode/skills/" },
      { label: "Workspace-level configuration" },
      { label: "Per-project skill application" },
      { label: "Open-source compatible" },
    ],
    previews: [
      { title: "Install Path", caption: "~/.opencode/skills/{skill-name}/", tags: ["Path", "Config", "Install"] },
      { title: "Config Format", caption: "Skills as workspace config entries", tags: ["Config", "Workspace", "Skills"] },
    ],
    installCommands: [
      { agent: "OpenCode", command: "npx arctis add <skill> --agent opencode" },
    ],
    allInstallCommand: "npx arctis add <skill> --agent opencode",
    folderStructure: [
      { name: "~/.opencode/skills/", type: "folder", children: [
        { name: "skill-name/", type: "folder", children: [
          { name: "SKILL.md", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# OpenCode Integration

Skills installed at: ~/.opencode/skills/{skill-name}/

OpenCode reads skills on startup from this directory.
Supports per-project and global skill loading.`,
  },

  "codex-agent": {
    slug: "codex-agent",
    title: "Codex",
    type: "agent",
    description:
      "OpenAI's coding agent. Skills are imported as custom instruction sets and applied per-project.",
    subtitle: "Custom instruction set import.",
    badges: ["Agent", "OpenAI", "Codex"],
    agents: ["codex"],
    features: [
      { label: "Skills imported to ~/.codex/skills/" },
      { label: "Custom instruction sets" },
      { label: "Per-project application" },
      { label: "Instruction set composition" },
    ],
    previews: [
      { title: "Install Path", caption: "~/.codex/skills/{skill-name}/", tags: ["Path", "Config", "Install"] },
      { title: "Config Format", caption: "Skills as custom instruction sets", tags: ["Config", "Instructions", "Skills"] },
    ],
    installCommands: [
      { agent: "Codex", command: "npx arctis add <skill> --agent codex" },
    ],
    allInstallCommand: "npx arctis add <skill> --agent codex",
    folderStructure: [
      { name: "~/.codex/skills/", type: "folder", children: [
        { name: "skill-name/", type: "folder", children: [
          { name: "SKILL.md", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# Codex Integration

Skills installed at: ~/.codex/skills/{skill-name}/

Codex imports skills as custom instruction sets.
Applied per-project via configuration.`,
  },
};

export function getSkillDoc(slug: string): SkillDoc | undefined {
  return SKILL_DOCS[slug];
}
