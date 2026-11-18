export const SITE = {
  name: "ARCTIS",
  url: "https://arctis.dev",
  github: "https://github.com/ranaufalmuha/arctis",
  sponsor: "https://github.com/sponsors/ranaufalmuha",
  registryUrl: "https://arctis.dev/r/{name}.json",
  catalogUrl: "https://arctis.dev/r/registry.json",
  tagline: "React components with better taste.",
  description:
    "An open-source React component registry. Copy accessible, animated components into your project with the shadcn CLI.",
} as const;

export function installCommand(name: string) {
  return `pnpm dlx shadcn@latest add @arctis/${name}`;
}

export function itemUrl(name: string) {
  return `https://arctis.dev/r/${name}.json`;
}
