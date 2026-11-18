import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { CodeBlock } from "@/shared/components/CodeBlock";
import { CodeTabs } from "@/shared/components/CodeTabs";
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/lib/utils";
import { itemUrl } from "@/shared/constants/site";
import { SHOWCASE_ITEMS, type ShowcaseItem } from "../data/components";
import { Playground } from "./Playground";

type RegistryFile = { content?: string };

const PACKAGE_MANAGERS = [
  { label: "pnpm", runner: "pnpm dlx" },
  { label: "npm", runner: "npx" },
  { label: "yarn", runner: "yarn dlx" },
  { label: "bun", runner: "bunx --bun" },
] as const;

export function ComponentDetail({ item }: { item: ShowcaseItem }) {
  const index = SHOWCASE_ITEMS.findIndex((entry) => entry.name === item.name);
  const next = SHOWCASE_ITEMS[(index + 1) % SHOWCASE_ITEMS.length];
  const [source, setSource] = useState<string | null>(null);
  const [tab, setTab] = useState<"preview" | "code">("preview");

  useEffect(() => {
    const controller = new AbortController();
    setSource(null);
    fetch(`${import.meta.env.BASE_URL}r/${item.name}.json`, {
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((data: { files?: RegistryFile[] }) => {
        const content = data.files?.[0]?.content;
        if (typeof content === "string") setSource(content);
      })
      .catch(() => {
        if (!controller.signal.aborted) setSource("");
      });
    return () => controller.abort();
  }, [item.name]);

  return (
    <div>
      <title>{`${item.title} — ARCTIS`}</title>
      <meta name="description" content={item.description} />

      <Link
        to="/docs/components"
        className="inline-flex items-center gap-1.5 text-caption text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3 w-3" />
        All components
      </Link>

      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{item.category}</Badge>
          <Badge>{item.dependencies.length} dependencies</Badge>
        </div>
        <h1 className="type-page-title mt-3">{item.title}</h1>
        <p className="text-lead mt-3 text-muted-foreground">
          {item.description}
        </p>
      </header>

      <div
        role="tablist"
        aria-label="Component view"
        className="mt-6 -ml-3 flex items-center gap-1"
      >
        {(["preview", "code"] as const).map((value) => (
          <button
            key={value}
            type="button"
            role="tab"
            id={`${value}-tab`}
            aria-selected={tab === value}
            aria-controls={`${value}-panel`}
            onClick={() => setTab(value)}
            className={cn(
              "cursor-pointer rounded-control px-3 py-2 text-caption font-medium capitalize transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              tab === value
                ? "bg-panel-strong text-foreground"
                : "text-muted-foreground hover:bg-panel hover:text-foreground",
            )}
          >
            {value}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id="preview-panel"
        aria-labelledby="preview-tab"
        hidden={tab !== "preview"}
        className="mt-7 flex flex-col gap-12"
      >
        <Playground item={item} />

        <section aria-labelledby="props-heading">
          <h2
            id="props-heading"
            className="text-title-sm font-semibold tracking-tight"
          >
            Props
          </h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-caption">
              <thead>
                <tr>
                  <th className="border-b border-border py-2 pr-3 text-overline font-medium text-muted-strong">
                    Name
                  </th>
                  {["Type", "Default", "Description"].map((heading) => (
                    <th
                      key={heading}
                      className="border-b border-border px-3 py-2 text-overline font-medium text-muted-strong"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {item.props.map((prop) => (
                  <tr key={prop.name} className="border-b border-border">
                    <td className="py-3 pr-3 font-mono text-caption text-foreground">
                      {prop.name}
                    </td>
                    <td className="px-3 py-3 font-mono text-caption text-accent">
                      {prop.type}
                    </td>
                    <td className="px-3 py-3 font-mono text-caption text-muted-foreground">
                      {prop.default ?? "—"}
                    </td>
                    <td className="px-3 py-3 text-caption text-muted-foreground">
                      {prop.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div
        role="tabpanel"
        id="code-panel"
        aria-labelledby="code-tab"
        hidden={tab !== "code"}
        className="mt-7 flex flex-col gap-12"
      >
        <section aria-labelledby="installation-heading">
          <h2
            id="installation-heading"
            className="text-title-sm font-semibold tracking-tight"
          >
            Installation
          </h2>
          <div className="mt-5">
            <CodeTabs
              tabs={PACKAGE_MANAGERS.map((manager) => ({
                label: manager.label,
                code: `${manager.runner} shadcn@latest add @arctis/${item.name}`,
                language: "bash",
              }))}
            />
          </div>
          <p className="mt-3 text-caption text-muted-foreground">
            Namespace installs need{" "}
            <code className="font-mono text-foreground">@arctis</code> in{" "}
            <code className="font-mono text-foreground">components.json</code>.{" "}
            <Link
              to="/docs#namespace"
              className="text-accent underline underline-offset-2"
            >
              Setup instructions
            </Link>
          </p>
        </section>

        <section aria-labelledby="usage-heading">
          <h2
            id="usage-heading"
            className="text-title-sm font-semibold tracking-tight"
          >
            Usage
          </h2>
          <div className="mt-5">
            <CodeBlock code={item.usage} language="tsx" collapsible />
          </div>
        </section>

        <section aria-labelledby="code-heading">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2
              id="code-heading"
              className="text-title-sm font-semibold tracking-tight"
            >
              Code
            </h2>
            <a
              href={itemUrl(item.name)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-caption font-medium text-accent transition-opacity hover:opacity-80"
            >
              View registry JSON
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
          <div className="mt-5">
            {source ? (
              <CodeBlock code={source} language="tsx" collapsible />
            ) : (
              <div className="type-eyebrow rounded-card border border-border bg-panel/60 p-6 text-center text-muted-strong">
                {source === null ? "Loading source" : "Source unavailable"}
              </div>
            )}
          </div>
        </section>
      </div>

      <nav
        className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        aria-label="Component navigation"
      >
        <Link
          to="/docs/components"
          className="rounded-control border border-border px-4 py-2 text-caption text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
        >
          ← Catalog
        </Link>
        <Link
          to={`/docs/components/${next.name}`}
          className="btn btn-outline btn-sm group gap-2 hover:border-border-accent"
        >
          Next: {next.title}
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </nav>
    </div>
  );
}
