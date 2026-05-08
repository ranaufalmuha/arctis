export const metadata = {
  title: "Claude Code",
  description: "Anthropic agentic coding tool. ARCTIS skills are injected as project-level instructions and referenced during generation.",
  type: "agent" as const,
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
    { name: "~/.claude/skills/", type: "folder" as const, children: [
      { name: "skill-name/", type: "folder" as const, children: [
        { name: "SKILL.md", type: "file" as const },
        { name: "examples/", type: "folder" as const },
        { name: "references/", type: "folder" as const },
      ]},
    ]},
  ],
  skillMarkdown: "# Claude Code Integration\n\nSkills installed at: ~/.claude/skills/{skill-name}/\n\nClaude Code auto-discovers SKILL.md files in this directory.\nNo additional configuration needed.",
};
