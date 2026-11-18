import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const css = readFileSync(
  path.join(process.cwd(), "src/shared/styles/globals.css"),
  "utf8",
);

function tokens(selector: string) {
  const start = css.indexOf(`${selector} {`);
  const body = css.slice(start, css.indexOf("}", start));
  const entries = [...body.matchAll(/--([\w-]+): (#[0-9a-fA-F]{6});/g)];
  return new Map(entries.map((match) => [match[1], match[2]]));
}

const channels = (hex: string) =>
  [1, 3, 5].map((index) => Number.parseInt(hex.slice(index, index + 2), 16));

const NEUTRALS = [
  "background",
  "card",
  "popover",
  "secondary",
  "muted",
  "panel",
  "panel-strong",
  "border",
  "border-strong",
  "input",
];

describe.each([
  ["light", ":root"],
  ["dark", ".dark"],
])("%s palette", (_name, selector) => {
  const palette = tokens(selector);

  // Black and white UI: neutrals stay achromatic, no brown or violet cast.
  it("keeps neutral surfaces achromatic", () => {
    for (const name of NEUTRALS) {
      const hex = palette.get(name);
      expect(hex, name).toBeDefined();
      const [r, g, b] = channels(hex as string);
      expect(
        Math.max(r, g, b) - Math.min(r, g, b),
        `${name} ${hex} is tinted`,
      ).toBeLessThanOrEqual(8);
    }
  });

  it("keeps the accent yellow", () => {
    for (const name of ["primary", "accent"]) {
      const [r, g, b] = channels(palette.get(name) as string);
      expect(r, name).toBeGreaterThanOrEqual(g);
      expect(g, name).toBeGreaterThan(b);
    }
  });
});
