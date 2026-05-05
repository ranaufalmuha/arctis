import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "Mouse-tracking grid highlight system",
  "Configurable cell size and spacing",
  "Grid line opacity and color controls",
  "Dot-plus pattern variant",
  "Performance-optimized canvas rendering",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/addons/interactive-grid">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Interactive Grid
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Interactive grid background overlays with mouse tracking. Grid cells
          highlight on hover, creating a technical, blueprint-like feel.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <CommandBlock command="npx arctis add interactive-grid --all" />
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
