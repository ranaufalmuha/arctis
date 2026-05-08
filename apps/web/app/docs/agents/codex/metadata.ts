export const metadata = {
  title: "Codex",
  description: "OpenAI coding agent. Skills are imported as custom instruction sets and applied per-project.",
  type: "agent" as const,
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
    { name: "~/.codex/skills/", type: "folder" as const, children: [
      { name: "skill-name/", type: "folder" as const, children: [
        { name: "SKILL.md", type: "file" as const },
      ]},
    ]},
  ],
  skillMarkdown: "# Codex Integration\n\nSkills installed at: ~/.codex/skills/{skill-name}/\n\nCodex imports skills as custom instruction sets.\nApplied per-project via configuration.",
};
