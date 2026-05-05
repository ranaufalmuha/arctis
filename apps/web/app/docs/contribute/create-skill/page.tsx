import { Section } from "@/shared/components/ui/Section";
import { Badge } from "@/shared/components/ui/Badge";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";

export default function Page() {
  return (
    <div>
      <div className="mb-8 border-b border-[var(--color-border)] pb-8">
        <div className="mb-4 flex items-center gap-2">
          <Badge variant="accent">CONTRIBUTE</Badge>
        </div>
        <h1 className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl">
          Create a Skill
        </h1>
        <p className="font-mono text-base leading-relaxed text-[var(--color-muted)]">
          Build your own ARCTIS skill package. Scaffold, write, validate, and publish.
        </p>
      </div>

      <Section>
        <h2 className="mb-3 font-mono text-xl font-semibold tracking-tight">1. Scaffold</h2>
        <CommandBlock command="npx arctis create my-skill-name" />
      </Section>
      <HairlineDivider className="my-8" />
      <Section>
        <h2 className="mb-3 font-mono text-xl font-semibold tracking-tight">2. Write SKILL.md</h2>
        <p className="mb-3 font-mono text-sm leading-relaxed text-[var(--color-muted)]">Define design rules, typography scales, component patterns, and workflow conventions in your SKILL.md file. Reference existing skills for format guidance.</p>
      </Section>
      <HairlineDivider className="my-8" />
      <Section>
        <h2 className="mb-3 font-mono text-xl font-semibold tracking-tight">3. Add Examples</h2>
        <p className="mb-3 font-mono text-sm leading-relaxed text-[var(--color-muted)]">Add reference implementations in the examples/ directory so your agent can learn by example.</p>
      </Section>
      <HairlineDivider className="my-8" />
      <Section>
        <h2 className="mb-3 font-mono text-xl font-semibold tracking-tight">4. Configure arctis.json</h2>
        <p className="mb-3 font-mono text-sm leading-relaxed text-[var(--color-muted)]">Declare agent compatibility, framework requirements, and metadata in arctis.json.</p>
      </Section>
      <HairlineDivider className="my-8" />
      <Section>
        <h2 className="mb-3 font-mono text-xl font-semibold tracking-tight">5. Validate & Publish</h2>
        <CommandBlock command="npx arctis validate ./my-skill-name" />
        <p className="mt-3 font-mono text-sm text-[var(--color-muted)]">Then open a PR to the ARCTIS registry.</p>
      </Section>
    </div>
  );
}
