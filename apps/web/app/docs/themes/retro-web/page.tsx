import { getSkillDoc } from "@/features/doc/data/skills";
import { SkillDocTemplate } from "@/features/doc/components/ui/SkillDocTemplate";
import { notFound } from "next/navigation";

export default function Page() {
  const doc = getSkillDoc("retro-web");
  if (!doc) notFound();
  return <SkillDocTemplate doc={doc} />;
}
