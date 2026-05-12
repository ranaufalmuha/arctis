/**
 * Read the instruction source file from a skill directory.
 * Resolves the correct filename based on skill type:
 *   theme -> theme.md
 *   addon -> addon.md
 *   rule  -> rule.md
 *
 * Placeholder — currently reads from the metadata.ts export.
 * In the future, this will read from the filesystem at build time.
 */
export function readSkillMarkdown(slug: string, type?: "theme" | "addon" | "rule" | "agent"): string {
  // Placeholder: return empty string for now.
  // Future: resolve the correct filename based on type and use
  // fs.readFileSync(join(skillDir, <resolved-filename>), 'utf-8')
  // during build to read the raw file content.
  void slug;
  void type;
  return "";
}
