import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "4-6px border-radius on all containers",
  "Rounded buttons and input fields",
  "Subtle softness while maintaining structure",
  "Ideal for consumer SaaS and B2C products",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/rules/soft-rounded">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Soft Rounded
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Apply consistent small border-radius (4-6px) across the interface.
          Subtly softens the UI while maintaining structure. Good for
          consumer-facing products.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <CommandBlock command="npx arctis add soft-rounded --all" />
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
