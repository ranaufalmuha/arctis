import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

export default function CreatingPage() {
  return (
    <div className="py-8">
      <Section glowAccent>
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
          DOCUMENTATION
        </div>
        <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight text-[var(--color-foreground)]">
          How to Create a Skill
        </h1>
        <p className="max-w-2xl font-mono text-lg leading-relaxed text-[var(--color-muted)]">
          Build your own ARCTIS skill package and share it with the community.
        </p>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          1. Scaffold a New Skill
        </h2>
        <p className="mb-4 text-base leading-relaxed text-[var(--color-muted)]">
          Use the ARCTIS CLI to generate the file structure for a new skill:
        </p>
        <CommandBlock command="npx arctis create my-skill-name" />
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          2. Write Your SKILL.md
        </h2>
        <p className="mb-4 text-base leading-relaxed text-[var(--color-muted)]">
          The SKILL.md is the core of your package. It defines the rules your
          agent will follow. Write it in clear, declarative sections:
        </p>
        <div className="space-y-4">
          {[
            {
              label: "Design Rules",
              desc: "Define layout rules, spacing conventions, color usage, and interaction patterns.",
            },
            {
              label: "Typography",
              desc: "Specify font families, type scales, and semantic usage for headings, body, labels, and code.",
            },
            {
              label: "Components",
              desc: "Document reusable patterns with prop interfaces, state management, and responsive breakpoints.",
            },
            {
              label: "Workflow",
              desc: "Define file structure patterns, naming conventions, and import ordering rules.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4"
            >
              <div className="mb-1 font-mono text-sm font-semibold text-[var(--color-accent)]">
                {item.label}
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          3. Add Examples and References
        </h2>
        <p className="mb-4 text-base leading-relaxed text-[var(--color-muted)]">
          Provide reference implementations and design tokens so your agent can
          learn by example:
        </p>
        <ul className="space-y-2 text-sm text-[var(--color-muted)]">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)]">+</span>
            Add complete page examples in <code className="text-[var(--color-accent)]">examples/</code>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)]">+</span>
            Provide CSS variable maps in <code className="text-[var(--color-accent)]">references/</code>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)]">+</span>
            Include reusable code snippets in <code className="text-[var(--color-accent)]">snippets/</code>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent)]">+</span>
            Fill out metadata in <code className="text-[var(--color-accent)]">arctis.json</code>
          </li>
        </ul>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          4. Configure arctis.json
        </h2>
        <p className="mb-4 text-base leading-relaxed text-[var(--color-muted)]">
          Every skill needs metadata declaring agent compatibility and
          framework requirements:
        </p>
        <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
          <pre className="font-mono text-sm leading-relaxed text-[var(--color-muted)]">
{`{
  "name": "my-skill-name",
  "version": "1.0.0",
  "category": "design-style",
  "description": "Short description",
  "agents": ["claude-code", "opencode", "codex"],
  "frameworks": ["React", "Next.js", "Tailwind CSS"],
  "repository": "https://github.com/user/my-skill"
}`}
          </pre>
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          5. Test and Publish
        </h2>
        <p className="mb-4 text-base leading-relaxed text-[var(--color-muted)]">
          Validate your skill and submit it for inclusion in the registry:
        </p>
        <div className="space-y-3">
          <CommandBlock command="npx arctis validate ./my-skill-name" />
          <CommandBlock command="npx arctis publish ./my-skill-name" />
        </div>
      </Section>
    </div>
  );
}
