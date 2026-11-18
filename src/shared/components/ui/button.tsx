import * as React from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  default: "btn-primary",
  outline: "btn-outline",
  ghost: "btn-ghost",
  accent: "btn-accent",
} as const;

const SIZES = {
  sm: "btn-sm",
  default: "btn-md",
  lg: "btn-lg",
} as const;

export type ButtonProps = React.ComponentProps<"button"> & {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
};

export function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      data-slot="button"
      type={type}
      className={cn(
        "btn cursor-pointer",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    />
  );
}
