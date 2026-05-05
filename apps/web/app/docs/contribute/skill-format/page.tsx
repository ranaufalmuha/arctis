import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";

const items = [
  "SKILL.md sections: Design Rules, Typography, Components, Workflow",
  "arctis.json schema with all required fields",
  "Directory structure conventions",
  "Naming and versioning rules",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/contribute/skill-format">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Skill Format
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Complete specification for the SKILL.md file format, arctis.json
          schema, directory structure, naming conventions, and metadata
          requirements.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          arctis.json Schema
        </h2>
        <pre className="mb-6 overflow-x-auto rounded border border-[var(--color-border)] bg-[var(--color-panel)] p-4 font-mono text-sm leading-relaxed text-[var(--color-muted)]">
          <code>{`{
  "name": "my-skill",
  "version": "1.0.0",
  "description": "Short description of the skill",
  "author": "Your Name",
  "license": "MIT",
  "type": "addon" | "rule" | "theme",
  "compatibility": {
    "frameworks": ["next.js", "react"],
    "agents": ["claude", "cursor", "copilot"]
  },
  "keywords": ["animation", "scroll", "gsap"],
  "files": {
    "rules": "SKILL.md",
    "examples": "examples/",
    "assets": "assets/"
  }
}`}</code>
        </pre>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          What This Spec Covers
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item}
              className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4"
            >
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </DocPageShell>
  );
}
