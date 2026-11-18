# Architecture guidance for AI agents

Use the Arctis frontend skill in `.agents/skills/frontend/` for implementation, refactoring, or review of this application. Read `SKILL.md` and its references before changing structure, routing, or imports.

## Non-negotiable frontend constraints

- `src/` has exactly three architectural directories: `pages/`, `feat/`, and `shared/`. Minimal bootstrap files may sit beside them (`main.tsx`). Do not add `src/components/`, `src/hooks/`, `src/utils/`, `src/lib/`, `src/services/`, or other architectural roots.
- `pages/` owns routing and thin page composition. Ordinary pages do not import other pages or route files. A `route.tsx` may import pages in its own directory and immediate child `route.tsx` files only. Do not add implementation directories inside `pages/`.
- Each `feat/<name>/` is isolated: it may import itself and `shared/`, never another feature or `pages/`.
- `shared/` may import `shared/` and external packages, never `feat/` or `pages/`.
- No circular dependencies. Aliases, barrels, type-only imports, and dynamic imports do not bypass boundaries.
- Do not silently disable or bypass architecture validation.

## Project map

- `src/pages/` — root route aggregator, home, docs shell, component catalog/detail, blocks, 404.
- `src/feat/site/` — header, footer, theme, site layout, route error.
- `src/feat/home/` — marketing composition.
- `src/feat/showcase/` — catalog, demos, component documentation UI and data.
- `src/feat/docs-content/` — installation and registry documentation.
- `src/shared/components/ui/` — shadcn-style primitives.
- `src/shared/components/registry/` — components distributed by the shadcn registry. These files must only use `@/lib/utils` and their declared npm dependencies so they install cleanly into a consumer project.
- `src/shared/` — constants, hooks, lib, styles, assets.
- `registry.json` — registry source of truth. Generated JSON goes to `public/r/`, never inside `src/`.

## Registry rules

- Every registry component has an item in `registry.json`, a demo in `feat/showcase/demos/`, and documentation data in `feat/showcase/data/components.ts`.
- Use shadcn target placeholders (`@ui/<name>.tsx`, `@lib/utils.ts`) and declare all npm dependencies.
- Keep registry source free of ARCTIS-internal aliases. `@arctis` installation must work in a clean React + Tailwind + shadcn project.
- `pnpm build` must generate `public/r/registry.json` and `public/r/{name}.json` before Vite+ builds.

## Before completion

Run:

```bash
npm ci --prefix .agents/skills/frontend   # once
pnpm arch:check
pnpm registry:validate
pnpm check
pnpm test
pnpm build
```

Report commands actually run, unresolved violations, and limits. Never claim an unrun check passed.
