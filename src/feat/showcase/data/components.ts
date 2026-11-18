import type { ComponentCategory } from "@/shared/constants/catalog";

export type { ComponentCategory } from "@/shared/constants/catalog";

export type PropDoc = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

export type ShowcaseItem = {
  name: string;
  title: string;
  description: string;
  category: ComponentCategory;
  dependencies: string[];
  props: PropDoc[];
  usage: string;
};

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    name: "glow-button",
    title: "Glow Button",
    description:
      "A squared button with a colored halo that blooms on hover and keyboard focus.",
    category: "buttons",
    dependencies: ["clsx", "tailwind-merge"],
    props: [
      {
        name: "glowColor",
        type: "string",
        default: '"#ffeb50"',
        description: "CSS color for the halo, border, and focus ring.",
      },
      {
        name: "intensity",
        type: '"soft" | "strong"',
        default: '"soft"',
        description: "Controls the size and opacity of the halo.",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Button label or icon content.",
      },
      {
        name: "...props",
        type: 'React.ComponentProps<"button">',
        description: "Native button attributes are forwarded.",
      },
    ],
    usage: `import { GlowButton } from "@/components/ui/glow-button";

export function Example() {
  return (
    <GlowButton glowColor="#ffeb50" intensity="strong">
      Enter the grid
    </GlowButton>
  );
}`,
  },
  {
    name: "spotlight-card",
    title: "Spotlight Card",
    description:
      "A bordered surface with a radial spotlight that follows the pointer. Pointer tracking uses CSS variables, so moving the mouse never re-renders React.",
    category: "cards",
    dependencies: ["clsx", "tailwind-merge"],
    props: [
      {
        name: "spotlightColor",
        type: "string",
        default: '"rgba(255, 235, 80, 0.16)"',
        description: "CSS color for the spotlight gradient.",
      },
      {
        name: "radius",
        type: "number",
        default: "320",
        description: "Spotlight radius in pixels.",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Card content.",
      },
      {
        name: "...props",
        type: 'React.ComponentProps<"div">',
        description: "Native div attributes are forwarded.",
      },
    ],
    usage: `import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Example() {
  return (
    <SpotlightCard className="max-w-sm">
      <p className="font-mono text-xs tracking-[0.02em] text-muted-foreground">
        Signal
      </p>
      <p className="mt-4 text-2xl">Pointer-aware surfaces.</p>
    </SpotlightCard>
  );
}`,
  },
  {
    name: "text-shimmer",
    title: "Text Shimmer",
    description:
      "A looping gradient sweep clipped to the text. Motion is disabled automatically when the visitor prefers reduced motion.",
    category: "text",
    dependencies: ["clsx", "tailwind-merge"],
    props: [
      {
        name: "duration",
        type: "number",
        default: "4",
        description: "Animation duration in seconds.",
      },
      {
        name: "highlight",
        type: "string",
        default: '"#ffffff"',
        description: "Color of the moving highlight.",
      },
      {
        name: "baseColor",
        type: "string",
        default: '"#71717a"',
        description: "Base text color.",
      },
      {
        name: "...props",
        type: 'React.ComponentProps<"span">',
        description: "Native span attributes are forwarded.",
      },
    ],
    usage: `import { TextShimmer } from "@/components/ui/text-shimmer";

export function Example() {
  return (
    <TextShimmer duration={3} className="text-4xl font-semibold">
      Shipping in the dark.
    </TextShimmer>
  );
}`,
  },
  {
    name: "aurora-background",
    title: "Aurora Background",
    description:
      "Three drifting color layers behind a hairline grid. A section-scale backdrop that stays out of the accessibility tree.",
    category: "backgrounds",
    dependencies: ["clsx", "tailwind-merge"],
    props: [
      {
        name: "colors",
        type: "[string, string, string]",
        default: '["#ffeb50", "#f59e0b", "#f97316"]',
        description: "Three CSS colors used for the aurora layers.",
      },
      {
        name: "speed",
        type: "number",
        default: "14",
        description: "Animation duration in seconds.",
      },
      {
        name: "children",
        type: "ReactNode",
        description: "Content rendered above the backdrop.",
      },
      {
        name: "...props",
        type: 'React.ComponentProps<"div">',
        description: "Native div attributes are forwarded.",
      },
    ],
    usage: `import { AuroraBackground } from "@/components/ui/aurora-background";

export function Example() {
  return (
    <AuroraBackground className="min-h-[420px] p-10">
      <h2 className="text-4xl font-semibold">A calmer kind of noise.</h2>
    </AuroraBackground>
  );
}`,
  },
];

export function getShowcaseItem(name: string | undefined) {
  return SHOWCASE_ITEMS.find((item) => item.name === name);
}
