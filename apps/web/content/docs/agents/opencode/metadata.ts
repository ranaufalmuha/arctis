export const metadata = {
  title: "OpenCode",
  description: "Open-source AI coding agent. Skills are loaded as workspace-level configuration files and applied per-project.",
  type: "agent" as const,
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
    { name: "~/.opencode/skills/", type: "folder" as const, children: [
      { name: "skill-name/", type: "folder" as const, children: [
        { name: "SKILL.md", type: "file" as const },
      ]},
    ]},
  ],
  skillMarkdown: "# OpenCode Integration\n\nSkills installed at: ~/.opencode/skills/{skill-name}/\n\nOpenCode reads skills on startup from this directory.\nSupports per-project and global skill loading.",
};
