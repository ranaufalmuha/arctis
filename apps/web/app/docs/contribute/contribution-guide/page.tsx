import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";

const items = [
  "Fork the repository and create a branch",
  "Create your skill following the skill format spec",
  "Validate with npx arctis validate",
  "Open a pull request with a clear description",
  "Respond to review feedback",
  "Skills are MIT-licensed, open-source only",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/contribute/contribution-guide">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Contribution Guide
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          How to contribute to the ARCTIS skill registry. Fork, branch, create,
          validate, submit PR, and review process.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Process
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
