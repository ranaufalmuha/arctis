import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";

const items = [
  "Glassmorphism hero with glow accents",
  "Tokenomics display sections",
  "Roadmap timeline patterns",
  "Team grid layouts",
  "Partnership logo strip patterns",
  "Wallet-connect flow conventions",
];

export default function Page() {
  return (
    <DocPageShell href="/docs/themes/web3-landing">
      <Section>
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">Overview</h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Premium Web3 landing pages with glassmorphism panels, glow accents, token metrics, and ecosystem roadmaps.
        </p>
        <HairlineDivider className="my-6" />
        <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">Installation</h2>
        <CommandBlock command="npx arctis add web3-landing --all" />
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
