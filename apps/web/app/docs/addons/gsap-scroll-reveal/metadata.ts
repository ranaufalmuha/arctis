export const metadata = {
  title: "GSAP Scroll Reveal",
  description: "Scroll-triggered animation sequences with staggered reveals, parallax effects, and timeline choreography.",
  type: "addon" as const,
  features: [
    { label: "ScrollTrigger reveals" },
    { label: "Stagger animations" },
    { label: "Timeline sequences" },
    { label: "Configurable easing" },
    { label: "Reduced-motion support" },
  ],
  previews: [
    { title: "Scroll Reveal", caption: "Elements fade and slide up on scroll", tags: ["Scroll", "Reveal", "Fade"] },
    { title: "Stagger Grid", caption: "Cards stagger in with sequential delay", tags: ["Stagger", "Grid", "Cards"] },
    { title: "Parallax Section", caption: "Layered parallax on scroll", tags: ["Parallax", "Depth", "Scroll"] },
    { title: "Timeline Sequence", caption: "Chained animation timeline", tags: ["Timeline", "Sequence", "Chain"] },
  ],
  installCommands: [
    { agent: "Claude Code", command: "npx arctis add gsap-scroll-reveal --agent claude-code" },
    { agent: "OpenCode", command: "npx arctis add gsap-scroll-reveal --agent opencode" },
    { agent: "Codex", command: "npx arctis add gsap-scroll-reveal --agent codex" },
  ],
  allInstallCommand: "npx arctis add gsap-scroll-reveal --all",
  folderStructure: [
    { name: "gsap-scroll-reveal/", type: "folder" as const, children: [
      { name: "SKILL.md", type: "file" as const },
      { name: "arctis.json", type: "file" as const },
      { name: "snippets/", type: "folder" as const, children: [
        { name: "scroll-reveal.tsx", type: "file" as const },
        { name: "stagger-list.tsx", type: "file" as const },
        { name: "timeline.tsx", type: "file" as const },
      ]},
    ]},
  ],
  skillMarkdown: "# GSAP Scroll Reveal\n\n## Core Rules\n- Use GSAP for all animation sequences.\n- Use ScrollTrigger for scroll-based reveals.\n- Apply staggered delays to list items (0.05-0.1s).\n- Use power2.out or power3.out for smooth easing.\n- Respect prefers-reduced-motion.\n- Keep durations between 300-600ms.\n\n## Avoid\n- Long animations over 1 second\n- Bounce or elastic easing\n- Animating layout-triggering properties",
};
