import type { RouteObject } from "react-router";
import { DocsShell } from "@/feat/showcase/components/DocsShell";

export const docsRoute: RouteObject = {
  path: "docs",
  Component: DocsShell,
  children: [
    {
      index: true,
      lazy: async () => ({ Component: (await import("./index")).default }),
    },
    {
      path: "blocks",
      lazy: async () => ({ Component: (await import("./blocks")).default }),
    },
    {
      path: "components",
      lazy: async () => ({ Component: (await import("./components")).default }),
    },
    {
      path: "components/:name",
      lazy: async () => ({ Component: (await import("./component")).default }),
    },
  ],
};
