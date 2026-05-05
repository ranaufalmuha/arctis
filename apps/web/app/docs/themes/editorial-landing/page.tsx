import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "Asymmetric article grid layouts",
  "Pull quote and blockquote treatments",
  "Drop cap and initial letter styles",
  "Reading-time indicators",
  "Author byline and metadata patterns",
  "Section divider and ornamental break rules",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/themes/editorial-landing">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">Overview</h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Magazine-quality content layouts with article grids, pull quotes, drop caps, and sophisticated typography.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">Installation</h2>
        <CommandBlock command="npx arctis add editorial-landing --all" />
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
