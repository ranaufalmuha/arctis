import type { ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

export function ShowcaseCard({
  href,
  title,
  description,
  preview,
  className,
}: {
  href: string;
  title: string;
  description: string;
  preview: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={href}
      className={cn(
        "surface-card group flex flex-col overflow-hidden",
        className,
      )}
    >
      <div className="aspect-video w-full overflow-hidden border-b border-border bg-panel/50">
        {preview}
      </div>
      <div className="p-4">
        <h2 className="text-title-sm font-semibold tracking-tight">{title}</h2>
        <p className="mt-1.5 line-clamp-2 text-caption text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
}
