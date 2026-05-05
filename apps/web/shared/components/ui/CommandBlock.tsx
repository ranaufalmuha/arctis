"use client";

import { useState } from "react";

type CommandBlockProps = {
  command: string;
  className?: string;
};

export function CommandBlock({ command, className }: CommandBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`flex items-center justify-between border border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-3 font-mono text-sm ${className}`}
    >
      <code className="text-[var(--color-foreground)] select-all">{command}</code>
      <button
        onClick={copy}
        className="ml-4 shrink-0 border border-[var(--color-border)] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)] duration-[var(--transition-fast)]"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
