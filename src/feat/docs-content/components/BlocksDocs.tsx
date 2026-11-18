import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { CodeBlock } from "@/shared/components/CodeBlock";
import { CodeTabs } from "@/shared/components/CodeTabs";
import { SITE } from "@/shared/constants/site";
import { DocsSection } from "./DocsSection";

const PLANNED = [
  {
    name: "hero-section",
    description: "Headline, supporting copy, primary and secondary actions.",
  },
  {
    name: "feature-grid",
    description: "Three or four feature cells with icons and short copy.",
  },
  {
    name: "pricing-section",
    description: "Plan comparison with highlighted tier and CTA.",
  },
  {
    name: "cta-section",
    description: "Closing call to action on an aurora backdrop.",
  },
];

export function BlocksDocs() {
  return (
    <article className="min-w-0">
      <p className="type-eyebrow text-muted-foreground">
        Documentation / Blocks
      </p>
      <h1 className="type-page-title mt-3">
        Complete sections, not one more component.
      </h1>
      <p className="text-lead mt-3 text-muted-foreground">
        Blocks are ready-made page sections assembled from ARCTIS components.
        Install one block and get every file it needs, already composed and
        responsive.
      </p>

      <DocsSection id="overview" title="What a block is">
        <p>
          A block is a section: a hero, a feature grid, pricing, a closing CTA.
          It is not a page and not a layout. You drop it into a route you
          already own, then edit the copy and tokens in place.
        </p>
        <p>
          Blocks use <code>type: "registry:block"</code>. A block can ship more
          than one file: the section component, small helpers, and any hooks it
          needs. Its component dependencies are installed by the shadcn CLI in
          the same run.
        </p>
      </DocsSection>

      <DocsSection id="available" title="Available blocks">
        <p>
          No blocks are published yet. The first sections land after the v1
          component set is stable. These are the planned items:
        </p>
        <ul className="overflow-hidden rounded-card border border-border bg-card/60 divide-y divide-border">
          {PLANNED.map((block) => (
            <li
              key={block.name}
              className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <code className="font-mono text-body-sm text-foreground">
                {block.name}
              </code>
              <span className="text-body-sm text-muted-foreground">
                {block.description}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-body-sm text-muted-strong">
          Track progress in{" "}
          <a
            href={`${SITE.github}/issues`}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline underline-offset-2"
          >
            GitHub issues
          </a>
          .
        </p>
      </DocsSection>

      <DocsSection id="install" title="Installing a block">
        <p>
          The command matches components. Replace{" "}
          <code>&lt;block-name&gt;</code> with an item from the list above once
          it is published.
        </p>
        <CodeTabs
          tabs={[
            {
              label: "Namespace",
              code: "pnpm dlx shadcn@latest add @arctis/<block-name>",
              language: "bash",
            },
            {
              label: "URL",
              code: "pnpm dlx shadcn@latest add https://arctis.dev/r/<block-name>.json",
              language: "bash",
            },
          ]}
        />
        <p>
          Block files land under your configured components alias, for example{" "}
          <code>@/components/blocks/hero-section</code>. Declared npm and
          component dependencies install automatically.
        </p>
      </DocsSection>

      <DocsSection id="anatomy" title="Anatomy">
        <p>A block item declares every file it writes and where it goes:</p>
        <CodeBlock
          code={`{
  "name": "hero-section",
  "type": "registry:block",
  "dependencies": ["clsx", "tailwind-merge"],
  "files": [
    {
      "path": "src/shared/components/registry/blocks/hero-section.tsx",
      "type": "registry:block",
      "target": "@components/blocks/hero-section.tsx"
    }
  ]
}`}
          language="json"
        />
        <p>
          Block source follows the same rules as components: native props
          forwarded, visible focus, reduced-motion fallbacks, and no
          ARCTIS-internal aliases.
        </p>
      </DocsSection>

      <DocsSection id="contributing" title="Adding a block">
        <p>
          Place the section in{" "}
          <code>src/shared/components/registry/blocks/</code>, register the item
          in <code>registry.json</code> with <code>type: "registry:block"</code>
          , then add a lazy demo and documentation entry under{" "}
          <code>src/feat/showcase/</code>.
        </p>
        <p>
          A block must work on its own: no page-level state, no router coupling,
          and no imports outside its declared dependencies.
        </p>
        <CodeBlock code="pnpm verify" language="bash" />
        <Link
          to="/docs#contributing"
          className="type-eyebrow inline-flex items-center gap-2 text-accent underline underline-offset-2"
        >
          Read the component contribution guide
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </DocsSection>
    </article>
  );
}
