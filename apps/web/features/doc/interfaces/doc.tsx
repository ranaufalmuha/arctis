import type { DocNavItem } from "../data/nav";

export type DocItem = {
  href: string;
  label: string;
  group?: string;
  badge?: string;
  meta?: DocNavItem["meta"];
};

export type DocNavGroup = {
  label: string;
  items: DocItem[];
  defaultOpen?: boolean;
};
