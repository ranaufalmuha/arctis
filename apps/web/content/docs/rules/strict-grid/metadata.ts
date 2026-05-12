export const metadata = {
  title: "Strict Grid",
  description: "Enforce an 8px modular spacing grid. All margins, paddings, and gaps must be multiples of 8px for perfect visual rhythm.",
  type: "rule" as const,
  features: [
    { label: "8px modular grid spacing" },
    { label: "Consistent vertical rhythm" },
    { label: "No arbitrary spacing values" },
    { label: "Works with any theme" },
  ],
  previews: [
    { title: "Grid Layout", caption: "Content aligned to 8px modular grid", tags: ["Grid", "8px", "Modular"] },
    { title: "Spacing Scale", caption: "8, 16, 24, 32, 48, 64 spacing scale", tags: ["Scale", "Spacing", "System"] },
  ],
  installCommands: [
    { agent: "Claude Code", command: "npx arctis add strict-grid --agent claude-code" },
    { agent: "OpenCode", command: "npx arctis add strict-grid --agent opencode" },
    { agent: "Codex", command: "npx arctis add strict-grid --agent codex" },
  ],
  allInstallCommand: "npx arctis add strict-grid --all",
  folderStructure: [
    { name: "strict-grid/", type: "folder" as const, children: [
      { name: "page.tsx", type: "file" as const },
      { name: "content.mdx", type: "file" as const },
      { name: "rule.md", type: "file" as const },
      { name: "metadata.ts", type: "file" as const },
    ]},
  ],
  skillMarkdown: "# Strict Grid\n\n## Core Rule\n- Use a strict 8px modular grid for all spacing.\n- All margins, paddings, and gaps must be multiples of 8px.\n- Use 8px, 16px, 24px, 32px, 48px, 64px spacing scale.\n- Never use arbitrary spacing values outside the 8px grid.\n\n## When to apply\n- Always. This is a global layout constraint.",
};
