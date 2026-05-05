import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "Cursor-proximity magnetic attraction",
  "3D transform on hover",
  "Edge glow emission effect",
  "Configurable attraction radius and strength",
  "Reset animation on mouse leave",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/addons/magnetic-button">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Magnetic Button
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Magnetic hover button effects that attract toward the cursor position.
          Subtle 3D transform on hover with glow emission from edges.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <CommandBlock command="npx arctis add magnetic-button --all" />
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
