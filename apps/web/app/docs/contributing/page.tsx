import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";
import { Button } from "@/shared/components/ui/Button";
import Link from "next/link";

export default function ContributingPage() {
  return (
    <div>
      <Section glowAccent>
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
          DOCUMENTATION
        </div>
        <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight">
          How to Contribute
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          ARCTIS is open-source. Help grow the skill registry by contributing
          new skills, improving existing packages, or enhancing the platform.
        </p>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          Ways to Contribute
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Submit a New Skill",
              desc: "Create and publish a new SKILL.md package. Follow the skill creation guide and open a PR to the registry.",
            },
            {
              title: "Improve an Existing Skill",
              desc: "Enhance existing skills with better examples, additional framework support, or improved design rules.",
            },
            {
              title: "Fix Documentation",
              desc: "Improve docs, fix typos, add examples, or translate documentation into other languages.",
            },
            {
              title: "Build Tooling",
              desc: "Contribute to the ARCTIS CLI, website, or developer tools that make the skill ecosystem better.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5"
            >
              <h3 className="mb-2 font-mono text-base font-semibold text-[var(--color-accent)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          Contribution Workflow
        </h2>
        <div className="space-y-6">
          <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
            <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)]">
              1. Fork the Repository
            </div>
            <CommandBlock command="git clone https://github.com/YOUR_USER/arctis.git" />
          </div>
          <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
            <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)]">
              2. Create a Branch
            </div>
            <CommandBlock command="git checkout -b skill/my-new-skill" />
          </div>
          <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
            <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)]">
              3. Add Your Skill
            </div>
            <CommandBlock command="npx arctis create my-new-skill" />
          </div>
          <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
            <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)]">
              4. Validate
            </div>
            <CommandBlock command="npx arctis validate ./my-new-skill" />
          </div>
          <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5">
            <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)]">
              5. Open a Pull Request
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              Push your branch and open a PR against the main repository.
              Include a clear description of your skill and what it adds.
            </p>
          </div>
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          Skill Guidelines
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 text-[var(--color-accent)]">+</span>
            Skills must be open-source and MIT-licensed.
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 text-[var(--color-accent)]">+</span>
            SKILL.md must be well-structured and agent-parseable.
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 text-[var(--color-accent)]">+</span>
            Include working examples in the <code className="text-[var(--color-accent)]">examples/</code> directory.
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 text-[var(--color-accent)]">+</span>
            Specify agent compatibility in <code className="text-[var(--color-accent)]">arctis.json</code>.
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 text-[var(--color-accent)]">+</span>
            Follow the skill creation guide for structure and conventions.
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-0.5 text-[var(--color-accent)]">+</span>
            Skills must not contain generated content from other AI systems.
          </div>
        </div>
      </Section>

      <HairlineDivider variant="accent" />

      <Section glowAccent>
        <div className="text-center">
          <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight">
            Ready to contribute?
          </h2>
          <Link href="https://github.com" target="_blank" rel="noreferrer">
            <Button variant="primary" size="lg">
              View on GitHub
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
