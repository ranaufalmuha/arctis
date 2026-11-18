import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/shared/constants/site";
import { asset } from "@/shared/lib/asset";

const COLUMNS = [
  {
    title: "Registry",
    links: [
      { label: "Components", href: "/docs/components" },
      { label: "Glow Button", href: "/docs/components/glow-button" },
      { label: "Spotlight Card", href: "/docs/components/spotlight-card" },
      {
        label: "Aurora Background",
        href: "/docs/components/aurora-background",
      },
    ],
  },
  {
    title: "Documentation",
    links: [
      { label: "Getting started", href: "/docs" },
      { label: "Blocks", href: "/docs/blocks" },
      { label: "Registry format", href: "/docs#registry" },
      { label: "Install by URL", href: "/docs#url" },
      { label: "Contributing", href: "/docs#contributing" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: SITE.github, external: true },
      { label: "Issues", href: `${SITE.github}/issues`, external: true },
      { label: "Sponsor", href: SITE.sponsor, external: true },
      {
        label: "License",
        href: `${SITE.github}/blob/main/LICENSE`,
        external: true,
      },
    ],
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="shell py-12">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-10 md:flex-row md:items-end">
          <div>
            <p className="type-eyebrow text-muted-strong">Open source / MIT</p>
            <p className="mt-3 max-w-lg font-display type-page-title font-light">
              Give your interface better taste.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/docs/components" className="btn btn-primary btn-md px-5">
              Browse components
            </Link>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-md gap-2 px-5 text-muted-foreground"
            >
              Star on GitHub
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
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
            <p className="mt-4 max-w-xs text-caption text-muted-foreground">
              An open-source React component registry distributed as source, not
              a package.
            </p>
          </div>
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="type-eyebrow text-muted-strong">{column.title}</p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) =>
                  "external" in link && link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-caption text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-caption text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-5 font-mono text-overline text-muted-strong md:flex-row md:items-center md:justify-between">
          <span>{year} Arctis / Design system</span>
          <span>Built with Vite+ / React / Tailwind v4 / shadcn</span>
        </div>
      </div>
    </footer>
  );
}
