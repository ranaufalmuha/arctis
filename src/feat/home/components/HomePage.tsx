import { Link } from "react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Layers,
  MousePointer2,
  Radio,
} from "lucide-react";
import { asset } from "@/shared/lib/asset";
import { CodeTabs } from "@/shared/components/CodeTabs";
import { TextShimmer } from "@/shared/components/registry/text-shimmer";
import { installCommand, itemUrl, SITE } from "@/shared/constants/site";
import { CATEGORIES } from "@/shared/constants/catalog";

const STACK = ["React 19", "Tailwind v4", "shadcn/ui", "Vite+", "TypeScript"];

const PRINCIPLES = [
  {
    title: "Source you own",
    description:
      "Every component is copied into your project. No library lock-in, no wrapper packages, no hidden runtime.",
    icon: Layers,
  },
  {
    title: "Accessible by default",
    description:
      "Native elements, visible focus, keyboard paths, and reduced-motion fallbacks ship with the code.",
    icon: Check,
  },
  {
    title: "Pointer-level detail",
    description:
      "Spotlights and glows run on CSS variables, so interaction never triggers a React render loop.",
    icon: MousePointer2,
  },
  {
    title: "Registry native",
    description:
      "Install with the shadcn CLI by namespace or URL. Dependencies and targets travel with each item.",
    icon: Radio,
  },
];

export function HomePage() {
  return (
    <div className="shell flex flex-col gap-4 pt-6">
      <section className="relative overflow-hidden rounded-panel border border-border bg-card/50">
        <div className="relative flex flex-col items-center gap-6 px-6 py-20 text-center lg:py-28">
          <span className="type-eyebrow inline-flex items-center gap-2 rounded-control border border-border-accent bg-accent-glow px-3 py-1 text-accent">
            v1.0 / Open source
          </span>
          <h1 className="type-display max-w-3xl">
            Give your interface{" "}
            <TextShimmer
              className="font-display"
              highlight="var(--accent)"
              duration={5}
            >
              better taste.
            </TextShimmer>
          </h1>
          <p className="text-body max-w-xl text-muted-foreground">
            A small, opinionated registry of React components. Accessible,
            animated where it matters, and installed as source with the shadcn
            CLI.
          </p>
          <CodeTabs
            className="max-w-xl"
            tabs={[
              {
                label: "Namespace",
                code: installCommand("glow-button"),
                language: "bash",
              },
              {
                label: "URL",
                code: `pnpm dlx shadcn@latest add ${itemUrl("glow-button")}`,
                language: "bash",
              },
            ]}
          />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/docs/components"
              className="btn btn-primary btn-md px-5 gap-2"
            >
              Browse components
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              to="/docs"
              className="btn btn-outline btn-md px-5 gap-2 text-muted-foreground"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      <section className="relative flex h-[480px] items-end justify-center overflow-hidden rounded-panel border border-border">
        <img
          src={asset("/assets/background.jpg")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative mx-4 mb-0 h-[400px] w-full max-w-3xl rounded-t-shell border border-white/10 bg-[#0b0b0b] px-5 py-5 shadow-[0_0_0_3px_rgba(255,255,255,0.03)]">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-control bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-control bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-control bg-green-500/70" />
            <span className="type-eyebrow ml-2 text-zinc-500">install</span>
          </div>
          <div className="text-body-sm space-y-2 font-mono">
            <p>
              <span className="text-green-400">$</span>{" "}
              <span className="text-zinc-100">
                {installCommand("glow-button")}
              </span>
            </p>
            <p>
              <span className="text-accent">◇</span>{" "}
              <span className="text-zinc-400">
                Checking registry @arctis...
              </span>
            </p>
            <p>
              <span className="text-accent">◇</span>{" "}
              <span className="text-zinc-400">
                Installing glow-button.tsx to components/ui
              </span>
            </p>
            <p>
              <span className="text-cyan-400">•</span>{" "}
              <span className="text-zinc-400">
                Dependencies: clsx, tailwind-merge
              </span>
            </p>
            <p>
              <span className="text-green-400">✓</span>{" "}
              <span className="text-green-400">
                Source copied. No package added.
              </span>
            </p>
            <p>
              <span className="text-yellow-400">→</span>{" "}
              <span className="text-zinc-400">
                Import from @/components/ui/glow-button
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 overflow-hidden rounded-shell border border-border bg-card/40 lg:grid-cols-5">
        {STACK.map((item) => (
          <div
            key={item}
            className="flex h-16 items-center justify-center border-r border-b border-border last:border-r-0 lg:border-b-0"
          >
            <span className="type-eyebrow text-muted-strong">{item}</span>
          </div>
        ))}
      </section>

      <section className="grid overflow-hidden rounded-shell border border-border bg-card/40 md:grid-cols-2">
        {PRINCIPLES.map((principle, index) => (
          <div
            key={principle.title}
            className={
              index % 2 === 0
                ? "border-b border-border p-6 md:border-r lg:p-8"
                : "border-b border-border p-6 last:border-b-0 lg:p-8"
            }
          >
            <principle.icon className="h-4 w-4 text-accent" />
            <h2 className="type-section-title mt-4">{principle.title}</h2>
            <p className="text-body-sm mt-2 text-muted-foreground">
              {principle.description}
            </p>
          </div>
        ))}
      </section>

      <section className="overflow-hidden rounded-shell border border-border bg-card/40">
        <div className="flex flex-col gap-3 px-6 pt-16 pb-10 text-center lg:px-10">
          <p className="type-eyebrow text-muted-foreground">The catalog</p>
          <h2 className="type-page-title mt-1">Small on purpose.</h2>
          <p className="text-body-sm text-muted-foreground">
            Four components, each with documented props and a live preview.
          </p>
        </div>
        <div className="grid divide-y divide-border border-t border-border sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/docs/components?category=${category.id}`}
              className="group flex flex-col justify-between gap-8 p-6 transition-colors hover:bg-panel-strong lg:p-8"
            >
              <div>
                <span className="type-eyebrow text-muted-strong">Category</span>
                <h3 className="text-title-sm font-semibold tracking-tight mt-3 font-mono">
                  {category.label}
                </h3>
                <p className="mt-1 text-caption text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-strong transition-colors group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 rounded-shell border border-border bg-card/40 px-6 py-16 text-center">
        <p className="type-eyebrow text-muted-foreground">Built in the open</p>
        <h2 className="type-page-title mt-1 max-w-2xl">
          Keep the source. Delete the parts you do not need.
        </h2>
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline btn-sm mt-2 gap-2 text-muted-foreground"
        >
          View the repository
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </section>
    </div>
  );
}
