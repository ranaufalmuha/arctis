export const metadata = {
  title: "Brutalist UI",
  description: "Raw, structural, high-contrast interfaces with strict grids, hard geometry, and unapologetic visual hierarchy.",
  type: "theme" as const,
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
    { name: "brutalist-ui/", type: "folder" as const, children: [
      { name: "page.tsx", type: "file" as const },
      { name: "content.mdx", type: "file" as const },
      { name: "theme.md", type: "file" as const },
      { name: "metadata.ts", type: "file" as const },
      { name: "references/", type: "folder" as const, children: [
        { name: "grid-system.md", type: "file" as const },
        { name: "typography.md", type: "file" as const },
      ]},
      { name: "snippets/", type: "folder" as const, children: [] },
    ]},
  ],
  skillMarkdown: "# Brutalist UI\n\n## Core Rules\n- Use strict modular grid systems.\n- Use hard 90-degree geometry everywhere.\n- Use monospace as primary typeface.\n- Use maximum contrast: pure black/white.\n- Expose structural elements as design.\n- Never use gradients or soft shadows.\n\n## Avoid\n- Rounded corners\n- Drop shadows\n- Color gradients\n- Decorative elements",
};
