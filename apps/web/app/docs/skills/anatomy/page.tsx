import { DocPageShell } from "@/app/docs/_components/DocPageShell";
import { Section } from "@/shared/components/ui/Section";
import { HairlineDivider } from "@/shared/components/ui/HairlineDivider";
import { FileTree } from "@/shared/components/ui/FileTree";

export default function Page() {
  return (
    <DocPageShell href="/docs/skills/anatomy" title="Skill Anatomy">
      <Section>
        <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          Every ARCTIS skill follows a consistent file structure. Understanding
          this anatomy is essential for creating, debugging, and extending
          skills. Each file and directory has a specific purpose in the skill
          package.
        </p>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          File Structure
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[360px_1fr]">
          <FileTree
            nodes={[
              {
                name: "skill-name/",
                type: "folder",
                children: [
                  { name: "SKILL.md", type: "file", highlight: true },
                  {
                    name: "examples/",
                    type: "folder",
                    children: [
                      { name: "demo.tsx", type: "file" },
                      { name: "usage.tsx", type: "file" },
                    ],
                  },
                  {
                    name: "references/",
                    type: "folder",
                    children: [
                      { name: "design-tokens.json", type: "file" },
                      { name: "color-palette.json", type: "file" },
                    ],
                  },
                  {
                    name: "snippets/",
                    type: "folder",
                    children: [
                      { name: "button.tsx", type: "file" },
                      { name: "hero.tsx", type: "file" },
                      { name: "card.tsx", type: "file" },
                    ],
                  },
                  { name: "arctis.json", type: "file", highlight: true },
                  {
                    name: "agent-adapters/",
                    type: "folder",
                    children: [
                      { name: "claude-code.json", type: "file" },
                      { name: "opencode.json", type: "file" },
                      { name: "codex.yaml", type: "file" },
                    ],
                  },
                ],
              },
            ]}
          />

          <div className="space-y-5">
            {[
              {
                file: "SKILL.md",
                purpose: "The core instruction file. Contains the design system specification, component patterns, typography rules, layout conventions, and workflow decisions that the agent reads. This is the primary file the agent references during code generation.",
              },
              {
                file: "examples/",
                purpose: "Reference implementations that demonstrate the skill in action. Agents use these as style examples when generating new code. Each example should show a complete, working component built with the skill's patterns.",
              },
              {
                file: "references/",
                purpose: "Structured data files that the agent can parse programmatically. Design tokens, color palettes, spacing scales, and typography definitions in JSON format. Agents use these for precise, parameterized generation.",
              },
              {
                file: "snippets/",
                purpose: "Reusable code templates for common components. The agent copies and adapts these snippets when building new UIs. Snippets encode the skill's conventions into concrete, copyable patterns.",
              },
              {
                file: "arctis.json",
                purpose: "Package manifest that declares the skill's metadata: name, version, category, compatible agents, dependencies, and description. This file is required for registry publication and CLI installation.",
              },
              {
                file: "agent-adapters/",
                purpose: "Per-agent configuration files that translate the skill into each agent's native format. Claude Code uses JSON config, OpenCode uses a config schema, and Codex uses YAML. These adapters ensure the skill works identically across agents.",
              },
            ].map((item) => (
              <div
                key={item.file}
                className="border border-[var(--color-border)] bg-[var(--color-panel)] p-4"
              >
                <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-accent)]">
                  {item.file}
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          The arctis.json Manifest
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          Every skill must include an <code className="text-[var(--color-accent)]">arctis.json</code> at
          its root. This file declares the skill&apos;s identity and
          compatibility for the registry and CLI.
        </p>
        <div className="border border-[var(--color-border)] bg-[var(--color-panel)] p-6">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            arctis.json
          </div>
          <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-[var(--color-foreground)]">
            {`{
  "name": "prismatic-architecture",
  "version": "1.0.0",
  "category": "theme",
  "description": "High-contrast design system with black backgrounds and #ffeb50 accent",
  "agents": ["claude-code", "opencode", "codex"],
  "frameworks": ["react", "next.js", "tailwind-css"],
  "dependencies": [],
  "author": "arctis",
  "license": "MIT"
}`}
          </pre>
        </div>
      </Section>

      <HairlineDivider />

      <Section>
        <h2 className="mb-6 font-mono text-2xl font-semibold tracking-tight">
          Agent Adapters
        </h2>
        <p className="mb-6 text-base leading-relaxed text-[var(--color-muted)]">
          The <code className="text-[var(--color-accent)]">agent-adapters/</code> directory
          contains per-agent configuration files that translate the skill into
          the format each agent expects. The ARCTIS CLI copies the appropriate
          adapter during installation.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              file: "claude-code.json",
              agent: "Claude Code",
              desc: "JSON configuration injected into Claude Code's skills system. Defines skill metadata, instruction content pointer, and activation rules.",
            },
            {
              file: "opencode.json",
              agent: "OpenCode",
              desc: "Workspace-level configuration that registers the skill as an OpenCode extension. Declares the skill ID and points to the SKILL.md entry.",
            },
            {
              file: "codex.yaml",
              agent: "Codex",
              desc: "YAML custom instruction set imported into Codex's per-project configuration. Maps the skill's rules into Codex-native directives.",
            },
          ].map((item) => (
            <div
              key={item.file}
              className="border border-[var(--color-border)] bg-[var(--color-panel)] p-5"
            >
              <div className="mb-2 font-mono text-sm font-semibold text-[var(--color-accent)]">
                {item.file}
              </div>
              <div className="mb-2 font-mono text-xs text-[var(--color-muted)]">
                {item.agent}
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </DocPageShell>
  );
}
