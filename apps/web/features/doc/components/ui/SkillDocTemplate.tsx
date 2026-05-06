import type { SkillDoc } from "../../data/skills";
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
      <div className="border-b border-[var(--color-border)] px-4 py-8 md:px-8 lg:px-10">
        <h1 className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl text-[var(--color-foreground)]">
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
              <div className="divide-y divide-[var(--color-border)]">
                <div className="px-4 pt-10 pb-10 md:px-8 lg:px-10">
                  <div
                    data-toc-label
                    className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]"
                  >
                    {doc.type === "theme" ? "Design Direction" : "Overview"}
                  </div>
                  <p className="font-mono text-lg text-[var(--color-foreground)]">
                    {doc.subtitle}
                  </p>
                </div>

                <div className="py-10">
                  <div
                    data-toc-label
                    className="px-4 pb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)] md:px-8 lg:px-10">
                    Previews
                  </div>
                  <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 border-t border-l border-[var(--color-border)]">
                    {doc.previews.map((preview, i) => (
                      <PreviewCard key={`${preview.title}-${i}`} {...preview} />
                    ))}
                  </div>
                </div>

                <div className="px-4 pt-10 md:px-8 lg:px-10">
                  <div
                    data-toc-label
                    className="pb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
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
              <div className="divide-y divide-[var(--color-border)]">
                <div className="px-4 pb-10 md:px-8 lg:px-10">
                  <div
                    data-toc-label
                    className="pb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                    Install
                  </div>
                  <InstallCommands
                    commands={doc.installCommands}
                    allCommand={doc.allInstallCommand}
                  />
                </div>

                <div className="px-4 py-10 md:px-8 lg:px-10">
                  <div
                    data-toc-label
                    className="pb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                    Folder Structure
                  </div>
                  <FolderTree structure={doc.folderStructure} />
                </div>

                <div className="px-4 pt-10 md:px-8 lg:px-10">
                  <div
                    data-toc-label
                    className="pb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
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
