import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SITE } from "@/shared/constants/site";
import { asset } from "@/shared/lib/asset";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [{ label: "Docs", href: "/docs" }] as const;

export function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="shell flex h-[60px] items-center justify-between gap-4">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Arctis home"
        >
          <img
            src={asset("/logo/logo-horizontal-dark.svg")}
            alt="ARCTIS"
            width={112}
            height={26}
            className="hidden h-5 w-auto dark:block"
          />
          <img
            src={asset("/logo/logo-horizontal-light.svg")}
            alt="ARCTIS"
            width={112}
            height={26}
            className="block h-5 w-auto dark:hidden"
          />
        </Link>

        <nav className="segmented hidden md:inline-flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                data-active={active}
                className="segmented-item"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm hidden h-9 gap-1.5 px-4 text-muted-foreground sm:inline-flex"
          >
            GitHub
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-control border border-border bg-card/60 text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background md:hidden"
        >
          <div className="shell flex flex-col gap-1 py-3">
            {[...NAV, { label: "GitHub", href: SITE.github }].map((item) =>
              item.href.startsWith("http") ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-control px-3 py-2.5 text-body-sm text-muted-foreground hover:bg-panel hover:text-foreground"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="rounded-control px-3 py-2.5 text-body-sm text-foreground hover:bg-panel"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
