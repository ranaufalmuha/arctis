"use client";

import { useEffect, useState, type ReactNode } from "react";
import { codeToHtml } from "shiki";
import clsx from "clsx";

export type CodeBlockProps = {
  children?: ReactNode;
  code?: string;
  lang?: string;
  showLineNumbers?: boolean;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

function CodeBlock({
  children,
  code,
  lang,
  showLineNumbers,
  className,
  ...props
}: CodeBlockProps) {
  return (
    <div
      className={clsx(
        "flex w-full min-w-0 flex-col overflow-visible border border-border text-left",
        className,
      )}
      {...props}
    >
      {code ? (
        <CodeBlockCode
          code={code}
          language={lang}
          showLineNumbers={showLineNumbers}
        />
      ) : (
        children
      )}
    </div>
  );
}

export type CodeBlockCodeProps = {
  code: string;
  language?: string;
  theme?: string;
  showLineNumbers?: boolean;
  showHeader?: boolean;
  className?: string;
} & React.HTMLProps<HTMLDivElement>;

function CodeBlockCode({
  code,
  language = "tsx",
  theme = "github-dark",
  showLineNumbers = false,
  showHeader = true,
  className,
  ...props
}: CodeBlockCodeProps) {
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function highlight() {
      if (!code) {
        setHighlightedHtml("<pre><code></code></pre>");
        return;
      }

      let html = await codeToHtml(code.trimEnd(), { lang: language, theme });

      if (showLineNumbers) {
        let i = 0;
        html = html.replace(
          /<span class="line[^"]*"/g,
          (match) =>
            `${match}><span style="display:inline-block;width:1.5rem;margin-right:1rem;text-align:right;color:inherit;opacity:0.5;user-select:none">${++i}</span`,
        );
      }

      if (!cancelled) setHighlightedHtml(html);
    }
    highlight();
    return () => {
      cancelled = true;
    };
  }, [code, language, theme, showLineNumbers]);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const classNames = clsx(
    "w-full min-w-0 overflow-auto bg-[var(--color-panel)] text-xs [&>pre]:px-block [&>pre]:py-block [&>pre]:!bg-transparent [&_code]:font-mono",
    className,
  );

  return (
    <div className="flex w-full min-w-0 flex-col">
      {showHeader && (
        <div className="flex items-center justify-between border-b border-border bg-panel text-muted">
          <span className="capitalize text-sm p-compact tracking-wide">
            {language || "code"}
          </span>
          <button
            onClick={copy}
            className="border-l border-border p-compact text-xs hover:border-border-strong transition-colors duration-(--transition-fast)"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}

      {highlightedHtml ? (
        <div
          className={classNames}
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          {...props}
        />
      ) : (
        <div className={classNames} {...props}>
          <pre className="whitespace-pre min-w-full">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export type CodeBlockGroupProps = React.HTMLAttributes<HTMLDivElement>;

function CodeBlockGroup({
  children,
  className,
  ...props
}: CodeBlockGroupProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between border-b border-border bg-panel px-inline py-compact",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { CodeBlockGroup, CodeBlockCode, CodeBlock };
