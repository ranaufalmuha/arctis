import { lazy, type ComponentType, type LazyExoticComponent } from "react";

export type DemoProps = Record<string, unknown>;

export const DEMOS: Record<
  string,
  LazyExoticComponent<ComponentType<DemoProps>>
> = {
  "glow-button": lazy(() => import("../demos/glow-button-demo")),
  "spotlight-card": lazy(() => import("../demos/spotlight-card-demo")),
  "text-shimmer": lazy(() => import("../demos/text-shimmer-demo")),
  "aurora-background": lazy(() => import("../demos/aurora-background-demo")),
};
