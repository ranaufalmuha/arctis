"use client";

import { useState, useMemo } from "react";
import { skills } from "@/features/skills/utils/data";
import { CATEGORY_LABELS, AGENTS } from "@/features/skills/interfaces";
import type { SkillCategory, AgentId } from "@/features/skills/interfaces";
import { Container } from "@/shared/components/ui/Container";
import { Section } from "@/shared/components/ui/Section";
import { SkillCard } from "@/shared/components/ui/SkillCard";
import { GridPanel } from "@/shared/components/ui/GridPanel";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";

const categories: (SkillCategory | "all")[] = [
  "all",
  "design-style",
  "layout-pattern",
  "industry-template",
  "interaction",
  "motion",
];

const agents: (AgentId | "all")[] = ["all", "claude-code", "opencode", "codex"];

export default function SkillsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<SkillCategory | "all">("all");
  const [agent, setAgent] = useState<AgentId | "all">("all");

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      const matchSearch =
        !search ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "all" || s.category === category;
      const matchAgent = agent === "all" || s.agents.includes(agent);
      return matchSearch && matchCategory && matchAgent;
    });
  }, [search, category, agent]);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Section glowAccent>
        <Container>
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
            SKILL REGISTRY
          </div>
          <h1 className="mb-2 font-mono text-4xl font-bold tracking-tight md:text-5xl">
            Browse Skills
          </h1>
          <p className="max-w-lg text-base text-[var(--color-muted)]">
            Installable SKILL.md packages for Claude Code, OpenCode, and Codex.
          </p>
        </Container>
      </Section>

      <HairlineDivider />

      {/* Filters */}
      <div className="border-b border-[var(--color-border)]">
        <Container className="py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                Search
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search skills..."
                className="w-full border border-[var(--color-border)] bg-[var(--color-panel)] px-3 py-2 font-mono text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-strong)] outline-none focus:border-[var(--color-border-strong)] transition-colors duration-[var(--transition-fast)]"
              />
            </div>

            <div className="flex flex-wrap gap-6">
              {/* Category filter */}
              <div>
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                  Category
                </label>
                <div className="flex flex-wrap gap-1">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategory(c)}
                      className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-[var(--transition-fast)] ${
                        category === c
                          ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent-glow)]"
                          : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)]"
                      }`}
                    >
                      {c === "all" ? "All" : CATEGORY_LABELS[c]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Agent filter */}
              <div>
                <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted)]">
                  Agent
                </label>
                <div className="flex flex-wrap gap-1">
                  {agents.map((a) => (
                    <button
                      key={a}
                      onClick={() => setAgent(a)}
                      className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-[var(--transition-fast)] ${
                        agent === a
                          ? "border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent-glow)]"
                          : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)]"
                      }`}
                    >
                      {a === "all" ? "All" : AGENTS[a]?.name ?? a}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Results */}
      <Section>
        <Container>
          <div className="mb-6 flex items-center gap-2">
            <span className="font-mono text-xs text-[var(--color-muted)]">
              {filtered.length} skill{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {filtered.length > 0 ? (
            <GridPanel cols={3}>
              {filtered.map((skill) => (
                <SkillCard key={skill.slug} skill={skill} />
              ))}
            </GridPanel>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 font-mono text-5xl text-[var(--color-muted-strong)]">
                { }
              </div>
              <p className="font-mono text-sm text-[var(--color-muted)]">
                No skills match your filters.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
