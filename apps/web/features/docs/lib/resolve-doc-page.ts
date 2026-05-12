import type { ResolvedDocPage, BaseDocMeta } from "@/shared/types/docs";
import {
  docRouteRegistry,
  getDocRouteEntry,
  SOURCE_FILENAME,
} from "./doc-route-registry";
import { readSourceMarkdown } from "./read-source-markdown";
import { DOCS_NAV } from "../data/nav";

export async function resolveDocPage(
  slug: string[] | undefined,
): Promise<ResolvedDocPage | null> {
  const href =
    slug && slug.length > 0 ? `/docs/${slug.join("/")}` : "/docs";

  const entry = getDocRouteEntry(href);
  if (!entry) return null;

  if (entry.kind === "static") {
    const [contentMod, metaMod] = await Promise.all([
      entry.content(),
      entry.metadata(),
    ]);
    const meta = metaMod.metadata;

    const metadata: BaseDocMeta = {
      title: meta.title,
      slug: href,
      description: meta.description,
      badges: meta.badges,
    };

    return {
      kind: "static",
      href,
      metadata,
      Content: contentMod.default,
    };
  }

  if (entry.kind === "category") {
    const category = entry.category;
    const group = DOCS_NAV.find(
      (g) => g.label.toLowerCase() === category,
    );

    const metadata: BaseDocMeta = {
      title: group?.label ?? category,
      slug: href,
      description:
        category === "themes"
          ? "Design systems that define the visual foundation of your project."
          : category === "addons"
            ? "Interaction, animation, and effect modules that layer on top of any Theme."
            : category === "rules"
              ? "Visual constraints and conventions that keep your output consistent."
              : "Agent configuration and setup guides.",
    };

    const items = group
      ? group.items.map((item) => ({
          title: item.label,
          href: item.href,
          description: item.meta?.agents
            ? `Works with: ${item.meta.agents.join(", ")}`
            : undefined,
          badges: item.badge ? [item.badge] : undefined,
        }))
      : [];

    return {
      kind: "category",
      href,
      metadata,
      items,
    };
  }

  if (entry.kind === "skill") {
    const [contentMod, metaMod] = await Promise.all([
      entry.content(),
      entry.metadata(),
    ]);
    const meta = metaMod.metadata;

    const sourceFilename = SOURCE_FILENAME[entry.type as "theme" | "addon" | "rule"];
    const sourceMarkdown = (() => {
      try {
        return readSourceMarkdown(entry.sourcePath);
      } catch {
        return meta.skillMarkdown;
      }
    })();

    return {
      kind: "skill",
      href,
      metadata: {
        title: meta.title,
        slug: href,
        type: meta.type,
        description: meta.description,
        features: meta.features?.map((f) => f.label),
        previews: meta.previews?.map((p) => ({
          title: p.title,
          description: p.caption,
          tags: p.tags,
        })),
        installCommands: meta.installCommands?.map((c) => c.command),
        folderStructure: meta.folderStructure
          ? JSON.stringify(meta.folderStructure)
          : undefined,
      },
      Content: contentMod.default,
      sourceMarkdown,
      sourceFilename,
    };
  }

  if (entry.kind === "agent") {
    const [contentMod, metaMod] = await Promise.all([
      entry.content(),
      entry.metadata(),
    ]);
    const meta = metaMod.metadata;

    return {
      kind: "agent",
      href,
      metadata: {
        title: meta.title,
        slug: href,
        type: "agent",
        description: meta.description,
        features: meta.features?.map((f) => f.label),
        previews: meta.previews?.map((p) => ({
          title: p.title,
          description: p.caption,
          tags: p.tags,
        })),
        installCommands: meta.installCommands?.map((c) => c.command),
        folderStructure: meta.folderStructure
          ? JSON.stringify(meta.folderStructure)
          : undefined,
      },
      Content: contentMod.default,
    };
  }

  return null;
}
