import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "Monospace for labels, badges, tags, metadata",
  "Monospace for CLI commands and code blocks",
  "Monospace for version numbers and timestamps",
  "Sans-serif reserved for headings and body text",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/rules/monospace-metadata">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Monospace Metadata
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Use monospace typography for all metadata, labels, badges, CLI
          commands, code, version numbers, timestamps, and technical details.
          Sans-serif for body text and headings only.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
          Installation
        </h2>
        <CommandBlock command="npx arctis add monospace-metadata --all" />
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
