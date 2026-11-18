import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { ArrowUpRight, Check, ChevronDown, Sparkles } from "lucide-react";
import { SHOWCASE_ITEMS } from "../data/components";
import { CATEGORIES } from "@/shared/constants/catalog";
import { Badge } from "@/shared/components/ui/badge";
import { SITE } from "@/shared/constants/site";
import { cn } from "@/lib/utils";

const BLOCK_LINKS = [
  ["#overview", "Overview"],
  ["#available", "Available blocks"],
  ["#install", "Installing a block"],
  ["#anatomy", "Anatomy"],
  ["#contributing", "Adding a block"],
];

const PRO_FEATURES = ["Hero sections", "Pricing blocks", "Feature grids"];

function SectionSwitcher({ blocks }: { blocks: boolean }) {
  const navigate = useNavigate();

  return (
    <div className="relative mb-4">
      <label htmlFor="docs-section" className="sr-only">
        Documentation section
      </label>
      <select
        id="docs-section"
        value={blocks ? "blocks" : "components"}
        onChange={(event) =>
          navigate(
            event.target.value === "blocks"
              ? "/docs/blocks"
              : "/docs/components",
          )
        }
        className="w-full appearance-none rounded-control border border-border bg-panel px-2.5 py-2 text-caption text-foreground transition-colors hover:border-border-strong focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <option value="components">Components</option>
        <option value="blocks">Blocks</option>
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  );
}

function SidebarNav({ blocks }: { blocks: boolean }) {
  const { pathname } = useLocation();

  if (blocks) {
    return (
      <nav aria-label="Block documentation" className="flex flex-col gap-1">
        {BLOCK_LINKS.map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="rounded-control px-2 py-1.5 text-caption text-muted-foreground transition-colors hover:bg-panel hover:text-foreground"
          >
            {label}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav aria-label="Documentation" className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <SidebarLink
          to="/docs"
          label="Getting started"
          active={pathname === "/docs"}
        />
        <SidebarLink
          to="/docs/components"
          label="All components"
          active={pathname === "/docs/components"}
        />
      </div>
      {CATEGORIES.map((category) => {
        const items = SHOWCASE_ITEMS.filter(
          (item) => item.category === category.id,
        );
        if (items.length === 0) return null;
        return (
          <div key={category.id}>
            <p className="type-eyebrow px-2 text-muted-strong">
              {category.label}
            </p>
            <ul className="mt-2 flex flex-col gap-1">
              {items.map((item) => {
                const href = `/docs/components/${item.name}`;
                return (
                  <li key={item.name}>
                    <SidebarLink
                      to={href}
                      label={item.title}
                      active={pathname === href}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}

function SidebarLink({
  to,
  label,
  active,
}: {
  to: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      aria-current={active ? "page" : undefined}
      className={cn(
        "block rounded-control px-2 py-1.5 text-caption transition-colors",
        active
          ? "bg-panel-strong font-medium text-foreground"
          : "text-muted-foreground hover:bg-panel hover:text-foreground",
      )}
    >
      {label}
    </Link>
  );
}

function PromoCards() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-card border border-border bg-card p-5">
        <Badge variant="accent" className="gap-1.5">
          <Sparkles className="h-3 w-3" />
          Pro
        </Badge>
        <h3 className="text-title-sm mt-3 font-semibold tracking-tight">
          Unlock the block library.
        </h3>
        <p className="mt-1.5 text-caption text-muted-foreground">
          Complete page sections built from ARCTIS components. Install one file,
          get the whole layout.
        </p>
        <ul className="mt-3 flex flex-col gap-1.5">
          {PRO_FEATURES.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-caption text-muted-foreground"
            >
              <Check className="h-3 w-3 shrink-0 text-accent" />
              {feature}
            </li>
          ))}
        </ul>
        <Link to="/docs/blocks" className="btn btn-primary btn-md mt-4 w-full">
          Browse blocks
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="rounded-card border border-border bg-card p-5">
        <p className="type-eyebrow text-muted-strong">Sponsor</p>
        <h3 className="text-title-sm mt-2 font-semibold tracking-tight">
          Reach React builders.
        </h3>
        <p className="mt-1.5 text-caption text-muted-foreground">
          Put your product next to the components teams install every day.
        </p>
        <a
          href={SITE.sponsor}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-caption font-medium text-accent transition-opacity hover:opacity-80"
        >
          Become a sponsor
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

export function DocsShell() {
  const { pathname } = useLocation();
  const blocks = pathname.startsWith("/docs/blocks");

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)]">
        <aside className="hidden border-r border-border bg-card lg:block">
          <div className="sticky top-[76px] max-h-[calc(100vh-92px)] overflow-y-auto overscroll-contain px-3 pt-4 pb-8">
            <SectionSwitcher blocks={blocks} />
            <SidebarNav blocks={blocks} />
          </div>
        </aside>

        <div className="min-w-0 px-[var(--gutter)] pt-8 pb-10">
          <div className="mb-3 lg:hidden">
            <SectionSwitcher blocks={blocks} />
          </div>

          <details className="mb-6 rounded-shell border border-border bg-card/60 p-3 lg:hidden">
            <summary className="cursor-pointer list-none px-2 py-1 text-caption font-medium text-muted-foreground">
              Browse documentation
            </summary>
            <div className="mt-3 max-h-[60vh] overflow-y-auto">
              <SidebarNav blocks={blocks} />
            </div>
          </details>

          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_var(--rail-width)]">
            <div className="content-col min-w-0">
              <Outlet />
            </div>

            <aside className="hidden xl:block">
              <div className="sticky top-[92px]">
                <PromoCards />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
