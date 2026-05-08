import type { ArctisComposition } from "@/shared/types/arctis";

/**
 * Compose multiple skills into one project-local arctis skill package.
 * Placeholder — will implement `npx arctis init` composition logic.
 */
export async function composeArctisSkill(
  composition: ArctisComposition,
  outputDir: string,
): Promise<void> {
  // Placeholder: log the composition plan.
  void outputDir;
  console.log("[arctis compose]", composition);
  // Future:
  // 1. Read each skill's SKILL.md and merge into one.
  // 2. Collect references/ files from each skill.
  // 3. Write to outputDir/{theme, addons, rules}/.
  // 4. Generate a merged SKILL.md with section headers.
}
