"use client";

import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

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
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#050509]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-[11px] text-white/50">
        <div className="flex items-center gap-2">
          <span className="uppercase tracking-wide">{lang || "code"}</span>
        </div>

        <button
          onClick={copy}
          className="rounded-lg border border-white/20 px-2 py-0.5 text-[10px] hover:border-white/40"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Body */}
      <Highlight
        theme={themes.okaidia}
        code={code.trimEnd()}
        language={lang as string}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} overflow-auto p-3 text-xs`}
            style={style}
          >
            {tokens.map((line, i) => {
              // Prism sometimes inserts the last blank line → completely discards the blank line
              const isLastEmptyLine =
                i === tokens.length - 1 &&
                line.length === 1 &&
                line[0]!.content.trim() === "";

              if (isLastEmptyLine) return null;

              return (
                <div key={i} {...getLineProps({ line })} className="flex gap-4">
                  {showLineNumbers && (
                    <span className="select-none opacity-50">{i + 1}</span>
                  )}

                  <span className="flex-1">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
}

/**
  Arctis UI Component — <CodeBlock>
 
  Created with 💛 by Ranaufal Muha
  https://ranaufalmuha.com
 
  Hi! Thank you for using this component.
  You’re free to copy, modify, or use it in any project you like.
 
  If possible, please keep this small header as appreciation.
  It helps others know where the component came from ❤️
 
  Usage:
    import { CodeBlock } from "@arctis/ui";
 
    // Simple usage
    <CodeBlock code="pnpm add @arctis/ui" lang="bash" />
 
    // With line numbers
    <CodeBlock code={sourceCode} lang="tsx" showLineNumbers />
 */
