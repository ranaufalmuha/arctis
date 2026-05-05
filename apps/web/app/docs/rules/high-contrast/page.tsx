import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "WCAG AA contrast compliance (4.5:1 minimum)",
  "Dark background with light foreground text",
  "Visible focus indicators on all interactive elements",
  "Sufficient contrast for disabled and muted states",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/rules/high-contrast">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          High Contrast
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Maintain WCAG AA minimum contrast ratios (4.5:1 for text, 3:1 for
          large text). Use a dark background with light foreground text. Ensure
          interactive elements have visible focus indicators.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <CommandBlock command="npx arctis add high-contrast --all" />
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          What This Provides
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
