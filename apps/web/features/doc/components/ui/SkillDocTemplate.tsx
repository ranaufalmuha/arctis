import type { SkillDoc } from "../../data/skills";
import { MetadataBadge } from "./MetadataBadge";
import { DocsTabs } from "./DocsTabs";
import { PreviewCard } from "./PreviewCard";
import { FeatureGrid } from "./FeatureGrid";
import { InstallCommands } from "./InstallCommands";
import { FolderTree } from "./FolderTree";
import { SkillMarkdownViewer } from "./SkillMarkdownViewer";

type SkillDocTemplateProps = {
  doc: SkillDoc;
};

export function SkillDocTemplate({ doc }: SkillDocTemplateProps) {
  return (
    <div>
      {/* Header */}
      <div className="mb-8 border-b border-[var(--color-border)] pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {doc.badges.map((badge, i) => (
            <MetadataBadge key={i} variant={i === 0 ? "accent" : "default"}>
              {badge}
            </MetadataBadge>
          ))}
        </div>
        <h1 className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl">
          {doc.title}
        </h1>
        <p className="font-mono text-base leading-relaxed text-[var(--color-muted)]">
          {doc.description}
        </p>
      </div>

      {/* Tabs */}
      <DocsTabs
        tabs={[
          {
            key: "preview",
            label: "Preview",
            content: (
              <div className="space-y-10">
                <div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                    {doc.type === "theme" ? "Design Direction" : "Overview"}
                  </div>
                  <p className="font-mono text-lg text-[var(--color-foreground)]">
                    {doc.subtitle}
                  </p>
                </div>

                <div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                    Previews
                  </div>
                  <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 border-t border-l border-[var(--color-border)]">
                    {doc.previews.map((preview) => (
                      <PreviewCard key={preview.title} {...preview} />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                    Features
                  </div>
                  <FeatureGrid features={doc.features} />
                </div>
              </div>
            ),
          },
          {
            key: "code",
            label: "Code",
            content: (
              <div className="space-y-10">
                <div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                    Install
                  </div>
                  <InstallCommands
                    commands={doc.installCommands}
                    allCommand={doc.allInstallCommand}
                  />
                </div>

                <div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                    Folder Structure
                  </div>
                  <FolderTree structure={doc.folderStructure} />
                </div>

                <div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                    SKILL.md
                  </div>
                  <SkillMarkdownViewer code={doc.skillMarkdown} />
                </div>
              </div>
            ),
          },
        ]}
        defaultTab="preview"
      />
    </div>
  );
}
