export const metadata = {
  title: "Hairline Borders",
  description: "Enforce 1px hairline borders on all containers, cards, panels, and dividers for a consistent structural aesthetic.",
  type: "rule" as const,
  features: [
    { label: "1px borders on all elements" },
    { label: "Consistent border color tokens" },
    { label: "Light and dark mode variants" },
    { label: "Works with any theme" },
  ],
  previews: [
    { title: "Container Card", caption: "Card with 1px hairline border", tags: ["Card", "Hairline", "Border"] },
    { title: "Section Divider", caption: "1px dividers between sections", tags: ["Divider", "Hairline", "Section"] },
  ],
  installCommands: [
    { agent: "Claude Code", command: "npx arctis add hairline-borders --agent claude-code" },
    { agent: "OpenCode", command: "npx arctis add hairline-borders --agent opencode" },
    { agent: "Codex", command: "npx arctis add hairline-borders --agent codex" },
  ],
  allInstallCommand: "npx arctis add hairline-borders --all",
  folderStructure: [
    { name: "hairline-borders/", type: "folder" as const, children: [
      { name: "SKILL.md", type: "file" as const },
      { name: "arctis.json", type: "file" as const },
    ]},
  ],
  skillMarkdown: "# Hairline Borders\n\n## Core Rule\n- Use 1px solid borders on all containers, cards, panels, and dividers.\n- Use rgba(255,255,255,0.15) for light borders on dark backgrounds.\n- Use rgba(0,0,0,0.12) for light borders on light backgrounds.\n- Never use borders thicker than 1px for layout elements.\n\n## When to apply\n- Always. This is a global visual constraint.",
};
