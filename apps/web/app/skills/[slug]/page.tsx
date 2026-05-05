import { notFound } from "next/navigation";
import { skills, getSkillBySlug } from "@/features/skills/utils/data";
import { CATEGORY_LABELS, AGENTS } from "@/features/skills/interfaces";
import type { AgentId } from "@/features/skills/interfaces";
import { Container } from "@/shared/components/ui/Container";
import { Section } from "@/shared/components/ui/Section";
import { Badge } from "@/shared/components/ui/Badge";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";
import { FileTree } from "@/shared/components/ui/FileTree";
import { Button } from "@/shared/components/ui/Button";
import Link from "next/link";

const installCommands: Record<AgentId, string> = {
  "claude-code": "npx arctis add {slug} --agent claude-code",
  opencode: "npx arctis add {slug} --agent opencode",
  codex: "npx arctis add {slug} --agent codex",
};

const fileTreeNodes = [
  { name: "SKILL.md", type: "file" as const, highlight: true },
  {
    name: "examples/",
    type: "folder" as const,
    children: [
      { name: "landing-page.tsx", type: "file" as const },
      { name: "dashboard.tsx", type: "file" as const },
    ],
  },
  {
    name: "references/",
    type: "folder" as const,
    children: [
      { name: "design-tokens.md", type: "file" as const },
      { name: "typography.md", type: "file" as const },
    ],
  },
  {
    name: "snippets/",
    type: "folder" as const,
    children: [
      { name: "hero-section.tsx", type: "file" as const },
      { name: "feature-grid.tsx", type: "file" as const },
    ],
  },
  { name: "arctis.json", type: "file" as const },
];

export function generateStaticParams() {
  return skills.map((s) => ({ slug: s.slug }));
}

export default function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = params as unknown as { slug: string };
  const skill = getSkillBySlug(slug);

  if (!skill) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Hero */}
      <Section glowAccent>
        <Container>
          <Link
            href="/skills"
            className="mb-6 inline-flex items-center gap-2 font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-[var(--transition-fast)]"
          >
            <span>{"<-"}</span>
            <span>Back to Skills</span>
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="accent">{CATEGORY_LABELS[skill.category]}</Badge>
            {skill.frameworks.map((f) => (
              <Badge key={f}>{f}</Badge>
            ))}
          </div>

          <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight md:text-5xl">
            {skill.name}
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            {skill.longDescription}
          </p>
        </Container>
      </Section>

      <HairlineDivider />

      {/* Supported Agents */}
      <Section>
        <Container>
          <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            SUPPORTED AGENTS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {skill.agents.map((agentId) => {
              const agent = AGENTS[agentId];
              if (!agent) return null;
              return (
                <div
                  key={agentId}
                  className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4"
                >
                  <div className="font-mono text-lg font-semibold text-[var(--color-foreground)]">
                    {agent.name}
                  </div>
                  <div className="mt-1 font-mono text-xs text-[var(--color-muted)]">
                    Fully supported
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <HairlineDivider />

      {/* Install Commands */}
      <Section>
        <Container>
          <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            INSTALLATION
          </div>
          <div className="space-y-3 max-w-lg">
            {skill.agents.map((agentId) => {
              const cmd = installCommands[agentId]?.replace("{slug}", skill.slug) ?? "";
              const agent = AGENTS[agentId];
              return (
                <div key={agentId}>
                  <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted-strong)]">
                    {agent?.name ?? agentId}
                  </div>
                  <CommandBlock command={cmd} />
                </div>
              );
            })}
            <div className="pt-3">
              <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted-strong)]">
                All agents
              </div>
              <CommandBlock command={skill.installCommand} />
            </div>
          </div>
        </Container>
      </Section>

      <HairlineDivider />

      {/* Best For / Not Good For */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                BEST FOR
              </div>
              <ul className="space-y-2">
                {skill.bestFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                  >
                    <span className="mt-0.5 shrink-0 text-[var(--color-accent)]">
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted-strong)]">
                NOT GOOD FOR
              </div>
              <ul className="space-y-2">
                {skill.notGoodFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                  >
                    <span className="mt-0.5 shrink-0 text-[var(--color-muted-strong)]">
                      -
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <HairlineDivider />

      {/* Example Prompt */}
      <Section>
        <Container>
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            EXAMPLE PROMPT
          </div>
          <div className="max-w-2xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6">
            <p className="font-mono text-sm leading-relaxed text-[var(--color-foreground)]">
              {skill.examplePrompt}
            </p>
          </div>
        </Container>
      </Section>

      <HairlineDivider />

      {/* Package Anatomy */}
      <Section>
        <Container>
          <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            SKILL PACKAGE ANATOMY
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <FileTree nodes={fileTreeNodes} />
            <div className="space-y-3">
              {[
                {
                  label: "SKILL.md",
                  desc: "Core instruction file with design rules, component patterns, and workflow conventions.",
                },
                {
                  label: "examples/",
                  desc: "Reference implementations your agent learns from.",
                },
                {
                  label: "references/",
                  desc: "Design tokens, typography scales, and CSS variable maps.",
                },
                {
                  label: "arctis.json",
                  desc: "Metadata: compatibility, framework requirements, agent support.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4"
                >
                  <div className="font-mono text-sm font-semibold text-[var(--color-accent)]">
                    {item.label}
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <HairlineDivider variant="accent" />

      {/* CTA */}
      <Section glowAccent>
        <Container className="text-center">
          <h2 className="mb-4 font-mono text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to install {skill.name}?
          </h2>
          <div className="mb-6 flex justify-center">
            <CommandBlock command={skill.installCommand} />
          </div>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/skills">
              <Button variant="primary" size="lg">
                Browse More Skills
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="secondary" size="lg">
                Read the Docs
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  );
}
