import type { ReactNode } from "react";
import { DocsTabs } from "./DocsTabs";
import { PreviewCard } from "./PreviewCard";
import { FeatureGrid } from "./FeatureGrid";
import { InstallCommands } from "./InstallCommands";
import { FolderTree } from "./FolderTree";
import { SkillMarkdownViewer } from "./SkillMarkdownViewer";

export type SkillDocMetadata = {
  title: string;
  description: string;
  type: "theme" | "addon" | "rule" | "agent" | "guide";
  features: { label: string }[];
  previews: { title: string; caption: string; tags: string[] }[];
  installCommands: { agent: string; command: string }[];
  allInstallCommand: string;
  folderStructure: { name: string; type: "file" | "folder"; children?: { name: string; type: "file" | "folder"; children?: any[] }[] }[];
  skillMarkdown: string;
};

type SkillDocTemplateProps = {
  metadata: SkillDocMetadata;
  previewContent: ReactNode;
};

export function SkillDocTemplate({
  metadata: doc,
  previewContent,
}: SkillDocTemplateProps) {
  return (
    <div>
      <div className="border-b border-[var(--color-border)] py-8">
        <h1 className="mb-2 font-mono text-3xl font-bold tracking-tight md:text-4xl text-[var(--color-foreground)]">
          {doc.title}
        </h1>
        <p className="font-mono text-base leading-relaxed text-[var(--color-muted)]">
          {doc.description}
        </p>
      </div>

      <DocsTabs
        tabs={[
          {
            key: "preview",
            label: "Preview",
            content: (
              <div className="divide-y divide-[var(--color-border)]">
                <div className="pt-10 pb-10">
                  <div
                    data-toc-label
                    className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]"
                  >
                    {doc.type === "theme" ? "Design Direction" : "Overview"}
                  </div>
                  <div className="font-mono text-lg text-[var(--color-foreground)]">
                    {previewContent}
                  </div>
                </div>

                {doc.previews.length > 0 && (
                  <div className="py-10">
                    <div
                      data-toc-label
                      className="pb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                      Previews
                    </div>
                    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 border-t border-l border-[var(--color-border)]">
                      {doc.previews.map((preview, i) => (
                        <PreviewCard key={`${preview.title}-${i}`} {...preview} />
                      ))}
                    </div>
                  </div>
                )}

                {doc.features.length > 0 && (
                  <div className="pt-10">
                    <div
                      data-toc-label
                      className="pb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                      Features
                    </div>
                    <FeatureGrid features={doc.features} />
                  </div>
                )}
              </div>
            ),
          },
          {
            key: "code",
            label: "Code",
            content: (
              <div className="divide-y divide-[var(--color-border)]">
                <div className="pb-10">
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

                {doc.folderStructure.length > 0 && (
                  <div className="py-10">
                    <div
                      data-toc-label
                      className="pb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-muted-strong)]">
                      Folder Structure
                    </div>
                    <FolderTree structure={doc.folderStructure} />
                  </div>
                )}

                <div className="pt-10">
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
