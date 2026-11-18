import {
  useDeferredValue,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useSearchParams } from "react-router";
import { Search, X } from "lucide-react";
import { Kbd } from "@/shared/components/ui/kbd";
import { CATEGORIES, type ComponentCategory } from "@/shared/constants/catalog";
import { cn } from "@/lib/utils";
import { SHOWCASE_ITEMS } from "../data/components";
import { DemoFrame } from "./DemoFrame";
import { ShowcaseCard } from "@/shared/components/ShowcaseCard";

type CategoryFilter = ComponentCategory | "all";

function isCategory(value: string | null): value is ComponentCategory {
  return CATEGORIES.some((category) => category.id === value);
}

export function Catalog() {
  const [params, setParams] = useSearchParams();
  const categoryParam = params.get("category");
  const category: CategoryFilter = isCategory(categoryParam)
    ? categoryParam
    : "all";
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = SHOWCASE_ITEMS.filter((item) => {
    const matchesCategory = category === "all" || item.category === category;
    const needle = deferredQuery.trim().toLowerCase();
    const matchesQuery =
      needle.length === 0 ||
      `${item.name} ${item.title} ${item.description} ${item.category}`
        .toLowerCase()
        .includes(needle);
    return matchesCategory && matchesQuery;
  });

  function setCategory(next: CategoryFilter) {
    const updated = new URLSearchParams(params);
    if (next === "all") updated.delete("category");
    else updated.set("category", next);
    setParams(updated, { replace: true });
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target;
      const typing =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement;
      if (typing) return;
      if (
        event.key === "/" ||
        (event.key === "k" && (event.metaKey || event.ctrlKey))
      ) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div>
      <title>Components — ARCTIS</title>
      <meta
        name="description"
        content="Browse the ARCTIS React component registry. Live previews, props, source, and install commands."
      />

      <header>
        <p className="type-eyebrow text-accent">
          Registry / {String(SHOWCASE_ITEMS.length).padStart(2, "0")} items
        </p>
        <h1 className="type-page-title mt-3">The component catalog.</h1>
        <p className="text-lead mt-3 text-muted-foreground">
          Every item ships as source with documented props, a live preview, and
          a shadcn registry entry.
        </p>
      </header>

      <div className="mt-6 flex flex-col gap-3 rounded-shell border border-border bg-card/60 p-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-muted-strong" />
          <label htmlFor="catalog-search" className="sr-only">
            Search components
          </label>
          <input
            ref={inputRef}
            id="catalog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search components..."
            className="h-10 w-full rounded-control border border-border bg-background pr-9 pl-9 text-caption text-foreground transition-colors placeholder:text-muted-strong hover:border-border-strong focus-visible:border-accent focus-visible:outline-none"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer rounded-control p-1 text-muted-strong hover:bg-panel-strong hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </button>
          ) : (
            <span className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2">
              <Kbd>/</Kbd>
            </span>
          )}
        </div>

        <div
          className="flex flex-wrap gap-1.5"
          role="group"
          aria-label="Filter by category"
        >
          <FilterButton
            active={category === "all"}
            onClick={() => setCategory("all")}
          >
            All
          </FilterButton>
          {CATEGORIES.map((item) => (
            <FilterButton
              key={item.id}
              active={category === item.id}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
            </FilterButton>
          ))}
        </div>
      </div>

      <p
        aria-live="polite"
        className="mt-6 font-mono text-caption text-muted-strong"
      >
        {filtered.length} result{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-3 grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
          {filtered.map((item) => (
            <ShowcaseCard
              key={item.name}
              href={`/docs/components/${item.name}`}
              title={item.title}
              description={item.description}
              preview={
                <DemoFrame
                  name={item.name}
                  compact
                  className="h-full min-h-0 rounded-none border-0 bg-transparent"
                />
              }
            />
          ))}
        </div>
      ) : (
        <div className="mt-3 rounded-shell border border-border bg-card/60 p-12 text-center">
          <p className="type-section-title">No components found.</p>
          <p className="text-body-sm mt-2 text-muted-foreground">
            Try a different query or category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="mt-4 cursor-pointer rounded-control border border-border px-4 py-2 text-caption font-medium hover:border-border-strong hover:bg-panel"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "cursor-pointer rounded-control border px-3 py-1.5 text-caption font-medium transition-colors",
        active
          ? "border-border-accent bg-accent-glow text-accent"
          : "border-transparent text-muted-foreground hover:bg-panel-strong hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
