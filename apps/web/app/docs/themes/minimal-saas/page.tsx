import { getSkillDoc } from "@/features/doc/data/skills";
import { SkillDocTemplate } from "@/features/doc/components/ui/SkillDocTemplate";
import { notFound } from "next/navigation";

export default function Page() {
  const doc = getSkillDoc("minimal-saas");
  if (!doc) notFound();
  return <SkillDocTemplate doc={doc} />;
}
