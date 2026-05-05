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
    "bg-[var(--color-foreground)] text-[var(--color-background)] border border-[var(--color-foreground)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] hover:border-[var(--color-accent)] hover:shadow-[0_0_32px_var(--color-accent-glow)]",
  secondary:
    "bg-transparent text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-panel-strong)] hover:shadow-[0_0_24px_var(--color-accent-glow)]",
  ghost:
    "bg-transparent text-[var(--color-muted)] border border-transparent hover:text-[var(--color-foreground)] hover:border-[var(--color-border)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-wider",
  md: "px-6 py-3 text-sm tracking-wider",
  lg: "px-8 py-4 text-base tracking-wider",
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
