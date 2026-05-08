export const metadata = {
  title: "Pixi Particle Field",
  description: "GPU-accelerated WebGL particle systems with mouse-responsive interaction, shader backgrounds, and configurable rendering.",
  type: "addon" as const,
  features: [
    { label: "WebGL particle system" },
    { label: "Mouse-responsive interaction" },
    { label: "Shader-based backgrounds" },
    { label: "Configurable particle count" },
    { label: "GPU-accelerated rendering" },
  ],
  previews: [
    { title: "Particle Field", caption: "Interactive particle background", tags: ["Particles", "WebGL", "Mouse"] },
    { title: "Shader Gradient", caption: "Animated gradient background", tags: ["Shader", "Gradient", "Animate"] },
    { title: "Connection Mesh", caption: "Proximity-based connection lines", tags: ["Lines", "Network", "Mesh"] },
  ],
  installCommands: [
    { agent: "Claude Code", command: "npx arctis add pixi-particle-field --agent claude-code" },
    { agent: "OpenCode", command: "npx arctis add pixi-particle-field --agent opencode" },
    { agent: "Codex", command: "npx arctis add pixi-particle-field --agent codex" },
  ],
  allInstallCommand: "npx arctis add pixi-particle-field --all",
  folderStructure: [
    { name: "pixi-particle-field/", type: "folder" as const, children: [
      { name: "SKILL.md", type: "file" as const },
      { name: "arctis.json", type: "file" as const },
      { name: "snippets/", type: "folder" as const, children: [
        { name: "particle-field.tsx", type: "file" as const },
        { name: "shader-bg.tsx", type: "file" as const },
      ]},
    ]},
  ],
  skillMarkdown: "# Pixi Particle Field\n\n## Core Rules\n- Use Pixi.js for WebGL rendering in React.\n- Initialize application in useEffect with cleanup.\n- Particles respond to mouse position.\n- Keep particle count configurable (default 150).\n- Run as non-blocking background layer.\n- Use requestAnimationFrame for smooth rendering.\n\n## Avoid\n- Excessive particle count (>500)\n- Complex physics without throttling\n- Blocking the main thread",
};
