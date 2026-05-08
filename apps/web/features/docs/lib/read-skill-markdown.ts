/**
 * Read a SKILL.md file from a skill directory.
 * Placeholder — currently reads from the metadata.ts export.
 * In the future, this will read from the filesystem at build time.
 */
export function readSkillMarkdown(slug: string): string {
  // Placeholder: return empty string for now.
  // Future: use fs.readFileSync(join(skillDir, 'SKILL.md'), 'utf-8')
  // during build to read the raw file content.
  void slug;
  return "";
}
