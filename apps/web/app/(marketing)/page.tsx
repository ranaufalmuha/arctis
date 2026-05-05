import Link from "next/link";
import {
  LuFileText,
  LuFolderOpen,
  LuBookOpen,
  LuCode,
  LuFileJson,
  LuBot,
  LuCheck,
  LuPaintbrush,
  LuLayoutGrid,
  LuWorkflow,
  LuSearch,
  LuGithub,
  LuArrowRight,
  LuSparkles,
  LuTerminal,
} from "react-icons/lu";
import { Button } from "@/shared/components/ui/Button";
import { Badge } from "@/shared/components/ui/Badge";
import { CommandBlock } from "@/shared/components/ui/CommandBlock";
import { skills } from "@/features/skills/utils/data";
import { AGENTS } from "@/shared/types/skills";

const featuredSkills = skills.slice(0, 8);

const compatibilityStrip = [
  "Claude Code",
  "OpenCode",
  "Codex",
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "shadcn/ui",
];

const stackModules = [
  { label: "SKILL.md", desc: "Design rules, component patterns, and workflow conventions.", accent: true, icon: LuFileText },
  { label: "examples/", desc: "Complete page reference implementations.", icon: LuFolderOpen },
  { label: "references/", desc: "Design tokens, typography scales, CSS maps.", icon: LuBookOpen },
  { label: "snippets/", desc: "Reusable blocks: heroes, grids, CTAs, and more.", icon: LuCode },
  { label: "arctis.json", desc: "Metadata, compatibility, and framework requirements.", icon: LuFileJson },
  { label: "agent-adapters/", desc: "Per-agent config for Claude Code, OpenCode, Codex.", icon: LuBot },
];

const skillCategories = [
  {
    title: "Design Styles",
    slug: "design-style",
    desc: "Brutalist UI, Glassmorphism, Retro Web, and more.",
    skills: "4 skills",
    icon: LuPaintbrush,
  },
  {
    title: "Product Patterns",
    slug: "layout-pattern",
    desc: "Dashboards, portfolios, editorial sites, landing pages.",
    skills: "3 skills",
    icon: LuLayoutGrid,
  },
  {
    title: "Agent Workflows",
    slug: "industry-template",
    desc: "Industry templates with domain conventions baked in.",
    skills: "3 skills",
    icon: LuWorkflow,
  },
  {
    title: "Frontend Stacks",
    slug: "motion",
    desc: "Animation systems and interaction patterns for agents.",
    skills: "1 skill",
    icon: LuCode,
  },
];

const benefitColumns = [
  {
    side: "developers",
    title: "For Developers",
    items: [
      "Consistent design across every agent session",
      "No more re-pasting prompts or style guides",
      "Version-controlled rules your team can review",
      "One install works across all major agents",
    ],
  },
  {
    side: "agents",
    title: "For Agents",
    items: [
      "Structured instructions with explicit rules",
      "Design tokens as structured data, not suggestions",
      "Reference implementations to learn from",
      "Persistent skill memory across sessions",
    ],
  },
];

const whiteSectionVars = {
  "--color-background": "#ffffff",
  "--color-foreground": "#111827",
  "--color-muted": "#6b7280",
  "--color-muted-strong": "#4b5563",
  "--color-border": "rgba(0,0,0,0.12)",
  "--color-border-strong": "rgba(0,0,0,0.20)",
  "--color-border-accent": "rgba(217,119,6,0.30)",
  "--color-accent": "#d97706",
  "--color-accent-glow": "rgba(217,119,6,0.08)",
  "--color-panel": "rgba(0,0,0,0.02)",
  "--color-panel-strong": "rgba(0,0,0,0.04)",
} as React.CSSProperties;

function WhiteSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white" style={whiteSectionVars} data-section-theme="light">
      <div className="mx-auto max-w-7xl border-x border-b border-gray-300">
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* ===== DARK SECTIONS 1–3 ===== */}
      <div className="mx-auto max-w-7xl border-x border-[var(--color-border)]">
        {/* ===== 1. HERO ===== */}
        <section className="relative overflow-hidden border-b border-[var(--color-border)]">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 60%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 60%)",
            }}
          />
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />

          <div className="relative px-6 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
                <Badge variant="accent">OPEN-SOURCE</Badge>
                <Badge>SKILL REGISTRY</Badge>
                <Badge>v0.1.0</Badge>
              </div>

              <h1 className="mb-6 font-mono text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-7xl">
                Give your coding agent{" "}
                <span className="text-[var(--color-accent)]">better taste.</span>
              </h1>

              <p className="mx-auto mb-4 max-w-xl font-mono text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
                ARCTIS is an open-source skill registry for AI coding agents.
              </p>
              <p className="mx-auto mb-10 max-w-lg font-mono text-sm leading-relaxed text-[var(--color-muted)]">
                Browse and install reusable SKILL.md packages for Claude Code,
                OpenCode, and Codex. Components are not enough anymore.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/skills">
                  <Button variant="primary" size="lg">
                    <LuSearch className="h-4 w-4" />
                    Browse Skills
                  </Button>
                </Link>
                <Link
                  href="https://github.com/ranaufalmuha/arctis"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="secondary" size="lg">
                    <LuGithub className="h-4 w-4" />
                    View on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2. COMPATIBILITY STRIP ===== */}
        <div className="border-b border-[var(--color-border)] px-6 py-4 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
              WORKS WITH
            </span>
            {compatibilityStrip.map((name) => (
              <span
                key={name}
                className="font-mono text-xs text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors duration-[var(--transition-fast)]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* ===== 3. MANIFESTO ===== */}
        <section className="border-b border-[var(--color-border)]">
          <div className="px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                <LuSparkles className="h-3 w-3" />
                MANIFESTO
              </div>
              <h2 className="mb-6 font-mono text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Components are not enough anymore.
              </h2>
              <p className="text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
                AI coding agents can generate entire pages — but they lack design
                taste, product sense, and consistent output. Your agent needs
                more than components. It needs a design system it can understand,
                references it can learn from, and rules it can follow.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ===== WHITE SECTIONS 4–6 ===== */}

      {/* ===== 4. ARCTIS STACK ===== */}
      <WhiteSection>
        <div className="px-6 pt-20 pb-12 lg:px-10">
          <div className="text-center">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              THE ARCTIS STACK
            </div>
            <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight md:text-4xl text-[var(--color-foreground)]">
              Skills, not snippets.
            </h2>
            <p className="text-base text-[var(--color-muted)]">
              Structured, portable instruction packages — not loose prompts.
            </p>
          </div>
        </div>

        <div className="grid divide-x divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-3">
          {stackModules.map((mod) => (
            <div
              key={mod.label}
              className={`p-6 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)] lg:px-10 ${
                mod.accent ? "bg-[var(--color-panel)]" : ""
              }`}
            >
              <div className="mb-2 flex items-center gap-2">
                <mod.icon
                  className={`h-4 w-4 shrink-0 ${
                    mod.accent ? "text-[var(--color-accent)]" : "text-[var(--color-muted-strong)]"
                  }`}
                />
                <span
                  className={`font-mono text-lg font-semibold ${
                    mod.accent ? "text-[var(--color-accent)]" : "text-[var(--color-foreground)]"
                  }`}
                >
                  {mod.label}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </WhiteSection>

      {/* ===== 5. BENEFITS SPLIT ===== */}
      <WhiteSection>
        <div className="grid md:grid-cols-2">
          {benefitColumns.map((col) => (
            <div
              key={col.side}
              className={
                col.side === "developers"
                  ? "border-b border-[var(--color-border)] md:border-b-0 md:border-r"
                  : ""
              }
            >
              <div className="px-8 pt-8">
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted-strong)]">
                  {col.side === "developers" ? "WHY DEVELOPERS CHOOSE ARCTIS" : "HOW AGENTS BENEFIT"}
                </div>
                <h3 className="mb-6 font-mono text-2xl font-semibold tracking-tight md:text-3xl text-[var(--color-foreground)]">
                  {col.title}
                </h3>
              </div>
              <div className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
                {col.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 px-8 py-4 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)]"
                  >
                    <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                    <span className="text-sm leading-relaxed text-[var(--color-muted)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </WhiteSection>

      {/* ===== 6. SKILL CATEGORIES ===== */}
      <WhiteSection>
        <div className="px-6 pt-20 pb-12 lg:px-10">
          <div className="text-center">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              SKILL CATEGORIES
            </div>
            <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight md:text-4xl text-[var(--color-foreground)]">
              Built for agent-native development.
            </h2>
            <p className="text-base text-[var(--color-muted)]">
              Four categories covering every frontend pattern.
            </p>
          </div>
        </div>

        <div className="grid divide-x divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <Link
              key={cat.title}
              href={`/skills?category=${cat.slug}`}
              className="group block p-6 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)] lg:px-10"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="flex items-center gap-2 font-mono text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]">
                  <cat.icon className="h-4 w-4 shrink-0" />
                  {cat.title}
                </h3>
                <span className="border border-[var(--color-border)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-muted-strong)]">
                  {cat.skills}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {cat.desc}
              </p>
            </Link>
          ))}
        </div>
      </WhiteSection>

      {/* ===== DARK SECTIONS 7 ===== */}
      <div className="mx-auto max-w-7xl border-x border-[var(--color-border)]">
        {/* ===== 7. FEATURED SKILLS ===== */}
        <section className="border-b border-[var(--color-border)]">
          <div className="px-6 pt-20 pb-12 lg:px-10">
            <div className="text-center">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                FEATURED SKILLS
              </div>
              <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight md:text-4xl">
                One skill. Multiple agents.
              </h2>
              <p className="text-base text-[var(--color-muted)]">
                Works across Claude Code, OpenCode, and Codex.
              </p>
            </div>
          </div>

          <div className="grid divide-x divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSkills.map((skill) => (
              <Link
                key={skill.slug}
                href={`/skills/${skill.slug}`}
                className="group block p-5 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)] lg:px-10"
              >
                <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]">
                  {skill.name}
                </div>
                <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-[var(--color-muted)]">
                  {skill.description}
                </p>
                <div className="flex flex-wrap items-center gap-1">
                  {skill.agents.map((a) => (
                    <span
                      key={a}
                      className="border border-[var(--color-border)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
                    >
                      {AGENTS[a]?.shortName ?? a}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="border-t border-b border-[var(--color-border)] hover:bg-[var(--color-panel-strong)] transition-colors">
            <Link
              href="/skills"
              className="flex items-center justify-center gap-2 px-6 py-5 lg:px-10 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              View All 10 Skills
              <LuArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ===== 8. FINAL CTA ===== */}
        <section className="relative overflow-hidden border-b border-[var(--color-border)]">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--color-accent-glow)] blur-3xl" />

          <div className="relative px-6 py-24 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <LuTerminal className="mx-auto mb-6 h-8 w-8 text-[var(--color-accent)]" />
              <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Ready to give your agent{" "}
                <span className="text-[var(--color-accent)]">better taste</span>?
              </h2>
              <p className="mx-auto mb-8 max-w-md text-base text-[var(--color-muted)]">
                Browse the registry or contribute your own skill today.
              </p>
              <div className="mb-6 flex justify-center">
                <CommandBlock command="npx arctis add brutalist-ui --all" />
              </div>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/skills">
                  <Button variant="primary" size="lg">
                    <LuSearch className="h-4 w-4" />
                    Browse Skills
                  </Button>
                </Link>
                <Link href="/docs/contributing">
                  <Button variant="secondary" size="lg">
                    <LuGithub className="h-4 w-4" />
                    Contribute a Skill
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
