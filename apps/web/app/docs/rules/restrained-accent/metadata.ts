export const metadata = {
  title: "Restrained Accent",
  description: "Limit accent color usage to 5-10% of the interface. Use a single accent color sparingly for CTAs, links, and highlights.",
  type: "rule" as const,
  features: [
    { label: "Single accent color only" },
    { label: "5-10% surface area maximum" },
    { label: "CTAs and links only" },
    { label: "No accent on decorative elements" },
    { label: "Works with any theme" },
  ],
  previews: [
    { title: "Restrained CTA", caption: "Single accent button on neutral background", tags: ["CTA", "Accent", "Neutral"] },
    { title: "Accent Highlight", caption: "Subtle accent on key metrics", tags: ["Highlight", "Accent", "Metric"] },
  ],
  installCommands: [
    { agent: "Claude Code", command: "npx arctis add restrained-accent --agent claude-code" },
    { agent: "OpenCode", command: "npx arctis add restrained-accent --agent opencode" },
    { agent: "Codex", command: "npx arctis add restrained-accent --agent codex" },
  ],
  allInstallCommand: "npx arctis add restrained-accent --all",
  folderStructure: [
    { name: "restrained-accent/", type: "folder" as const, children: [
      { name: "SKILL.md", type: "file" as const },
      { name: "arctis.json", type: "file" as const },
    ]},
  ],
  skillMarkdown: "# Restrained Accent\n\n## Core Rule\n- Use a single accent color across the entire interface.\n- Limit accent usage to 5-10% of total surface area.\n- Apply accent only to CTAs, links, and key highlights.\n- Never use accent for decorative or background elements.\n- Default accent: #ffeb50 on dark, #f59e0b on light.\n\n## When to apply\n- Always. This is a global color constraint.",
};
