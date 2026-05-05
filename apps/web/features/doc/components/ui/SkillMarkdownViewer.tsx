"use client";

import { CodeBlock } from "@arctis/ui";

type SkillMarkdownViewerProps = {
  code: string;
};

export function SkillMarkdownViewer({ code }: SkillMarkdownViewerProps) {
  return <CodeBlock code={code} lang="markdown" showLineNumbers />;
}
