import Content from "./content";
import { metadata } from "./metadata";
import { SkillDocTemplate } from "@/features/docs/components/skill-page/SkillDocTemplate";

export default function Page() {
  return (
    <SkillDocTemplate
      metadata={metadata}
      previewContent={<Content />}
    />
  );
}
