import { describe, expect, it } from "vitest";
import type { PropDoc } from "../data/components";
import { propControl } from "./Playground";

const prop = (overrides: Partial<PropDoc>): PropDoc => ({
  name: "prop",
  type: "string",
  description: "",
  ...overrides,
});

describe("playground controls", () => {
  it("maps colors, numbers, and literal unions", () => {
    expect(propControl(prop({ default: '"#ffeb50"' }))).toMatchObject({
      kind: "color",
      value: "#ffeb50",
    });
    expect(propControl(prop({ type: "number", default: "320" }))).toMatchObject(
      { kind: "number", value: 320 },
    );
    expect(
      propControl(prop({ type: '"soft" | "strong"', default: '"soft"' })),
    ).toMatchObject({ kind: "select", options: ["soft", "strong"] });
  });

  it("skips props that cannot be controlled", () => {
    expect(propControl(prop({ name: "...props" }))).toBeNull();
    expect(propControl(prop({ type: "ReactNode" }))).toBeNull();
    expect(
      propControl(prop({ type: "[string, string, string]", default: "[]" })),
    ).toBeNull();
    expect(propControl(prop({ default: undefined }))).toBeNull();
  });
});
