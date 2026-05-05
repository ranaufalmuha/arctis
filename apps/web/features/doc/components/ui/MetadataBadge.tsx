import type { ReactNode } from "react";
import { Badge } from "@/shared/components/ui/Badge";

type MetadataBadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent";
};

export function MetadataBadge({ children, variant = "default" }: MetadataBadgeProps) {
  return <Badge variant={variant}>{children}</Badge>;
}
