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
  // 1. Read the selected theme from theme.md.
  // 2. Read selected add-ons from addon.md.
  // 3. Read selected rules from rule.md.
  // 4. Generate a merged parent SKILL.md.
  // 5. Copy theme source into references/theme.md.
  // 6. Copy addon sources into references/addons/<slug>.md.
  // 7. Copy rule sources into references/rules/<slug>.md.
}
