import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "GSAP ScrollSmoother integration",
  "Lenis smooth scroll alternative",
  "Scroll speed and inertia configuration",
  "Parallax data-attribute system",
  "Anchor link smooth scrolling",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/addons/smooth-scroll">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Smooth Scroll
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Smooth scrolling implementations using GSAP ScrollSmoother or Lenis.
          Adds buttery smooth scroll behavior to any page layout.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <CommandBlock command="npx arctis add smooth-scroll --all" />
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
