import clsx from "clsx";

type HairlineDividerProps = {
  className?: string;
  variant?: "default" | "accent" | "strong";
};

const variantStyles = {
  default: "border-[var(--color-border)]",
  accent: "border-[var(--color-border-accent)]",
  strong: "border-[var(--color-border-strong)]",
};

export function HairlineDivider({
  className,
  variant = "default",
}: HairlineDividerProps) {
  return (
    <hr
      className={clsx(
        "border-0 border-t",
        variantStyles[variant],
        className,
      )}
    />
  );
}
