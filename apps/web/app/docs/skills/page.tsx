import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Badge } from "@/shared/components/ui/Badge";

export default function Page() {
  return (
    <DocPageShell href="/docs/skills" title="Browse All Skills">
      <div className="mb-10">
        <p className="max-w-2xl font-mono text-lg leading-relaxed text-[var(--color-muted)]">
          ARCTIS skills are portable instruction packages that teach AI coding
          agents design taste, frontend patterns, and workflow rules. Each skill
          is a self-contained directory with a SKILL.md specification that
          your agent reads at startup.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Skill Categories
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Skills are organized into four categories. Each category serves a
          distinct role in the skill composition model.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[var(--color-border)]">
          {[
            {
              category: "Themes",
              badge: "THEME",
              desc: "Complete design systems that define the visual language of your project. A Theme sets the color palette, typography scale, spacing rhythm, component styling, and overall aesthetic direction.",
            },
            {
              category: "Add-ons",
              badge: "ADD-ON",
              desc: "Self-contained UI patterns and interactive features. Add-ons layer on top of any Theme to add animations, scroll effects, custom cursors, particle fields, and other interactive flourishes.",
            },
            {
              category: "Rules",
              badge: "RULE",
              desc: "Constraint layers that enforce design decisions globally. Rules control border radius, spacing grids, accent color restraint, contrast ratios, motion accessibility, and metadata conventions.",
            },
            {
              category: "Agents",
              badge: "AGENT",
              desc: "Agent-specific configuration adapters. Agent skills translate the ARCTIS skill format into the native configuration format expected by each supported coding agent.",
            },
          ].map((item) => (
            <div
              key={item.category}
              className="border-b border-r border-[var(--color-border)] p-5 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)]"
            >
              <div className="mb-3">
                <Badge variant="accent">{item.badge}</Badge>
              </div>
              <h3 className="mb-2 font-mono text-lg font-semibold text-[var(--color-foreground)]">
                {item.category}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          Composable Skill Model
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          ARCTIS skills are designed to be composed. You combine one Theme with
          multiple Add-ons, layered with Rules and Agent adapters to create a
          complete instruction set for your agent.
        </p>
        <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-6">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            COMPOSITION FORMULA
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
            <span className="border border-[var(--color-border-accent)] bg-[var(--color-accent-glow)] px-3 py-1.5 text-[var(--color-accent)]">
              1 Theme
            </span>
            <span className="text-[var(--color-muted)]">+</span>
            <span className="border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-foreground)]">
              N Add-ons
            </span>
            <span className="text-[var(--color-muted)]">+</span>
            <span className="border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-foreground)]">
              N Rules
            </span>
            <span className="text-[var(--color-muted)]">+</span>
            <span className="border border-[var(--color-border)] px-3 py-1.5 text-[var(--color-foreground)]">
              Agent(s)
            </span>
          </div>
        </div>
        <div className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--color-muted)]">
          <p>
            <strong className="text-[var(--color-foreground)]">One Theme</strong>
            {" "}— Pick exactly one Theme. Themes are comprehensive and mutually exclusive; combining two Themes creates conflicting design rules.
          </p>
          <p>
            <strong className="text-[var(--color-foreground)]">Multiple Add-ons</strong>
            {" "}— Stack as many Add-ons as you need. They are designed to compose without conflict since each handles an isolated interaction or visual effect.
          </p>
          <p>
            <strong className="text-[var(--color-foreground)]">Multiple Rules</strong>
            {" "}— Layer constraints to tighten your design output. Rules stack additively and enforce consistency across all generated code.
          </p>
          <p>
            <strong className="text-[var(--color-foreground)]">One or More Agents</strong>
            {" "}— Install into every agent you use. The same skill adapts automatically to each agent&apos;s native format.
          </p>
        </div>
      </div>

      <div>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight text-[var(--color-foreground)]">
          How Skills Compose
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Below is a concrete example of how skills compose into a complete
          design instruction set for your agent.
        </p>
        <div className="divide-y divide-[var(--color-border)] border-t border-b border-[var(--color-border)]">
          {[
            {
              label: "Start with a Theme",
              desc: "Prismatic Architecture — defines the visual foundation: black background, white text, #ffeb50 accent, hard borders, zero radius, monospace labels.",
            },
            {
              label: "Add interaction layers",
              desc: "GSAP + Shadcn — adds scroll-triggered animations and production-ready components to the base theme.",
            },
            {
              label: "Apply design constraints",
              desc: "Zero Radius — enforces design rules that keep the output consistent and on-brand.",
            },
            {
              label: "Install into your agent",
              desc: "Run one command targeting --all agents, and every agent you use gets the full composed instruction set.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="px-5 py-4 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)]"
            >
              <div className="mb-1 font-mono text-xs font-semibold text-[var(--color-accent)]">
                {i + 1}. {step.label}
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DocPageShell>
  );
}
