import { createBrowserRouter, redirect } from "react-router";
import { SiteLayout } from "@/feat/site/components/SiteLayout";
import { RouteError } from "@/feat/site/components/RouteError";
import { docsRoute } from "./docs/route";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: SiteLayout,
      ErrorBoundary: RouteError,
      children: [
        {
          index: true,
          lazy: async () => ({ Component: (await import("./home")).default }),
        },
        docsRoute,
        {
          path: "components",
          loader: () => redirect("/docs/components"),
        },
        {
          path: "components/:name",
          loader: ({ params }) => redirect(`/docs/components/${params.name}`),
        },
        {
          path: "*",
          lazy: async () => ({
            Component: (await import("./not-found")).default,
          }),
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/" },
);
