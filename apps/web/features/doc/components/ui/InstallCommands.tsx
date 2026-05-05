"use client";

import { useState } from "react";
import { CodeBlock } from "@arctis/ui";

type InstallCommandProps = {
  commands: { agent: string; command: string }[];
  allCommand: string;
};

export function InstallCommands({ commands, allCommand }: InstallCommandProps) {
  const [selected, setSelected] = useState("all");

  const tabs = [
    { key: "all", label: "All" },
    { key: "claude-code", label: "Claude" },
    { key: "opencode", label: "OpenCode" },
    { key: "codex", label: "Codex" },
  ];

  const currentCommand =
    selected === "all"
      ? allCommand
      : commands.find((c) =>
          c.agent.toLowerCase().includes(selected.toLowerCase()),
        )?.command ?? allCommand;

  return (
    <div>
      <div className="mb-3 flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelected(tab.key)}
            className={`border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] transition-all duration-[var(--transition-fast)] ${
              selected === tab.key
                ? "border-[var(--color-accent)] text-[var(--color-foreground)]"
                : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <CodeBlock code={currentCommand} lang="bash" />
    </div>
  );
}
