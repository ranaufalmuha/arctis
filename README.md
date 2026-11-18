# ARCTIS

Open-source React component registry with better taste.

ARCTIS is a static documentation site and a [shadcn-compatible registry](https://ui.shadcn.com/docs/registry). Components are distributed as source files, not as an npm component package. Install one with the shadcn CLI, then own the code.

```bash
pnpm dlx shadcn@latest add @arctis/glow-button
```

- Live catalog with search, categories, previews, props, and source
- Namespace and URL installs through the official shadcn CLI
- Accessible components with reduced-motion fallbacks
- Tailwind CSS v4 tokens, zero-radius geometry, hairline borders, layered panels
- Fraunces italic display, IBM Plex Mono labels and code, system sans body
- Static build with registry JSON generated at `/r/registry.json`

## Stack

| Tool                                 | Role                                                |
| ------------------------------------ | --------------------------------------------------- |
| [Vite+](https://viteplus.dev) (`vp`) | dev server, build, lint, format, type checks, tests |
| React 19 + React Router              | SPA and route-level code splitting                  |
| TypeScript                           | strict types, no emit                               |
| Tailwind CSS v4                      | design tokens and utilities                         |
| shadcn/ui conventions                | `components.json`, `cn()`, registry schema          |
| pnpm                                 | package manager                                     |

## Quick start

Requirements: Node.js 20+, pnpm 9+, and the Vite+ CLI (`vp`).

```bash
vp install
vp dev
```

`vp dev` builds the registry JSON first, then starts the Vite dev server.

## Commands

| Command                  | What it does                                             |
| ------------------------ | -------------------------------------------------------- |
| `pnpm dev`               | Generate `public/r/` and start Vite+ dev server          |
| `pnpm build`             | Generate registry JSON, then production build with Vite+ |
| `pnpm preview`           | Serve the production build                               |
| `pnpm check`             | Format, lint, and type-check in one pass                 |
| `pnpm lint`              | Oxlint only                                              |
| `pnpm fmt`               | Oxfmt only                                               |
| `pnpm typecheck`         | `tsc --noEmit`                                           |
| `pnpm test`              | Vitest through Vite+                                     |
| `pnpm registry:build`    | `shadcn build` into `public/r/`                          |
| `pnpm registry:validate` | Validate `registry.json` and item files                  |
| `pnpm arch:setup`        | Install the architecture validator dependency (once)     |
| `pnpm arch:check`        | Run the Arctis frontend architecture validator           |
| `pnpm verify`            | Architecture, registry, checks, tests, and build         |

## Architecture

`src/` contains exactly three architectural directories, plus `main.tsx`:

```text
src/
├── pages/      route registration and thin page composition
├── feat/       feature implementation (isolated per feature)
│   ├── site/           header, footer, theme, layout
│   ├── home/           marketing composition
│   ├── showcase/       catalog, demos, component docs
│   └── docs-content/   installation documentation
└── shared/     feature-independent primitives
    ├── components/
    │   ├── ui/         shadcn-style primitives
    │   └── registry/   components distributed by the registry
    ├── constants/
    ├── hooks/
    ├── lib/
    ├── assets/
    └── styles/
```

Dependencies flow `pages → feat → shared`. Features never import other features, and `shared/` never imports from `feat/` or `pages/`. See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) and [AGENTS.md](AGENTS.md).

Docs routes:

```text
/docs                 installation
/docs/components      full component catalog
/docs/components/:name component detail
/docs/blocks          block documentation
```

`/components` and `/components/:name` redirect to the docs routes.

## Registry

`registry.json` is the source of truth. It declares the registry, each item's file targets, npm dependencies, categories, CSS, and docs. Source files live under `src/shared/components/registry/` so they follow the same ownership rules as the site. Components import `cn()` from `@/lib/utils`, which `shadcn init` creates; a standalone `utils` item is also published in case it needs restoring.

Generated output lives outside `src/`:

```text
public/r/registry.json      catalog
public/r/{name}.json        one file per item
```

`pnpm registry:build` runs `shadcn build`; `pnpm build` runs it automatically before Vite+ compiles the site. Deploy `dist/` plus `public/r/` (copied by Vite) to any static host.

### Install by namespace

Add the namespace once:

```bash
pnpm dlx shadcn@latest registry add @arctis=https://arctis.dev/r/{name}.json
```

This writes the following to `components.json`:

```json
{
  "registries": {
    "@arctis": "https://arctis.dev/r/{name}.json"
  }
}
```

Then:

```bash
pnpm dlx shadcn@latest add @arctis/glow-button
```

Direct namespace installation requires the registry configuration above, or official registration of the `@arctis` namespace in the shadcn registry index. Without either, use the URL form.

### Install by URL

```bash
pnpm dlx shadcn@latest add https://arctis.dev/r/glow-button.json
```

### Local verification

```bash
pnpm build
pnpm preview
# in another terminal, inside a clean React + Tailwind + shadcn project:
pnpm dlx shadcn@latest add http://localhost:4173/r/glow-button.json
```

## Deployment

The site is a static SPA. `vercel.json` and `public/_redirects` provide SPA fallbacks. Asset URLs honour `VITE_BASE`, so subpath hosting works:

```bash
VITE_BASE=/arctis/ pnpm build
```

For GitHub Pages, `.github/workflows/deploy-pages.yml` builds with the repository base path and writes a `404.html` fallback.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md). Registry additions must keep the Arctis architecture validator, registry validation, lint, types, tests, and build green.

## License

[MIT](LICENSE) © ARCTIS
