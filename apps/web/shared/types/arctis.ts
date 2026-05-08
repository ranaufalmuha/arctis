import type { AgentTarget } from "./skills";

export type ArctisComposition = {
  theme: string;
  addons: string[];
  rules: string[];
  agents: AgentTarget[];
};
