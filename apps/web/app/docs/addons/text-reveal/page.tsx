import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "SplitText character reveal",
  "Line-by-line stagger reveal",
  "Word masking and clip-path reveals",
  "Scroll-triggered text animations",
  "Configurable speed and easing curves",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/addons/text-reveal">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Text Reveal
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Text reveal animations including split-text, character-by-character,
          and line reveal effects using GSAP.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <CommandBlock command="npx arctis add text-reveal --all" />
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
