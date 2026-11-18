# Contributing to ARCTIS

Thanks for helping improve the registry. Keep changes small, source-first, and inside the Arctis architecture.

## Setup

```bash
vp install
npm ci --prefix .agents/skills/frontend   # architecture validator dependency
pnpm dev
```

Requirements: Node.js 20+, pnpm 9+, Vite+ (`vp`).

## Architecture rules

- `src/` has exactly three architectural directories: `pages/`, `feat/`, `shared/`, plus minimal entrypoints.
- Imports flow `pages → feat → shared`. Features never import other features. `shared/` never imports `feat/` or `pages/`.
- Pages are thin. Route registration lives in `route.tsx` files and may only import pages in its own group and immediate child route files.
- Registry source belongs in `shared/` because it is distributed, feature-independent UI. Demos and documentation belong to the owning feature (`feat/showcase/`).
- Do not bypass the validator with aliases, barrels, type-only imports, or dynamic imports.

Run the validator:

```bash
pnpm arch:check
```

## Add a registry component

1. **Component source** — add `src/shared/components/registry/<name>.tsx`.
   - Use `@/lib/utils` for `cn()`. Do not import app-internal aliases. The consumer gets this file from `shadcn init`; do not add a local `registryDependencies` entry for it, because shadcn resolves relative dependencies against the consumer's working directory.
   - Accept and forward native props (`React.ComponentProps<"button">`, etc.).
   - Use semantic elements, visible focus, and `motion-reduce` fallbacks.
   - Keep runtime dependencies minimal and declare every one.
2. **Registry item** — add the item to `registry.json`.
   - `type` is usually `registry:ui`.
   - Set `target` with a shadcn placeholder (`@ui/<name>.tsx`).
   - List npm `dependencies` and any required CSS/keyframes.
   - Add a short `description`, `categories`, and `docs`.
3. **Demo** — add `src/feat/showcase/demos/<name>-demo.tsx` and register it lazily in `demos/index.ts`.
4. **Documentation data** — add the item to `src/feat/showcase/data/components.ts`.
   - It then appears in `/docs/components` and in the persistent docs sidebar automatically.
   - Include an accurate description, category, dependencies, props, defaults, and a usage example.
5. **Tests** — `src/feat/showcase/data/registry.test.ts` checks that every showcase item has a registry entry and that every file path exists.

## Component API guidelines

- Prefer composition over configuration. Add a prop only when the demo or docs need it.
- No generated IDs for static markup; add them only for real label/ARIA relationships.
- Keep animations CSS-first. Pointer effects should update CSS variables, not React state.
- Honor `prefers-reduced-motion`.
- Use the design tokens (`bg-background`, `text-foreground`, `border-border`, siblings) so components work in light and dark.
- Do not add a dependency for a few lines of code.

## Verify before opening a pull request

```bash
pnpm arch:check
pnpm registry:validate
pnpm check
pnpm test
pnpm build
```

`pnpm verify` runs all of the above in order.

Then test a real install in a clean consumer project:

```bash
pnpm build
pnpm preview
# in a separate React + Tailwind + shadcn project:
pnpm dlx shadcn@latest add http://localhost:4173/r/<name>.json
pnpm build
```

Confirm the component compiles without Arctis-internal aliases and that the declared dependencies were installed.

## Commit style

Use focused commits: `feat(registry): add glow-button`, `fix(showcase): keep preview focus visible`, `docs: explain namespace installs`.

## License

By contributing, you agree that your contributions are licensed under the MIT License.
