export const metadata = {
  title: "Prismatic Architecture",
  description: "A sharp, prismatic theme for AI-generated interfaces with zero-radius geometry, hard borders, restrained glow, and technical typography.",
  type: "theme" as const,
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
    { name: "prismatic-architecture/", type: "folder" as const, children: [
      { name: "SKILL.md", type: "file" as const },
      { name: "arctis.json", type: "file" as const },
      { name: "examples/", type: "folder" as const, children: [
        { name: "landing-page.md", type: "file" as const },
        { name: "docs-layout.md", type: "file" as const },
        { name: "registry-grid.md", type: "file" as const },
      ]},
      { name: "references/", type: "folder" as const, children: [
        { name: "visual-rules.md", type: "file" as const },
        { name: "typography.md", type: "file" as const },
        { name: "motion.md", type: "file" as const },
      ]},
      { name: "snippets/", type: "folder" as const, children: [
        { name: "background.tsx", type: "file" as const },
        { name: "grid-panel.tsx", type: "file" as const },
      ]},
    ]},
  ],
  skillMarkdown: "# Prismatic Architecture\n\nUse this skill when the user wants a sharp, premium, technical interface with zero-radius geometry, hard borders, subtle glow, and restrained accent color.\n\n## Core Rules\n\n- Use black and white as the dominant palette.\n- Use #ffeb50 only as a restrained accent (5-10%).\n- Use zero border-radius everywhere.\n- Use hard 1px borders and strict grid layouts.\n- Use monospace typography for labels, metadata, and command blocks.\n- Use subtle radial glow behind hero or important panels.\n- Use fast, precise, linear transitions.\n\n## Avoid\n\n- Rounded cards\n- Playful SaaS gradients\n- Overuse of yellow\n- Soft bubbly components\n- Slow bouncy animations",
};
