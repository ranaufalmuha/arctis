import Link from "next/link";
import Image from "next/image";
import {
  LuCode,
  LuCheck,
  LuPaintbrush,
  LuLayoutGrid,
  LuWorkflow,
  LuGithub,
} from "react-icons/lu";
import { Button } from "@/shared/components/ui/Button";
import { skills } from "@/features/skills/utils/data";
import { AGENTS } from "@/shared/types/skills";

const featuredSkills = skills.slice(0, 4);

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
  "--color-panel": "rgba(0,0,0,0.02)",
  "--color-panel-strong": "rgba(0,0,0,0.04)",
} as React.CSSProperties;

function WhiteSection({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="bg-white"
      style={whiteSectionVars}
      data-section-theme="light"
    >
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
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 70% 50% at 50% 30%, black 15%, transparent 55%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 50% at 50% 30%, black 15%, transparent 55%)",
            }}
          />

          <div className="relative px-6 py-24 lg:px-10 lg:py-32">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-4 font-mono text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl text-balance">
                <span className="inline-block">Give your coding agent</span>
                <br />
                <span className="inline-block">better taste.</span>
              </h1>

              <p className="mx-auto mb-2 max-w-lg font-mono text-base leading-relaxed text-[var(--color-muted)] md:text-lg text-balance">
                ARCTIS is an open-source skill registry for AI coding agents.
              </p>
              <p className="mx-auto mb-8 font-mono text-sm text-[var(--color-muted-strong)]">
                Free and open source under the MIT license.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/docs">
                  <Button variant="primary" size="md">
                    Get Started
                  </Button>
                </Link>
                <Link
                  href="https://github.com/ranaufalmuha/arctis"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="secondary" size="md">
                    <LuGithub className="h-4 w-4" />
                    View on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2. TERMINAL ===== */}
        <section className="relative border-b border-[var(--color-border)] h-[640px] overflow-hidden flex justify-center items-end">
          <div
            className="full-bleed absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/background.jpg')" }}
          />
          <div className="relative w-full max-w-[800px] h-[527px] mx-4 sm:mx-8 bg-[#0a0a0a] px-5 py-5 border border-white/[0.06] outline outline-1 outline-offset-[3px] outline-white/[0.06]">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="font-mono text-sm leading-relaxed space-y-1.5">
              <div>
                <span className="text-green-400">$</span>{" "}
                <span className="text-[var(--color-foreground)]">
                  npx arctis add brutalist-ui --all
                </span>
              </div>
              <div>
                <span className="text-purple-400">◇</span>{" "}
                <span className="text-[var(--color-muted)]">
                  Select agent: Claude Code
                </span>
              </div>
              <div>
                <span className="text-purple-400">◇</span>{" "}
                <span className="text-muted">Installing brutalist-ui...</span>
              </div>
              <div>
                <span className="text-cyan-400">•</span>{" "}
                <span className="text-muted">
                  Next.js 15 · React 19 · Tailwind v4
                </span>
              </div>
              <div>
                <span className="text-green-400">✓</span>{" "}
                <span className="text-green-400">Skill installed in 2.3s</span>
              </div>
              <div>
                <span className="text-yellow-400">→</span>{" "}
                <span className="text-[var(--color-muted)]">
                  Next: restart your agent and start building
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 3. WORKS WITH ===== */}
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

        {/* ===== 4. INSTALL ===== */}
        <section className="border-b border-[var(--color-border)]">
          <div className="px-6 py-20 lg:px-10">
            <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-3 font-mono text-3xl font-bold tracking-tight md:text-4xl">
                  Getting started
                </h2>
                <p className="text-base leading-relaxed text-[var(--color-muted)]">
                  Install ARCTIS globally, open a new terminal session, then run the CLI.
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                    macOS / Linux
                  </div>
                  <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4">
                    <code className="font-mono text-sm text-[var(--color-foreground)] select-all">
                      curl -fsSL https://arctis.dev | bash
                    </code>
                  </div>
                </div>
                <div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                    Windows (PowerShell)
                  </div>
                  <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4">
                    <code className="font-mono text-sm text-[var(--color-foreground)] select-all">
                      irm https://arctis.dev/ps1 | iex
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. SKILL CATEGORIES ===== */}
        <section className="border-b border-[var(--color-border)]">
          <div className="px-6 pt-20 pb-12 lg:px-10">
            <div className="text-center">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                SKILL CATEGORIES
              </div>
              <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight md:text-4xl">
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
                href="/docs"
                className="group block p-6 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)] lg:px-10"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="flex items-center gap-2 font-mono text-lg font-semibold text-[var(--color-foreground)] transition-colors duration-[var(--transition-fast)]">
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
        </section>
      </div>

      {/* ===== 6. FEATURED SKILLS ===== */}
      <WhiteSection>
        <div className="px-6 pt-20 pb-12 lg:px-10">
          <div className="text-center">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              FEATURED SKILLS
            </div>
            <h2 className="mb-4 font-mono text-3xl font-bold tracking-tight md:text-4xl text-[var(--color-foreground)]">
              One skill. Multiple agents.
            </h2>
            <p className="text-base text-[var(--color-muted)]">
              Works across Claude Code, OpenCode, and Codex.
            </p>
          </div>
        </div>

        <div className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
          {featuredSkills.map((skill) => (
            <div key={skill.slug} className="grid grid-cols-1 md:grid-cols-2 h-[492px]">
              <div className="flex flex-col justify-center px-8 py-12 md:border-r md:border-[var(--color-border)]">
                <h3 className="mb-3 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
                  {skill.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--color-muted)]">
                  {skill.description}
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {skill.agents.map((a) => (
                    <span
                      key={a}
                      className="border border-[var(--color-border)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
                    >
                      {AGENTS[a]?.shortName ?? a}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center bg-[#0a0a0a] px-8 py-12 overflow-hidden">
                <div className="w-full max-w-md font-mono text-xs leading-relaxed space-y-1 text-left">
                  <div>
                    <span className="text-green-400">$</span>{" "}
                    <span className="text-[var(--color-muted)]">{skill.installCommand}</span>
                  </div>
                  <div>
                    <span className="text-purple-400">◇</span>{" "}
                    <span className="text-[var(--color-muted)]">Select agent: Claude Code</span>
                  </div>
                  <div>
                    <span className="text-purple-400">◇</span>{" "}
                    <span className="text-[var(--color-muted)]">Installing {skill.slug}...</span>
                  </div>
                  <div>
                    <span className="text-cyan-400">•</span>{" "}
                    <span className="text-[var(--color-muted)]">Next.js 15 · React 19 · Tailwind v4</span>
                  </div>
                  <div>
                    <span className="text-green-400">✓</span>{" "}
                    <span className="text-green-400">Skill installed in 2.3s</span>
                  </div>
                  <div>
                    <span className="text-yellow-400">→</span>{" "}
                    <span className="text-[var(--color-muted)]">Next: restart your agent and start building</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </WhiteSection>

      {/* ===== DARK SECTIONS ===== */}
      <div className="mx-auto max-w-7xl border-x border-[var(--color-border)]">
        {/* ===== 7. BENEFITS SPLIT ===== */}
        <section className="border-b border-[var(--color-border)]">
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
                    {col.side === "developers"
                      ? "WHY DEVELOPERS CHOOSE ARCTIS"
                      : "HOW AGENTS BENEFIT"}
                  </div>
                  <h3 className="mb-6 font-mono text-2xl font-semibold tracking-tight md:text-3xl">
                    {col.title}
                  </h3>
                </div>
                <div className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
                  {col.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 px-8 py-4 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)]"
                    >
                      <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-muted-strong)]" />
                      <span className="text-sm leading-relaxed text-[var(--color-muted)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 8. FINAL CTA ===== */}
        <section className="relative border-b border-[var(--color-border)] h-[200px] overflow-hidden flex items-center justify-center">
          <div
            className="full-bleed absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/background.jpg')" }}
          />
          <div className="relative text-center px-6">
            <Image
              src="/logo/logo-with-bg.svg"
              alt="ARCTIS"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>
        </section>
      </div>
    </>
  );
}
