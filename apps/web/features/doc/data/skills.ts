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
      {
        title: "Landing Page Hero",
        caption: "Large editorial hero with glow accent and CTAs",
        tags: ["Hero", "CTA", "Glow"],
      },
      {
        title: "Docs Layout",
        caption: "Three-column docs with sidebar, content, and TOC",
        tags: ["Sidebar", "TOC", "Grid"],
      },
      {
        title: "Skill Registry Grid",
        caption: "Bordered skill cards with metadata badges",
        tags: ["Grid", "Cards", "Badges"],
      },
      {
        title: "CTA Section",
        caption: "Final CTA with install command block",
        tags: ["CTA", "Command", "Glow"],
      },
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

  "minimal-saas": {
    slug: "minimal-saas",
    title: "Minimal SaaS",
    type: "theme",
    description:
      "Clean, conversion-optimized SaaS layouts with crisp spacing, restrained color, and product-led storytelling.",
    subtitle: "Breathing room for your product.",
    badges: ["Theme", "SaaS", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "Generous whitespace" },
      { label: "Typography-driven hierarchy" },
      { label: "Feature grid patterns" },
      { label: "Pricing table conventions" },
      { label: "CTA optimization rules" },
      { label: "Single accent color" },
    ],
    previews: [
      { title: "Hero Section", caption: "Clean hero with product screenshot", tags: ["Hero", "Product", "CTA"] },
      { title: "Feature Grid", caption: "3-column feature showcase with icons", tags: ["Grid", "Features", "Icons"] },
      { title: "Pricing Table", caption: "Comparison pricing with highlight column", tags: ["Pricing", "Table", "CTA"] },
      { title: "Testimonial", caption: "Quote block with attribution", tags: ["Quote", "Social", "Proof"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add minimal-saas --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add minimal-saas --agent opencode" },
      { agent: "Codex", command: "npx arctis add minimal-saas --agent codex" },
    ],
    allInstallCommand: "npx arctis add minimal-saas --all",
    folderStructure: [
      { name: "minimal-saas/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "examples/", type: "folder", children: [
          { name: "landing-page.md", type: "file" },
          { name: "pricing-page.md", type: "file" },
        ]},
        { name: "references/", type: "folder", children: [
          { name: "typography.md", type: "file" },
          { name: "cta-patterns.md", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# Minimal SaaS

## Core Rules
- Use generous whitespace as primary layout tool.
- Use typography to establish visual hierarchy.
- Use a single restrained accent color.
- Keep CTAs prominent but not aggressive.
- Use feature grids for product messaging.
- Keep navigation minimal and clean.

## Avoid
- Heavy decorative elements
- Multiple competing accent colors
- Overly dense layouts
- Aggressive marketing language`,
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

  "game-storefront": {
    slug: "game-storefront",
    title: "Game Storefront",
    type: "theme",
    description:
      "Dark, immersive game store layouts with hero trailers, achievement grids, and purchase-flow patterns optimized for gaming.",
    subtitle: "Built for discovery and purchase.",
    badges: ["Theme", "Gaming", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "Cinematic hero sections" },
      { label: "Achievement badge grids" },
      { label: "DLC/expansion cards" },
      { label: "Review summary widgets" },
      { label: "Purchase flow patterns" },
      { label: "Dark immersive backgrounds" },
    ],
    previews: [
      { title: "Hero Trailer", caption: "Full-width cinematic hero with trailer embed", tags: ["Hero", "Video", "Dark"] },
      { title: "Achievement Grid", caption: "Badge grid showing game achievements", tags: ["Grid", "Badges", "Achievement"] },
      { title: "DLC Cards", caption: "Expansion pack cards with pricing", tags: ["Cards", "DLC", "Pricing"] },
      { title: "Review Summary", caption: "Aggregated review scores and quotes", tags: ["Reviews", "Scores", "Quotes"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add game-storefront --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add game-storefront --agent opencode" },
      { agent: "Codex", command: "npx arctis add game-storefront --agent codex" },
    ],
    allInstallCommand: "npx arctis add game-storefront --all",
    folderStructure: [
      { name: "game-storefront/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "examples/", type: "folder", children: [
          { name: "game-detail-page.md", type: "file" },
          { name: "store-browse.md", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# Game Storefront

## Core Rules
- Use cinematic, full-width hero sections.
- Use achievement badge grids for game stats.
- Use DLC and expansion card layouts.
- Include review summary widgets.
- Design purchase flows with clear CTAs.
- Use dark, immersive backgrounds.

## Avoid
- Light backgrounds
- Minimalist SaaS aesthetics
- Small product imagery`,
  },

  // ADD-ONS
  "gsap-scroll-reveal": {
    slug: "gsap-scroll-reveal",
    title: "GSAP Scroll Reveal",
    type: "addon",
    description:
      "Scroll-triggered reveal animations using GSAP ScrollTrigger. Elements animate into view as the user scrolls.",
    subtitle: "Reveal content on scroll with precision.",
    badges: ["Add-on", "GSAP", "Animation", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "ScrollTrigger-based reveals" },
      { label: "Configurable stagger delays" },
      { label: "Directional entrances" },
      { label: "Scale + opacity combos" },
      { label: "Once vs repeat behavior" },
    ],
    previews: [
      { title: "Fade Up", caption: "Elements fade and slide up on scroll", tags: ["Fade", "Up", "Scroll"] },
      { title: "Stagger List", caption: "List items reveal with staggered delay", tags: ["Stagger", "List", "Delay"] },
      { title: "Scale In", caption: "Cards scale from 0.8 to 1 on reveal", tags: ["Scale", "Cards", "Entrance"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add gsap-scroll-reveal --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add gsap-scroll-reveal --agent opencode" },
      { agent: "Codex", command: "npx arctis add gsap-scroll-reveal --agent codex" },
    ],
    allInstallCommand: "npx arctis add gsap-scroll-reveal --all",
    folderStructure: [
      { name: "gsap-scroll-reveal/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "snippets/", type: "folder", children: [
          { name: "reveal-wrapper.tsx", type: "file" },
          { name: "stagger-list.tsx", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# GSAP Scroll Reveal

## Core Rules
- Use GSAP ScrollTrigger for all scroll-based reveals.
- Apply staggered delays to list items.
- Support directional entrances (up, down, left, right).
- Combine scale and opacity for smooth reveals.
- Respect prefers-reduced-motion.
- Keep durations under 600ms.`,
  },

  "pixi-particle-field": {
    slug: "pixi-particle-field",
    title: "Pixi.js Particle Field",
    type: "addon",
    description:
      "Interactive WebGL particle field backgrounds using Pixi.js. GPU-accelerated particles that respond to mouse movement.",
    subtitle: "WebGL particles that follow your cursor.",
    badges: ["Add-on", "Pixi.js", "WebGL", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "WebGL particle system" },
      { label: "Mouse-responsive motion" },
      { label: "Configurable particle count" },
      { label: "Color and opacity controls" },
      { label: "Background-only mode" },
    ],
    previews: [
      { title: "Particle Field", caption: "Background particles responding to cursor", tags: ["Particles", "Mouse", "WebGL"] },
      { title: "Connection Lines", caption: "Particles connected by proximity lines", tags: ["Lines", "Network", "Proximity"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add pixi-particle-field --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add pixi-particle-field --agent opencode" },
      { agent: "Codex", command: "npx arctis add pixi-particle-field --agent codex" },
    ],
    allInstallCommand: "npx arctis add pixi-particle-field --all",
    folderStructure: [
      { name: "pixi-particle-field/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "snippets/", type: "folder", children: [
          { name: "particle-field.tsx", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# Pixi.js Particle Field

## Core Rules
- Use Pixi.js for WebGL particle rendering.
- Particles respond to mouse position.
- Keep particle count configurable (default 150).
- Run as non-blocking background layer.
- Cleanup on unmount.`,
  },

  "custom-cursor": {
    slug: "custom-cursor",
    title: "Custom Cursor",
    type: "addon",
    description:
      "Custom cursor implementations including magnetic hover, text reveal cursors, and flair follower effects.",
    subtitle: "Cursor effects with personality.",
    badges: ["Add-on", "Cursor", "Interaction", "Claude Code", "OpenCode", "Codex"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "Magnetic hover effect" },
      { label: "Text reveal cursor" },
      { label: "Flair follower trail" },
      { label: "Cursor state management" },
      { label: "Touch device fallback" },
    ],
    previews: [
      { title: "Magnetic Hover", caption: "Cursor attracts to interactive elements", tags: ["Magnetic", "Hover", "Attract"] },
      { title: "Flair Trail", caption: "Particle trail follows cursor movement", tags: ["Trail", "Particles", "Motion"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add custom-cursor --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add custom-cursor --agent opencode" },
      { agent: "Codex", command: "npx arctis add custom-cursor --agent codex" },
    ],
    allInstallCommand: "npx arctis add custom-cursor --all",
    folderStructure: [
      { name: "custom-cursor/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
        { name: "snippets/", type: "folder", children: [
          { name: "cursor-container.tsx", type: "file" },
          { name: "flair-follower.tsx", type: "file" },
        ]},
      ]},
    ],
    skillMarkdown: `# Custom Cursor

## Core Rules
- Replace default cursor with custom implementation.
- Support magnetic hover on interactive elements.
- Include flair follower particle trail variant.
- Fall back to default cursor on touch devices.
- Keep cursor size between 20-40px.`,
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

  "hairline-borders": {
    slug: "hairline-borders",
    title: "Hairline Borders",
    type: "rule",
    description:
      "Use 1px semi-transparent borders as the primary visual separator between sections and components.",
    subtitle: "Thin lines. Clear separation.",
    badges: ["Rule", "Borders", "Grid"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "1px borders with 10-18% opacity" },
      { label: "Replace thick dividers" },
      { label: "Border-based visual separation" },
      { label: "Consistent border tokens" },
    ],
    previews: [
      { title: "Section Divider", caption: "Thin hairline between page sections", tags: ["Divider", "Hairline", "1px"] },
      { title: "Card Border", caption: "Card with 1px semi-transparent border", tags: ["Card", "Border", "Subtle"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add hairline-borders --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add hairline-borders --agent opencode" },
      { agent: "Codex", command: "npx arctis add hairline-borders --agent codex" },
    ],
    allInstallCommand: "npx arctis add hairline-borders --all",
    folderStructure: [
      { name: "hairline-borders/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
      ]},
    ],
    skillMarkdown: `# Hairline Borders

## Core Rule
- Use 1px borders with rgba(255,255,255,0.10-0.18) opacity.
- Replace heavy dividers and shadows with subtle hairline lines.
- Use consistent border color tokens across all components.

## When to apply
- Between sections, around cards, on inputs and buttons.`,
  },

  "strict-grid": {
    slug: "strict-grid",
    title: "Strict Grid",
    type: "rule",
    description:
      "Enforce a strict CSS Grid or flex layout system with consistent gaps and alignment. Every element sits on a defined grid.",
    subtitle: "Everything on the grid.",
    badges: ["Rule", "Grid", "Layout"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "Grid-based layout only" },
      { label: "Consistent gap tokens" },
      { label: "Aligned column system" },
      { label: "Responsive breakpoints" },
    ],
    previews: [
      { title: "Grid Layout", caption: "Strict 12-column grid overlay", tags: ["12-col", "Grid", "Align"] },
      { title: "Gap System", caption: "Consistent spacing between grid items", tags: ["Gap", "Spacing", "Token"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add strict-grid --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add strict-grid --agent opencode" },
      { agent: "Codex", command: "npx arctis add strict-grid --agent codex" },
    ],
    allInstallCommand: "npx arctis add strict-grid --all",
    folderStructure: [
      { name: "strict-grid/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
      ]},
    ],
    skillMarkdown: `# Strict Grid

## Core Rule
- Use CSS Grid for all layout.
- No absolute positioning unless absolutely necessary.
- Use consistent gap tokens: 4, 8, 16, 24, 32px.
- Define responsive breakpoints explicitly.`,
  },

  "restrained-accent": {
    slug: "restrained-accent",
    title: "Restrained Accent",
    type: "rule",
    description:
      "Limit accent color usage to 5-10% of visible interface elements. Accent should only appear on CTAs, badges, and active states.",
    subtitle: "Less yellow. More black.",
    badges: ["Rule", "Color", "Accent"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "Accent limited to 5-10%" },
      { label: "Only on CTAs and badges" },
      { label: "Never as background fill" },
      { label: "Neutral palette dominates" },
    ],
    previews: [
      { title: "Accent Usage", caption: "Yellow used only on CTA and badges", tags: ["Accent", "CTA", "Badge"] },
      { title: "Neutral UI", caption: "Interface with minimal accent color", tags: ["Neutral", "Minimal", "Restrained"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add restrained-accent --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add restrained-accent --agent opencode" },
      { agent: "Codex", command: "npx arctis add restrained-accent --agent codex" },
    ],
    allInstallCommand: "npx arctis add restrained-accent --all",
    folderStructure: [
      { name: "restrained-accent/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
      ]},
    ],
    skillMarkdown: `# Restrained Accent

## Core Rule
- Use accent color on 5-10% of visible elements max.
- Only on CTAs, badges, active states, links.
- Never use as background fill.
- Neutral grayscale palette dominates the UI.`,
  },

  "accessible-motion": {
    slug: "accessible-motion",
    title: "Accessible Motion",
    type: "rule",
    description:
      "Respect prefers-reduced-motion. Keep transitions under 200ms. Disable non-essential animations when reduced motion is set.",
    subtitle: "Motion that respects everyone.",
    badges: ["Rule", "Accessibility", "Motion"],
    agents: ["claude-code", "opencode", "codex"],
    features: [
      { label: "Respects prefers-reduced-motion" },
      { label: "Transitions under 200ms" },
      { label: "No flashing effects" },
      { label: "Linear/ease-out only" },
    ],
    previews: [
      { title: "Reduced Motion", caption: "Instant transitions when preference is set", tags: ["A11y", "Reduced", "Instant"] },
      { title: "Fast Transition", caption: "Sub-200ms hover transitions", tags: ["Fast", "200ms", "Hover"] },
    ],
    installCommands: [
      { agent: "Claude Code", command: "npx arctis add accessible-motion --agent claude-code" },
      { agent: "OpenCode", command: "npx arctis add accessible-motion --agent opencode" },
      { agent: "Codex", command: "npx arctis add accessible-motion --agent codex" },
    ],
    allInstallCommand: "npx arctis add accessible-motion --all",
    folderStructure: [
      { name: "accessible-motion/", type: "folder", children: [
        { name: "SKILL.md", type: "file" },
        { name: "arctis.json", type: "file" },
      ]},
    ],
    skillMarkdown: `# Accessible Motion

## Core Rule
- Check prefers-reduced-motion before animating.
- Keep all transitions under 200ms.
- Use linear or ease-out only. No spring/bounce.
- Never use flashing or strobing effects.`,
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
