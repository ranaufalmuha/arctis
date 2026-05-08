type FeatureGridProps = {
  features: { label: string }[];
};

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-2 border-t border-l border-[var(--color-border)]">
      {features.map((feature) => (
        <div
          key={feature.label}
          className="flex items-center gap-2 border-b border-r border-[var(--color-border)] px-3 py-2 transition-colors duration-[var(--transition-fast)] hover:bg-[var(--color-panel-strong)]"
        >
          <span className="text-[10px] text-[var(--color-accent)]">+</span>
          <span className="font-mono text-[11px] text-[var(--color-foreground)]">
            {feature.label}
          </span>
        </div>
      ))}
    </div>
  );
}
