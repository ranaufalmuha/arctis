export const metadata = {
  title: "Custom Cursor",
  description: "Replace the default browser cursor with a custom follower element that responds to mouse movement and hover states.",
  type: "addon" as const,
  features: [
    { label: "Custom cursor follower element" },
    { label: "Mouse position tracking" },
    { label: "Scale effect on interactive elements" },
    { label: "Smooth CSS transitions" },
    { label: "Reduced-motion support" },
  ],
  previews: [
    { title: "Default Cursor", caption: "Rounded cursor follower with subtle trail", tags: ["Cursor", "Follower", "Default"] },
    { title: "Hover State", caption: "Cursor expands on links and buttons", tags: ["Hover", "Scale", "Interactive"] },
  ],
  installCommands: [
    { agent: "Claude Code", command: "npx arctis add custom-cursor --agent claude-code" },
    { agent: "OpenCode", command: "npx arctis add custom-cursor --agent opencode" },
    { agent: "Codex", command: "npx arctis add custom-cursor --agent codex" },
  ],
  allInstallCommand: "npx arctis add custom-cursor --all",
  folderStructure: [
    { name: "custom-cursor/", type: "folder" as const, children: [
      { name: "page.tsx", type: "file" as const },
      { name: "content.mdx", type: "file" as const },
      { name: "addon.md", type: "file" as const },
      { name: "metadata.ts", type: "file" as const },
      { name: "references/", type: "folder" as const, children: [] },
      { name: "snippets/", type: "folder" as const, children: [
        { name: "cursor-follower.tsx", type: "file" as const },
      ]},
    ]},
  ],
  skillMarkdown: "# Custom Cursor\n\n## Core Rules\n- Replace the default browser cursor with a custom follower element.\n- Track mouse position via mousemove event listener.\n- Use requestAnimationFrame for smooth rendering.\n- Apply a subtle scale effect on hover over interactive elements.\n- Use CSS transitions for hover state changes.\n- Support reduced-motion preferences.\n\n## Avoid\n- Blocking the main thread with complex cursor logic\n- Large cursor elements that obstruct content",
};
