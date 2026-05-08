type PreviewCardProps = {
  title: string;
  caption: string;
  tags: string[];
};

export function PreviewCard({ title, caption, tags }: PreviewCardProps) {
  return (
    <div className="group border-b border-r border-[var(--color-border)] p-4 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)]">
      <div className="mb-3 flex h-20 items-center justify-center border border-[var(--color-border)] bg-[var(--color-background)]">
        <div className="flex items-center gap-2">
          <div className="h-2 w-6 border border-[var(--color-accent)] bg-[var(--color-accent-glow)]" />
          <div className="h-2 w-10 border border-[var(--color-border-strong)]" />
          <div className="h-2 w-4 border border-[var(--color-border)]" />
        </div>
      </div>
      <div className="mb-1 font-mono text-sm font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--transition-fast)]">
        {title}
      </div>
      <p className="mb-3 font-mono text-[11px] leading-relaxed text-[var(--color-muted)]">
        {caption}
      </p>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-[var(--color-border)] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--color-muted-strong)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
