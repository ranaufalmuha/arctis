/**
 * CLI configuration layer.
 * Placeholder for reading arctis.json from project root.
 */
export function loadConfig(_cwd?: string) {
  return {
    theme: "prismatic-architecture",
    addons: [],
    rules: [],
    agents: ["claude-code", "opencode", "codex"],
  };
}
