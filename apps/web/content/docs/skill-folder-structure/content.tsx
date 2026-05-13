import { CodeBlock } from "@/shared/components/ui/CodeBlock";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";

const AGENTS = [
  { name: "Claude Code", path: ".claude/skills/arctis/" },
  { name: "OpenCode", path: ".opencode/skills/arctis/" },
  { name: "Codex", path: ".agents/skills/arctis/" },
];

const FOLDER_TREE = `my-project/
├── arctis.config.json
├── .claude/
│   └── skills/
│       └── arctis/
│           ├── SKILL.md
│           ├── arctis.config.json
│           ├── references/
│           │   ├── theme.md
│           │   ├── addons/
│           │   │   ├── gsap-scroll-reveal.md
│           │   │   └── custom-cursor.md
│           │   └── rules/
│           │       ├── zero-radius.md
│           │       ├── hairline-borders.md
│           │       └── restrained-accent.md
│           ├── snippets/
│           └── assets/
├── .opencode/
│   └── skills/
│       └── arctis/
│           ├── ... (same structure)
└── .agents/
    └── skills/
        └── arctis/
            ├── ... (same structure)`;

export default function Content() {
  return (
    <div className="py-8">
      <Section glowAccent>
        <div className="mb-3 font-mono text-overline uppercase tracking-[0.2em] text-[var(--color-accent)]">
          DOCUMENTATION
        </div>
        <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight text-[var(--color-foreground)]">
          Skill Folder Structure
        </h1>
        <p className="max-w-2xl font-mono text-lg leading-relaxed text-[var(--color-muted)]">
          Understand how ARCTIS composes one Theme, multiple Add-ons, and
          multiple Rules into a project-local agent skill.
        </p>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Overview
        </h2>
        <div className="space-y-3 text-base leading-relaxed text-[var(--color-muted)]">
          <p>
            ARCTIS installs skills per project, not globally. Every project
            gets its own <code className="text-[var(--color-accent)]">arctis</code>{" "}
            skill package. This keeps design direction, interaction behavior,
            and visual rules isolated per codebase.
          </p>
          <p>
            Instead of installing each Theme, Add-on, and Rule as a separate
            skill, ARCTIS composes them into one unified package. Your agent
            loads a single <code className="text-[var(--color-accent)]">SKILL.md</code>{" "}
            that contains everything.
          </p>
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Agent Output Paths
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          The same composed skill package is written to each agent&apos;s
          skills directory:
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {AGENTS.map((agent) => (
            <div
              key={agent.name}
              className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5"
            >
              <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)]">
                {agent.name}
              </div>
              <div className="font-mono text-xs text-[var(--color-accent)]">
                {agent.path}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Full Folder Structure
        </h2>
        <CodeBlock code={FOLDER_TREE} lang="text" />
        <div className="mt-6 space-y-3">
          {[
            {
              name: "arctis.config.json",
              desc: "Root config declaring the selected Theme, Add-ons, Rules, and target Agents for this project.",
            },
            {
              name: "SKILL.md",
              desc: "The merged skill document. All design rules, component patterns, typography, colors, and workflow conventions from every selected skill composed into one file.",
            },
            {
              name: "references/theme.md",
              desc: "The Theme's full design specification — layout rules, spacing conventions, visual principles, and color palette. One file per project.",
            },
            {
              name: "references/addons/",
              desc: "Each Add-on gets its own reference file inside this directory. Contains interaction patterns, animation rules, and library-specific conventions.",
            },
            {
              name: "references/rules/",
              desc: "Each Rule gets its own reference file. Contains global constraints like border-radius enforcement, spacing grids, and accent color limits.",
            },
            {
              name: "snippets/",
              desc: "Reusable code snippets from all selected skills. Your agent can compose these into larger components.",
            },
            {
              name: "assets/",
              desc: "Static assets bundled with skills — placeholder images, font files, or design resources referenced by examples.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4"
            >
              <h3 className="mb-1 font-mono text-sm font-semibold text-[var(--color-accent)]">
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
