import { type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-foreground)] text-[var(--color-background)] border border-[var(--color-foreground)] hover:opacity-90",
  secondary:
    "bg-transparent text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-panel-strong)]",
  ghost:
    "bg-transparent text-[var(--color-muted)] border border-transparent hover:text-[var(--color-foreground)] hover:border-[var(--color-border)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-[0.1em]",
  md: "px-6 py-3 text-sm tracking-[0.1em]",
  lg: "px-8 py-4 text-base tracking-[0.1em]",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center gap-2 font-medium uppercase transition-all duration-[var(--transition-fast)] cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
