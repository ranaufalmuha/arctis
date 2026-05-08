import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { FileTree } from "@/shared/components/ui/FileTree";

const fileTreeNodes = [
  { name: "SKILL.md", type: "file" as const, highlight: true },
  {
    name: "examples/",
    type: "folder" as const,
    children: [
      { name: "landing-page.tsx", type: "file" as const },
      { name: "dashboard.tsx", type: "file" as const },
    ],
  },
  {
    name: "references/",
    type: "folder" as const,
    children: [
      { name: "design-tokens.md", type: "file" as const },
      { name: "typography.md", type: "file" as const },
    ],
  },
  {
    name: "snippets/",
    type: "folder" as const,
    children: [
      { name: "hero-section.tsx", type: "file" as const },
      { name: "feature-grid.tsx", type: "file" as const },
    ],
  },
  { name: "arctis.json", type: "file" as const },
];

export default function SkillMdPage() {
  return (
    <div className="py-8">
      <Section glowAccent>
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
          DOCUMENTATION
        </div>
        <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight text-[var(--color-foreground)]">
          What is a SKILL.md?
        </h1>
        <p className="max-w-2xl font-mono text-lg leading-relaxed text-[var(--color-muted)]">
          A SKILL.md file is the core instruction document in every ARCTIS
          skill package. It contains design rules, component patterns,
          typography scales, color tokens, spacing conventions, and workflow
          rules formatted for AI coding agents.
        </p>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Package Structure
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Every ARCTIS skill package follows a consistent structure designed
          for agent parsing and human readability.
        </p>
        <FileTree nodes={fileTreeNodes} />
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Anatomy of SKILL.md
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Design Rules",
              desc: "Explicit, machine-parseable rules for layout, spacing, color usage, typography, and interaction patterns. Your agent references these rules during every generation.",
            },
            {
              title: "Component Conventions",
              desc: "Specifications for reusable component patterns including prop interfaces, state management conventions, responsive breakpoints, and accessibility requirements.",
            },
            {
              title: "Typography Scales",
              desc: "Complete type scale definitions with font families, sizes, line heights, letter spacing, and weight mappings for headings, body text, labels, and code blocks.",
            },
            {
              title: "Color Tokens",
              desc: "CSS variable maps and semantic color roles defining backgrounds, foregrounds, borders, accents, and state colors. Designed for both light and dark mode.",
            },
            {
              title: "Workflow Memory",
              desc: "Project-level conventions including file structure patterns, naming conventions, import ordering rules, and component composition strategies.",
            },
          ].map((section) => (
            <div
              key={section.title}
              className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5"
            >
              <h3 className="mb-2 font-mono text-base font-semibold text-[var(--color-accent)]">
                {section.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {section.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Not Just Prompts
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
          <p>
            A SKILL.md is fundamentally different from a prompt template. While
            prompts are single-use text instructions, a SKILL.md is a
            structured, version-controlled, reusable package that becomes part
            of your agent&apos;s permanent instruction set.
          </p>
          <p>
            Skills persist across sessions, can be composed together, and are
            updated independently. Your agent references them automatically
            during code generation without requiring you to re-paste
            instructions.
          </p>
        </div>
      </Section>
    </div>
  );
}
