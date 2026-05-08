export const metadata = {
  title: "Zero Radius",
  description: "Enforce zero border-radius across all UI elements. Every card, button, input, and container uses sharp 90-degree corners.",
  type: "rule" as const,
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
    { name: "zero-radius/", type: "folder" as const, children: [
      { name: "SKILL.md", type: "file" as const },
      { name: "arctis.json", type: "file" as const },
    ]},
  ],
  skillMarkdown: "# Zero Radius\n\n## Core Rule\n- Set border-radius: 0 on all elements globally.\n- Use * { border-radius: 0 !important; } as base reset.\n- Override only when a third-party component requires it.\n\n## When to apply\n- Always. This is a global visual constraint.",
};
