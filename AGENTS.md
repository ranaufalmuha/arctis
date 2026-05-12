# AGENTS.md — ARCTIS Project Rules for AI Coding Agents

> This file defines the conventions, boundaries, and patterns that every AI agent **MUST** follow when working on this codebase. Violating these rules will cause lint errors, type errors, or architectural violations.

---

## 1. Monorepo Structure

```
arctis/
├── apps/
│   └── web/                  # Next.js 16 App Router — landing page + docs site
│       ├── app/              # Next.js routes ONLY (page.tsx, layout.tsx, route.tsx)
│       ├── content/          # Doc content files (.tsx, .ts, .md) — NOT routes
│       ├── features/         # Feature modules (e.g., docs/)
│       ├── shared/           # App-wide shared code (components, types, styles)
│       └── public/           # Static assets (fonts, images, logos)
├── packages/
│   ├── ui/                   # @arctis/ui — publishable React component library
│   ├── arctis-cli/           # @arctis/cli — CLI tool (bin: arctis)
│   ├── eslint-config/        # @arctis/eslint-config — shared ESLint presets
│   └── typescript-config/    # @arctis/typescript-config — shared tsconfigs
├── docs/
│   └── ARCHITECTURE.md       # Internal architecture documentation
├── .editorconfig
├── .env.example
├── .prettierrc
├── turbo.json
└── pnpm-workspace.yaml
```

**Workspace manager:** `pnpm@9.0.0` (never use npm or yarn)
**Orchestrator:** Turborepo (`turbo.json`)

---

## 2. Layer Architecture & Import Boundaries (CRITICAL)

The app enforces **strict layer boundaries** via `eslint-plugin-boundaries` and `no-restricted-imports`. Every file belongs to exactly one layer:

| Layer | Directory | Purpose |
|-------|-----------|---------|
| `app` | `app/**` | Next.js route definitions and layouts |
| `content` | `content/**` | Documentation content files (tsx, ts, md) |
| `feature` | `features/*/**` | Feature-specific logic (isolated per feature) |
| `shared` | `shared/**` | App-wide reusable utilities, components, types |

### Allowed Import Rules

```
app      → app, shared, feature, content
feature  → shared, content, same-feature-only
shared   → shared (ONLY — cannot import from app, feature, or content)
content  → content, shared
```

### Key Restrictions

- **Features CANNOT import from other features.** Each feature is an island.
- **Features CANNOT import from `app/`.** The App Router layer is above features.
- **Shared CANNOT import from `app/`, `features/`, or `content/`.** Shared is the foundation.
- **Shared CANNOT import from `@arctis/ui` on the web side** — shared is framework-agnostic utilities.
- Do NOT create cross-feature dependencies. If two features need the same thing, extract it to `shared/`.

### Path Aliases (apps/web)

```ts
@/*           → apps/web/*
@arctis/ui    → packages/ui/src/index.ts
```

---

## 3. Adding New Content / Documentation

### Content file structure (`content/docs/`)

Each documentation page needs a folder under `content/docs/` containing:

```
content/docs/<slug>/
├── content.tsx     # React component (default export) — the page body
└── metadata.ts     # Named export `metadata` object with title, description, etc.
```

For **skill-type** content (theme, addon, rule), also include a markdown source:

```
content/docs/themes/<name>/
├── content.tsx
├── metadata.ts
└── theme.md        # Markdown skill definition
```

### Registration

After creating content files, register the route in `features/docs/lib/doc-route-registry.ts`:

```ts
"/docs/your-slug": {
  kind: "static",          // or "skill", "category", "agent"
  content: () => import("@/content/docs/your-slug/content"),
  metadata: () => import("@/content/docs/your-slug/metadata"),
}
```

### Navigation

Update `features/docs/data/nav.ts` to add the new page to the sidebar navigation.

---

## 4. Package Boundaries

### `packages/ui` (@arctis/ui)

- **Framework-agnostic** — React + className only. Never import from Next.js, never use server-only APIs.
- All public exports go through `src/index.ts` → `src/components/__index__.ts` (barrel pattern).
- Use a `lib/` directory for internal utilities (e.g., `gsap.ts` for GSAP wrapper).
- Component file naming: `PascalCase.tsx`
- Every new component **must** be re-exported from `__index__.ts`.

### `apps/web` (the website)

- Uses `@arctis/ui` for shared components (import from `"@arctis/ui"`).
- Site-specific components go in `shared/components/ui/`.
- Layout components for features go in their respective feature folder.
- Route groups use `(groupName)` syntax (e.g., `(marketing)/`).

---

## 5. Styling Conventions

- **Tailwind CSS v4** with `@tailwindcss/postcss` plugin.
- Design tokens defined as CSS custom properties in `shared/styles/globals.css` (`:root` block).
- Tokens are mapped to Tailwind via `@theme` directive in the same file.
- Always use `var(--color-*)` tokens, never hardcoded colors.
- Use `var(--transition-fast)` / `var(--transition-base)` for transition durations.
- Zero border-radius (`var(--radius-none)` = `0px`) — this is the design system's default.
- `clsx` is available for conditional class merging.

---

## 6. TypeScript Conventions

- **Strict mode** enabled (`strict: true` in `base.json`).
- All code is TypeScript — no `.js` or `.jsx` files for source code.
- Type definitions live alongside their domain:
  - Shared types → `shared/types/` (e.g., `docs.ts`, `skills.ts`, `arctis.ts`)
  - Feature-local types → define in the feature's `lib/` or near usage
- Use `type` (not `interface`) for object shapes.
- Always use `const` assertions where applicable (e.g., `"theme" as const`).

---

## 7. Naming Conventions

| What | Convention | Example |
|------|-----------|---------|
| Components (files) | `PascalCase.tsx` | `Header.tsx`, `CodeBlock.tsx` |
| Component exports | Named export (not default) | `export function Header()` |
| Directories | `kebab-case` | `skill-folder-structure/`, `hairline-borders/` |
| Route groups | `(groupName)` | `(marketing)/` |
| Private components | `_components/` prefix | `(marketing)/_components/` |
| Barrel index files | `__index__.ts` (in packages/ui) | `components/__index__.ts` |
| Types | `PascalCase` type aliases | `DocNavGroup`, `AgentTarget` |
| Dynamic routes | `[[...slug]]` for catch-all | `docs/[[...slug]]/page.tsx` |

---

## 8. Component Patterns

### Client Components

```tsx
"use client";

import { useState } from "react";

export function MyComponent() {
  // ...
}
```

### Server Components (Next.js default — no "use client")

```tsx
import type { ReactNode } from "react";

export async function MyServerComponent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
```

### Reusable UI Components (packages/ui)

- Accept `className?: string` for external styling.
- Use `clsx` for merging classes (available in web, NOT in packages/ui).
- Document with JSDoc header block showing usage examples.

---

## 9. Commands (always run from repo root)

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all dev servers |
| `pnpm build` | Build all apps and packages |
| `pnpm lint` | Lint all workspaces |
| `pnpm check-types` | Type-check all workspaces |
| `pnpm format` | Format all files with Prettier |

**Filtering** (with turborepo):
```
pnpm dev --filter=web          # Only run web app
pnpm build --filter=@arctis/ui # Only build the UI library
```

---

## 10. Pre-Commit & CI Checklist

Before considering work complete, verify:

1. `pnpm check-types` passes with zero errors.
2. `pnpm lint` passes with zero errors and zero warnings (`--max-warnings 0`).
3. `pnpm build` completes successfully.
4. No new files violate the layer boundaries (see Section 2).
5. No imports from restricted paths (check ESLint output).
6. New components in `packages/ui` are re-exported from the barrel file.
7. New content pages are registered in `doc-route-registry.ts` and `nav.ts`.
8. Design tokens are used instead of hardcoded values.

---

## 11. Files You Should NOT Modify Without Explicit Instruction

- `pnpm-lock.yaml` — managed by pnpm
- `turbo.json` — infrastructure config
- `.eslintrc` / `eslint.config.js` — lint boundaries
- `tsconfig.json` / base TypeScript configs — unless adding a new layer
- Any file inside `node_modules/`, `.turbo/`, `.next/`, `dist/`, `build/`

---

## 12. Key Context

- **Project name:** ARCTIS — Open Skill Registry for AI Coding Agents (Claude Code, OpenCode, Codex)
- **Platform goal:** Let developers install reusable design systems, visual rules, and addons into their AI coding agents.
- **Tech stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript 5.9, Turborepo, pnpm
- **Deployment target:** Vercel (referenced in turbo.json via `VERCEL_URL` env)
- **Design system:** "Prismatic Architecture" — dark background (#050505), zero-radius borders, restrained #ffeb50 accent, hard hairline borders, monospace metadata, fast linear transitions.
