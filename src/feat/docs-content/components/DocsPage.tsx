import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { CodeBlock } from "@/shared/components/CodeBlock";
import { CodeTabs } from "@/shared/components/CodeTabs";
import { SITE } from "@/shared/constants/site";
import { DocsSection } from "./DocsSection";

const NAMESPACE_CONFIG = `{
  "registries": {
    "@arctis": "https://arctis.dev/r/{name}.json"
  }
}`;

const REGISTRY_ITEM = `{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "glow-button",
  "type": "registry:ui",
  "title": "Glow Button",
  "description": "A squared button with a colored halo.",
  "dependencies": ["clsx", "tailwind-merge"],
  "files": [
    {
      "path": "src/shared/components/registry/glow-button.tsx",
      "type": "registry:ui",
      "target": "@ui/glow-button.tsx"
    }
  ]
}`;

export function DocsPage() {
  return (
    <article className="min-w-0">
      <title>Documentation — ARCTIS</title>
      <meta
        name="description"
        content="Install ARCTIS components with the shadcn CLI by namespace or URL, and learn how the registry is structured."
      />

      <p className="type-eyebrow text-muted-foreground">Documentation / v1.0</p>
      <h1 className="type-page-title mt-3">Install source, not a package.</h1>
      <p className="text-lead mt-3 text-muted-foreground">
        ARCTIS is a shadcn-compatible registry. Components are copied into your
        project, imports resolve through your existing shadcn aliases, and every
        dependency is declared in the item metadata.
      </p>

      <DocsSection id="installation" title="Installation">
        <p>
          You need a React project with Tailwind CSS v4 and a{" "}
          <code>components.json</code> file. If you do not have one, run the
          shadcn initializer first.
        </p>
        <CodeBlock code="pnpm dlx shadcn@latest init" language="bash" />
        <p>Then install a component by namespace:</p>
        <CodeBlock
          code="pnpm dlx shadcn@latest add @arctis/glow-button"
          language="bash"
        />
        <p>
          The CLI writes the component to your configured{" "}
          <code>aliases.ui</code> directory, installs <code>clsx</code> and{" "}
          <code>tailwind-merge</code> when needed, and keeps relative imports
          intact.
        </p>
      </DocsSection>

      <DocsSection id="namespace" title="Namespace setup">
        <p>
          Direct namespace installation requires the registry to be configured
          in your project, or the namespace to be registered in the official
          registry index. Add it once:
        </p>
        <CodeTabs
          tabs={[
            {
              label: "CLI",
              code: "pnpm dlx shadcn@latest registry add @arctis=https://arctis.dev/r/{name}.json",
              language: "bash",
            },
            {
              label: "components.json",
              code: NAMESPACE_CONFIG,
              language: "json",
            },
          ]}
        />
        <p>
          Verify the configuration with{" "}
          <code>pnpm dlx shadcn@latest list @arctis</code>. After that,{" "}
          <code>@arctis/&lt;name&gt;</code> resolves to{" "}
          <code>https://arctis.dev/r/&lt;name&gt;.json</code>.
        </p>
      </DocsSection>

      <DocsSection id="url" title="Install by URL">
        <p>
          No namespace configuration is required for a direct URL. Use this when
          you want a one-off install or a pinned deployment.
        </p>
        <CodeBlock
          code="pnpm dlx shadcn@latest add https://arctis.dev/r/glow-button.json"
          language="bash"
        />
        <p>
          Components import <code>cn()</code> from <code>@/lib/utils</code>, the
          file <code>shadcn init</code> creates. Restore it from the registry if
          it is missing:
        </p>
        <CodeBlock
          code="pnpm dlx shadcn@latest add https://arctis.dev/r/utils.json"
          language="bash"
        />
        <p>
          The catalog is served at{" "}
          <a
            href={`${SITE.url}/r/registry.json`}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline underline-offset-2"
          >
            /r/registry.json
          </a>{" "}
          and every item is served at <code>/r/&lt;name&gt;.json</code>.
        </p>
      </DocsSection>

      <DocsSection id="manual" title="Manual install">
        <p>
          Every component page exposes its full source. Copy the file into your
          UI directory and install the declared dependencies with your package
          manager. Registry items never import Arctis-internal aliases: they use{" "}
          <code>@/lib/utils</code> and your configured shadcn paths.
        </p>
        <CodeBlock
          code={`# 1. Copy the source from the component page
# 2. Install runtime dependencies
pnpm add clsx tailwind-merge`}
          language="bash"
        />
      </DocsSection>

      <DocsSection id="registry" title="Registry format">
        <p>
          The source of truth is the root <code>registry.json</code>. It
          declares registry metadata and items with file targets, npm
          dependencies, CSS, and categories.
        </p>
        <CodeBlock code={REGISTRY_ITEM} language="json" />
        <p>
          <code>pnpm registry:build</code> runs <code>shadcn build</code> and
          writes the flattened catalog and item JSON to <code>public/r/</code>.
          The production build runs this step before Vite+, so the static site
          always serves valid registry endpoints.
        </p>
        <CodeBlock
          code={`pnpm registry:validate
pnpm registry:build
ls public/r`}
          language="bash"
        />
      </DocsSection>

      <DocsSection id="architecture" title="Architecture">
        <p>
          The application follows the Arctis Frontend Architecture:{" "}
          <code>src/</code> contains only <code>pages/</code>,{" "}
          <code>feat/</code>, and <code>shared/</code>, with a small{" "}
          <code>main.tsx</code> entrypoint. Dependencies flow{" "}
          <code>pages → feat → shared</code>; features are isolated.
        </p>
        <CodeBlock
          code={`src/
  pages/            route registration and thin composition
  feat/
    site/           header, footer, theme
    home/           marketing composition
    showcase/       catalog, previews, docs, demos
    docs-content/   installation documentation
  shared/
    components/     shadcn primitives + registry components
    lib/            cn, asset helpers
    constants/      shared taxonomy and site metadata
    styles/         Tailwind v4 tokens
registry.json       registry source of truth
public/r/           generated registry JSON (outside src)`}
          language="text"
        />
        <p>Run the bundled validator after structural changes:</p>
        <CodeBlock
          code={`pnpm arch:setup   # once, installs the validator's TypeScript
pnpm arch:check`}
          language="bash"
        />
      </DocsSection>

      <DocsSection id="contributing" title="Contributing">
        <p>
          Add the component to <code>src/shared/components/registry/</code>,
          register the item in <code>registry.json</code>, add a demo under{" "}
          <code>src/feat/showcase/demos/</code>, and document its props in{" "}
          <code>src/feat/showcase/data/components.ts</code>.
        </p>
        <p>
          Then run the full gate. It checks architecture boundaries, registry
          validity, formatting, lint, types, tests, and the production build.
        </p>
        <CodeBlock code="pnpm verify" language="bash" />
        <a
          href={`${SITE.github}/blob/main/CONTRIBUTING.md`}
          target="_blank"
          rel="noreferrer"
          className="type-eyebrow inline-flex items-center gap-2 text-accent underline underline-offset-2"
        >
          Read CONTRIBUTING.md
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </DocsSection>

      <div className="mt-12 border-t border-border pt-6">
        <Link
          to="/docs/components"
          className="type-eyebrow text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to the component catalog
        </Link>
      </div>
    </article>
  );
}
