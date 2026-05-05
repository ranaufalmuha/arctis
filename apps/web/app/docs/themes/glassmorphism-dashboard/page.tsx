import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "Multi-layer translucent panel system",
  "Backdrop blur with opacity stacking",
  "Glowing accent line borders",
  "Floating stat card conventions",
  "Translucent sidebar navigation",
  "Depth stacking through z-index layers",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/themes/glassmorphism-dashboard">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">Overview</h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Translucent panel dashboard systems with backdrop blur, layered depth, and glowing accent lines.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">Installation</h2>
        <CommandBlock command="npx arctis add glassmorphism-dashboard --all" />
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">What This Theme Provides</h2>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item}
              className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4"
            >
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">{item}</p>
            </div>
          ))}
        </div>
      </Section>
    </DocPageShell>
  );
}
