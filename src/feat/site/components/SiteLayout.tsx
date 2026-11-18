import { Outlet, ScrollRestoration } from "react-router";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:border focus:border-accent focus:bg-background focus:px-3 focus:py-2 focus:font-mono focus:text-caption"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
