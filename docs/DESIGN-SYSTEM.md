# Design system

Source of truth: `src/shared/styles/globals.css`. Anything visual that repeats must
come from a token or a component class here, not ad-hoc utilities.

## Layout

| Class             | Width                              | Use                        |
| ----------------- | ---------------------------------- | -------------------------- |
| `.shell`          | full width, `--gutter` padding     | Header, footer, page frame |
| `.content-col`    | `--content-max` (1080px), centered | Every docs page body       |
| `--sidebar-width` | 256px                              | Docs sidebar               |
| `--rail-width`    | 300px                              | Docs right rail            |

No outer max width. `DocsShell` wraps the `Outlet` in `.content-col`, so components,
blocks, and prose pages all share one width. Pages must not add their own width caps.

## Typography

Two font families:

- `--font-sans` — body copy.
- `--font-mono` — IBM Plex Mono: labels, metadata, code, badges.
- `--font-display` — Fraunces italic: display emphasis only.

Sizes come from the `text-*` scale:

| Token             | px    | Use                           |
| ----------------- | ----- | ----------------------------- |
| `text-overline`   | 11    | Labels, badges, code headers  |
| `text-caption`    | 13    | Secondary copy, card metadata |
| `text-body-sm`    | 14    | Dense body, table cells, code |
| `text-body`       | 16    | Docs body copy                |
| `text-lead`       | 18    | Page intro paragraph          |
| `text-title-sm`   | 20    | Card title, rail card title   |
| `text-title`      | 24    | Section heading               |
| `text-page-title` | 30–40 | Page `h1`                     |
| `text-display`    | 38–56 | Home hero only                |

Composite classes add weight and tracking on top of the scale:

- `.type-display` — hero.
- `.type-page-title` — page `h1`.
- `.type-section-title` — section `h2`.
- `.type-eyebrow` — small mono label, sentence case (also used for page eyebrows).

Page pattern:

```tsx
<p className="type-eyebrow text-muted-foreground">Section / v1.0</p>
<h1 className="type-page-title mt-3">Page title</h1>
<p className="text-lead mt-3 text-muted-foreground">One-sentence intro.</p>
```

## Buttons

Specified once in `.btn` plus variant and size classes. `Button` maps its props to
these classes, and links use the same classes.

| Variant        | Look                                  |
| -------------- | ------------------------------------- |
| `.btn-primary` | Solid accent (`--primary`), dark text |
| `.btn-outline` | Card surface, hairline border         |
| `.btn-ghost`   | Transparent, muted text               |
| `.btn-accent`  | Accent glow fill, accent text         |

| Size      | Height | Font           |
| --------- | ------ | -------------- |
| `.btn-sm` | 32px   | `text-caption` |
| `.btn-md` | 40px   | `text-body-sm` |
| `.btn-lg` | 48px   | `text-body`    |

```tsx
<Button>Primary</Button>
<Link className="btn btn-outline btn-md">Read the docs</Link>
```

## Section switcher

Components and Blocks are two sections of the docs, chosen from a native `<select>` at
the top of the sidebar (also rendered above the mobile nav panel). Full width of the
sidebar column, `--panel` fill, hairline border, 13px, chevron on the right. Changing the
value navigates to `/docs/components` or `/docs/blocks`. There is no separate tab bar
under the header; the header keeps only the `Docs` pill.

The `.segmented` component is still the spec for pill groups — currently the header nav
and the code tabs.

## Docs sidebar

Not a floating card. The sidebar is a full-height column attached to the left edge of
the viewport (256px), with `border-r` and `bg-secondary/60` so the column reads as its own
surface, plus gutter padding so nav lines up with the logo. The nav inside is sticky
(`top-[124px]`) with its own scroll. Items are 13px rows with a 12px hairline dash
marker; the active row uses `--panel-strong` with foreground text, hover uses `--panel`.
Keep the sidebar achromatic — the yellow accent never tints navigation. Category labels use
`.type-eyebrow`. On mobile the nav collapses into a `<details>` panel above the content.

## Badges

One component: `@/shared/components/ui/badge`. Variants `default`, `accent`, `outline`.
Always 11px mono, sentence case, square. Do not hand-roll label chips; compose
`Badge` when an icon is needed.

## Surfaces

- No page-level background pattern. `body` is one flat token color; do not add grid,
  dot, or gradient overlays behind the shell.
- `.glass-panel` — sticky chrome (blur + hairline border).
- `.surface-card` — cards with hover lift.
- Zero radius: every `--*-radius` token is `0`. `rounded-control`, `rounded-card`,
  `rounded-shell`, `rounded-panel` all resolve to square corners. Never use
  `rounded-full` or fixed px radii; depth comes from hairline borders and the tight
  panel shadow, not from curves.

## Code

Syntax highlighting uses two inline themes (`arctis-light`, `arctis-dark`) defined in
`src/shared/components/CodeBlock.tsx` — not a stock Shiki theme. Keywords are yellow,
strings olive-yellow, numbers amber, comments neutral gray. Stock themes (github-dark and
friends) inject blue/violet tokens that break the palette.

`src/shared/styles/palette.test.ts` locks this in: every neutral surface token must be
achromatic (max channel spread 8) and the accent must stay yellow.

## Class merging

`cn()` in `src/shared/lib/utils.ts` extends tailwind-merge with the custom font-size
tokens. Without that, `text-caption` is read as a text color and dropped when combined
with `text-muted-foreground`, which silently falls back to inherited 16px.

## Color

Black-and-white geometry with a single yellow accent. Neutrals are pure gray — equal
R/G/B — so nothing reads brown, blue, or violet. The yellow appears only in primary
buttons, the PRO badge, focus rings, and accent text; never in navigation or page
background.

Dark: background `#000000`, card/panel `#0a0a0a`, popover `#0e0e0e`, secondary `#141414`,
panel-strong `#171717`, border `#242424`, border-strong `#3a3a3a`, muted text `#a3a3a3`,
strong muted `#8a8a8a`, foreground `#ffffff`, primary/accent `#ffeb50` with foreground
`#000000`.
Light: background/card `#ffffff`, panel `#fafafa`, secondary/muted `#f5f5f5`,
panel-strong `#f0f0f0`, border `#e4e4e4`, border-strong `#cccccc`, muted text `#525252`,
foreground `#111111`, accent text `#8a6d00` (yellow is unreadable on white), primary
`#f5d90a` with dark foreground.

The page background is a single flat color — no grid, dots, gradients, or glow layers
behind the app shell. Depth comes from panels and hairline borders only.

Semantic tokens only (`bg-card`, `text-muted-foreground`, `border-border`); never raw
hex in a component.
