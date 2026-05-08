"use client";

import { useState, useEffect } from "react";
import { createHighlighter, type Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

function getHighlighter(): Promise<Highlighter> {
  if (highlighterPromise) return highlighterPromise;
  highlighterPromise = createHighlighter({
    themes: ["github-dark"],
    langs: ["tsx", "typescript", "javascript", "jsx", "bash", "shell", "json", "css", "html", "markdown", "yaml", "toml", "rust"],
  });
  return highlighterPromise;
}

function addLineNumbers(html: string): string {
  let i = 0;
  return html.replace(
    /<span class="line[^"]*"/g,
    (match) =>
      `${match}><span style="display:inline-block;width:1.5rem;margin-right:1rem;text-align:right;color:inherit;opacity:0.5;user-select:none">${++i}</span`
  );
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export type CodeBlockProps = {
  code: string;
  lang?: string;
  showLineNumbers?: boolean;
};

export function CodeBlock({
  code,
  lang = "tsx",
  showLineNumbers = false,
}: CodeBlockProps) {
  const [html, setHtml] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getHighlighter().then((highlighter) => {
      if (cancelled) return;
      let result = highlighter.codeToHtml(code.trimEnd(), {
        lang,
        theme: "github-dark",
      });
      if (showLineNumbers) {
        result = addLineNumbers(result);
      }
      setHtml(result);
    });
    return () => {
      cancelled = true;
    };
  }, [code, lang, showLineNumbers]);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-panel)]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-[11px] text-white/50">
        <div className="flex items-center gap-2">
          <span className="uppercase tracking-wide">{lang || "code"}</span>
        </div>

        <button
          onClick={copy}
          className="border border-[var(--color-border)] px-2 py-0.5 text-[10px] hover:border-[var(--color-border-strong)]"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div
        className="overflow-auto p-3 text-xs text-left [&>pre]:!bg-transparent [&_code]:font-mono"
        dangerouslySetInnerHTML={{
          __html:
            html || `<pre><code>${escapeHtml(code)}</code></pre>`,
        }}
      />
    </div>
  );
}

/**
  Arctis UI Component — <CodeBlock>

  Created with 💛 by Ranaufal Muha
  https://ranaufalmuha.com

  Hi! Thank you for using this component.
  You're free to copy, modify, or use it in any project you like.

  If possible, please keep this small header as appreciation.
  It helps others know where the component came from ❤️

  Usage:
    import { CodeBlock } from "@arctis/ui";

    // Simple usage
    <CodeBlock code="pnpm add @arctis/ui" lang="bash" />

    // With line numbers
    <CodeBlock code={sourceCode} lang="tsx" showLineNumbers />
 */
