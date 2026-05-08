import type { SkillDocMeta } from "@/shared/types/skills";

/**
 * Resolve a skill document from a slug.
 * Placeholder — currently metadata is imported directly in each page.
 * In the future, this could read from a centralized manifest at build time.
 */
export async function resolveSkillDoc(
  slug: string,
): Promise<SkillDocMeta | null> {
  // Placeholder: return null for now.
  // Future: import metadata from the skill directory dynamically.
  void slug;
  return null;
}
