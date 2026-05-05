export function RegistryDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-2xl" aria-hidden="true">
      <div className="relative grid grid-cols-3 gap-3">
        {/* Skill panels (left column) */}
        <div className="col-span-1 flex flex-col gap-3">
          {["Brutalist UI", "Minimal SaaS", "Retro Web", "Admin Dashboard"].map((name, i) => (
            <div
              key={name}
              className="border border-[var(--color-border)] bg-[var(--color-panel-strong)] px-3 py-2"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                SKILL
              </div>
              <div className="font-mono text-xs text-[var(--color-foreground)]">
                {name}
              </div>
            </div>
          ))}
        </div>

        {/* ARCTIS registry hub (center) */}
        <div className="col-span-1 flex items-center justify-center">
          <div className="w-full border border-[var(--color-accent)] bg-[var(--color-panel)] p-6 text-center shadow-[0_0_40px_var(--color-accent-glow)]">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
              REGISTRY
            </div>
            <div className="mt-1 font-mono text-xl font-semibold text-[var(--color-foreground)]">
              ARCTIS
            </div>
            <div className="mt-2 font-mono text-[10px] text-[var(--color-muted)]">
              SKILL.md
            </div>
          </div>
        </div>

        {/* Agent panels (right column) */}
        <div className="col-span-1 flex flex-col gap-3">
          {["Claude Code", "OpenCode", "Codex"].map((name, i) => (
            <div
              key={name}
              className="border border-[var(--color-border)] bg-[var(--color-panel-strong)] px-3 py-2 text-right"
              style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                AGENT
              </div>
              <div className="font-mono text-xs text-[var(--color-foreground)]">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connecting lines (decorative arrows) */}
      <svg
        className="absolute inset-0 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1="30"
          y1="20"
          x2="45"
          y2="50"
          stroke="var(--color-border-strong)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />
        <line
          x1="30"
          y1="40"
          x2="45"
          y2="50"
          stroke="var(--color-border-strong)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />
        <line
          x1="30"
          y1="60"
          x2="45"
          y2="50"
          stroke="var(--color-border-strong)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />
        <line
          x1="30"
          y1="80"
          x2="45"
          y2="50"
          stroke="var(--color-border-strong)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />
        <line
          x1="55"
          y1="50"
          x2="70"
          y2="20"
          stroke="var(--color-border-strong)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />
        <line
          x1="55"
          y1="50"
          x2="70"
          y2="47"
          stroke="var(--color-border-strong)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />
        <line
          x1="55"
          y1="50"
          x2="70"
          y2="73"
          stroke="var(--color-border-strong)"
          strokeWidth="0.5"
          strokeDasharray="2 3"
        />
      </svg>
    </div>
  );
}
