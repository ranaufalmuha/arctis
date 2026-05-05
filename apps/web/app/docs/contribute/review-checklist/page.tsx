import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";

const items = [
  "SKILL.md is well-structured and agent-parseable",
  "arctis.json is complete with all required fields",
  "examples/ contains working reference implementations",
  "Skill does not contain AI-generated filler content",
  "Install command works as documented",
  "Agent compatibility is correctly declared",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/contribute/review-checklist">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Review Checklist
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Checklist for reviewing skill submissions. What reviewers look for
          before accepting a new skill into the registry.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Review Items
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
