import { useEffect, useState, type ComponentProps } from "react";
import { Check, ChevronDown, ChevronUp, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCopy } from "@/shared/hooks/use-copy";

const LANGS = new Set(["tsx", "json", "bash"]);

// Warm syntax themes so code sits in the same family as the yellow accent.
const token = (foreground: string, scope: string[]) => ({
  scope,
  settings: { foreground },
});

const ARCTIS_DARK = {
  name: "arctis-dark",
  type: "dark" as const,
  settings: [
    token("#7d7566", [
      "comment",
      "punctuation.definition.comment",
      "string.comment",
    ]),
    token("#ffd24a", [
      "keyword",
      "keyword.control",
      "storage",
      "storage.type",
      "entity.name.tag",
      "support.type",
      "variable.language",
    ]),
    token("#c8d98a", [
      "string",
      "string.quoted",
      "string.template",
      "constant.character",
    ]),
    token("#f0b45e", [
      "constant.numeric",
      "constant.language",
      "support.constant",
    ]),
    token("#ffe89a", [
      "entity.name.function",
      "support.function",
      "variable.function",
      "entity.name.type",
      "support.class",
    ]),
    token("#f7f4ea", [
      "variable",
      "meta.object-literal.key",
      "entity.other.attribute-name",
    ]),
    token("#a8a292", ["punctuation", "meta.brace", "keyword.operator"]),
  ],
  colors: { "editor.foreground": "#f7f4ea" },
};

const ARCTIS_LIGHT = {
  name: "arctis-light",
  type: "light" as const,
  settings: [
    token("#8a8375", [
      "comment",
      "punctuation.definition.comment",
      "string.comment",
    ]),
    token("#7a5c00", [
      "keyword",
      "keyword.control",
      "storage",
      "storage.type",
      "entity.name.tag",
      "support.type",
      "variable.language",
    ]),
    token("#4d6320", [
      "string",
      "string.quoted",
      "string.template",
      "constant.character",
    ]),
    token("#8a5a00", [
      "constant.numeric",
      "constant.language",
      "support.constant",
    ]),
    token("#5a4700", [
      "entity.name.function",
      "support.function",
      "variable.function",
      "entity.name.type",
      "support.class",
    ]),
    token("#1a1713", [
      "variable",
      "meta.object-literal.key",
      "entity.other.attribute-name",
    ]),
    token("#5b564b", ["punctuation", "meta.brace", "keyword.operator"]),
  ],
  colors: { "editor.foreground": "#1a1713" },
};

let highlighterPromise: Promise<
  Awaited<ReturnType<typeof import("shiki/core").createHighlighterCore>>
> | null = null;

// Only the grammars the docs actually use, loaded on demand.
function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = (async () => {
      const [{ createHighlighterCore }, { createJavaScriptRegexEngine }] =
        await Promise.all([
          import("shiki/core"),
          import("shiki/engine/javascript"),
        ]);
      return createHighlighterCore({
        themes: [ARCTIS_LIGHT, ARCTIS_DARK],
        langs: [
          import("shiki/langs/tsx.mjs"),
          import("shiki/langs/json.mjs"),
          import("shiki/langs/bash.mjs"),
        ],
        engine: createJavaScriptRegexEngine(),
      });
    })().catch((error: unknown) => {
      highlighterPromise = null;
      throw error;
    });
  }
  return highlighterPromise;
}

export type CodeBlockProps = Omit<ComponentProps<"div">, "children"> & {
  code: string;
  language?: string;
  collapsible?: boolean;
};

export function CodeBlock({
  code,
  language = "tsx",
  collapsible = false,
  className,
  ...props
}: CodeBlockProps) {
  const [html, setHtml] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const { copied, copy } = useCopy();
  const canCollapse = collapsible && code.trim().split("\n").length > 14;

  useEffect(() => {
    let cancelled = false;
    const source = code.trimEnd();

    getHighlighter()
      .then((highlighter) =>
        highlighter.codeToHtml(source, {
          lang: LANGS.has(language) ? language : "plaintext",
          themes: { light: "arctis-light", dark: "arctis-dark" },
          defaultColor: false,
        }),
      )
      .then((result) => {
        if (!cancelled) setHtml(result);
      })
      .catch(() => {
        if (!cancelled) setHtml(null);
      });

    return () => {
      cancelled = true;
    };
  }, [code, language]);

  return (
    <div
      className={cn(
        "relative w-full min-w-0 overflow-hidden rounded-card border border-border bg-card text-left",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "hide-scrollbar w-full min-w-0 overflow-auto bg-background/40 p-4 pr-12 font-mono text-body-sm",
          canCollapse
            ? expanded
              ? "max-h-none pb-12"
              : "max-h-64 pb-12"
            : "max-h-[32rem]",
        )}
      >
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <pre className="whitespace-pre">
            <code>{code}</code>
          </pre>
        )}
      </div>
      <button
        type="button"
        onClick={() => void copy(code)}
        aria-label={copied ? "Copied" : "Copy code"}
        className="absolute top-2 right-2 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-control border border-border bg-card/90 text-muted-foreground backdrop-blur transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-accent" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
      </button>
      {canCollapse ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="absolute right-2 bottom-2 inline-flex cursor-pointer items-center gap-1 rounded-control border border-border bg-card/90 px-2.5 py-1.5 text-caption text-muted-foreground backdrop-blur transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {expanded ? (
            <ChevronUp className="h-3.5 w-3.5" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5" />
          )}
          {expanded ? "Collapse" : "Expand"}
        </button>
      ) : null}
    </div>
  );
}
