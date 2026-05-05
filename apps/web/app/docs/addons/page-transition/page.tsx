import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "Next.js App Router transition support",
  "Wipe and slide transition presets",
  "Fade and crossfade transitions",
  "Custom transition timeline builder",
  "Exit/enter animation coordination",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/addons/page-transition">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Page Transition
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Page transition animations for Next.js App Router using GSAP. Wipe,
          fade, slide, and custom transition presets.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <CommandBlock command="npx arctis add page-transition --all" />
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
