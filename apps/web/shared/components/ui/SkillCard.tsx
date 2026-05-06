import Link from "next/link";
import type { Skill } from "@/shared/types/skills";
import { CATEGORY_LABELS, AGENTS } from "@/shared/types/skills";
import { Badge } from "./Badge";
import { CommandBlock } from "./CommandBlock";

type SkillCardProps = {
  skill: Skill;
  className?: string;
};

export function SkillCard({ skill, className }: SkillCardProps) {
  return (
    <Link
      href={`/docs/themes/${skill.slug}`}
      className={`group block border border-[var(--color-border)] bg-[var(--color-panel)] p-5 transition-all hover:border-[var(--color-border-strong)] hover:bg-[var(--color-panel-strong)] ${className}`}
    >
      <div className="mb-3 flex items-center gap-2">
        <Badge variant="outline">{CATEGORY_LABELS[skill.category]}</Badge>
      </div>
      <h3 className="mb-2 font-mono text-lg font-semibold text-[var(--color-foreground)] transition-colors duration-[var(--transition-fast)]">
        {skill.name}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-[var(--color-muted)]">
        {skill.description}
      </p>
      <div className="mb-4 flex flex-wrap items-center gap-1.5">
        {skill.agents.map((a) => (
          <Badge key={a} variant="outline">
            {AGENTS[a]?.shortName ?? a}
          </Badge>
        ))}
      </div>
      <CommandBlock command={skill.installCommand} />
    </Link>
  );
}
