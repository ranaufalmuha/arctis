"use client";

import { CodeBlock } from "@/shared/components/ui/CodeBlock";

type SkillMarkdownViewerProps = {
  code: string;
};

export function SkillMarkdownViewer({ code }: SkillMarkdownViewerProps) {
  return <CodeBlock code={code} lang="markdown" showLineNumbers />;
}
