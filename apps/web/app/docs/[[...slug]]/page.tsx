import { notFound } from "next/navigation";
import { resolveDocPage } from "@/features/docs/lib/resolve-doc-page";
import { getDocRouteAllPaths } from "@/features/docs/lib/doc-route-registry";
import { DocPageTemplate } from "@/features/docs/components/doc-page/DocPageTemplate";
import { DocCategoryTemplate } from "@/features/docs/components/doc-page/DocCategoryTemplate";
import { SkillDocTemplate } from "@/features/docs/components/skill-page/SkillDocTemplate";

export function generateStaticParams() {
  return getDocRouteAllPaths().map((path) => {
    if (path === "/docs") return { slug: [] as string[] };
    const segments = path.replace("/docs/", "").split("/");
    return { slug: segments };
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const page = await resolveDocPage(slug);

  if (!page) notFound();

  if (page.kind === "skill") {
    return (
      <SkillDocTemplate
        metadata={{
          title: page.metadata.title,
          description: page.metadata.description,
          type: page.metadata.type as "theme" | "addon" | "rule",
          features: (page.metadata.features ?? []).map((f) => ({ label: f })),
          previews: (page.metadata.previews ?? []).map((p) => ({
            title: p.title,
            caption: p.description,
            tags: p.tags ?? [],
          })),
          installCommands: (page.metadata.installCommands ?? []).map((c, i) => {
            const agents = ["Claude Code", "OpenCode", "Codex"];
            return { agent: agents[i % agents.length] ?? "Agent", command: c };
          }),
          allInstallCommand:
            page.metadata.installCommands?.[0] ?? "",
          folderStructure: page.metadata.folderStructure
            ? JSON.parse(page.metadata.folderStructure)
            : [],
          skillMarkdown: page.sourceMarkdown,
        }}
        previewContent={<page.Content />}
        sourceMarkdown={page.sourceMarkdown}
        sourceFilename={page.sourceFilename}
      />
    );
  }

  if (page.kind === "agent") {
    return (
      <SkillDocTemplate
        metadata={{
          title: page.metadata.title,
          description: page.metadata.description,
          type: "agent",
          features: (page.metadata.features ?? []).map((f) => ({ label: f })),
          previews: (page.metadata.previews ?? []).map((p) => ({
            title: p.title,
            caption: p.description,
            tags: p.tags ?? [],
          })),
          installCommands: (page.metadata.installCommands ?? []).map((c, i) => {
            const agents = ["Claude Code", "OpenCode", "Codex"];
            return { agent: agents[i % agents.length] ?? "Agent", command: c };
          }),
          allInstallCommand:
            page.metadata.installCommands?.[0] ?? "",
          folderStructure: page.metadata.folderStructure
            ? JSON.parse(page.metadata.folderStructure)
            : [],
          skillMarkdown: "",
        }}
        previewContent={<page.Content />}
      />
    );
  }

  if (page.kind === "category") {
    return (
      <DocCategoryTemplate
        metadata={page.metadata}
        items={page.items}
      />
    );
  }

  return (
    <DocPageTemplate metadata={page.metadata}>
      <page.Content />
    </DocPageTemplate>
  );
}
