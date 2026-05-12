export const metadata = {
  title: "Retro Web",
  description: "Y2K-era web aesthetics with pixel fonts, scanlines, terminal vibes, and nostalgic UI patterns from the early internet.",
  type: "theme" as const,
  features: [
    { label: "Pixel font stacks" },
    { label: "Scanline overlays" },
    { label: "Terminal chrome" },
    { label: "8-bit decorative borders" },
    { label: "Neon-on-black palettes" },
    { label: "Visitor counter patterns" },
  ],
  previews: [
    { title: "Blog Layout", caption: "Y2K blog with pixel font and scanlines", tags: ["Blog", "Pixel", "Scanline"] },
    { title: "Terminal Window", caption: "Terminal-inspired content window", tags: ["Terminal", "Window", "Green"] },
    { title: "Navigation Bar", caption: "8-bit styled nav with decorative borders", tags: ["Nav", "8-bit", "Borders"] },
    { title: "Footer Block", caption: "Retro footer with visitor counter", tags: ["Footer", "Counter", "Badges"] },
  ],
  installCommands: [
    { agent: "Claude Code", command: "npx arctis add retro-web --agent claude-code" },
    { agent: "OpenCode", command: "npx arctis add retro-web --agent opencode" },
    { agent: "Codex", command: "npx arctis add retro-web --agent codex" },
  ],
  allInstallCommand: "npx arctis add retro-web --all",
  folderStructure: [
    { name: "retro-web/", type: "folder" as const, children: [
      { name: "page.tsx", type: "file" as const },
      { name: "content.mdx", type: "file" as const },
      { name: "theme.md", type: "file" as const },
      { name: "metadata.ts", type: "file" as const },
      { name: "references/", type: "folder" as const, children: [
        { name: "fonts.md", type: "file" as const },
        { name: "effects.md", type: "file" as const },
      ]},
      { name: "snippets/", type: "folder" as const, children: [] },
    ]},
  ],
  skillMarkdown: "# Retro Web\n\n## Core Rules\n- Use pixel/bitmap font stacks for headings and labels.\n- Add scanline overlay effects using CSS.\n- Use terminal-inspired window chrome.\n- Use 8-bit decorative borders and dividers.\n- Use neon-on-black or CRT green-on-black palettes.\n- Include retro web elements like visitor counters.\n\n## Avoid\n- Modern design trends\n- Smooth gradients\n- Rounded corners\n- Minimalist whitespace",
};
