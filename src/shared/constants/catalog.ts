export type ComponentCategory = "buttons" | "cards" | "text" | "backgrounds";

export const CATEGORIES: {
  id: ComponentCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "buttons",
    label: "Buttons",
    description: "High-intent actions with a glow.",
  },
  {
    id: "cards",
    label: "Cards",
    description: "Containers that react to the pointer.",
  },
  {
    id: "text",
    label: "Text",
    description: "Type effects for headlines and labels.",
  },
  {
    id: "backgrounds",
    label: "Backgrounds",
    description: "Atmospheric layers for full sections.",
  },
];
