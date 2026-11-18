import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { CATEGORIES } from "@/shared/constants/catalog";
import { SHOWCASE_ITEMS } from "./components";

type RegistryItem = {
  name: string;
  type: string;
  files: { path: string; target?: string }[];
  registryDependencies?: string[];
};

type Registry = {
  name: string;
  homepage: string;
  items: RegistryItem[];
};

const root = process.cwd();
const registry = JSON.parse(
  readFileSync(path.join(root, "registry.json"), "utf8"),
) as Registry;

describe("registry manifest", () => {
  it("declares a unique catalog that matches the showcase", () => {
    const names = registry.items.map((item) => item.name);
    expect(new Set(names).size).toBe(names.length);
    expect(registry.name).toBe("arctis");
    expect(registry.homepage).toBe("https://arctis.dev");

    for (const item of SHOWCASE_ITEMS) {
      const entry = registry.items.find(
        (candidate) => candidate.name === item.name,
      );
      expect(entry, `missing registry item: ${item.name}`).toBeDefined();
      expect(entry?.files[0]?.target).toBeTruthy();
      expect(item.dependencies.length).toBeGreaterThan(0);
      expect(item.props.length).toBeGreaterThan(0);
      expect(CATEGORIES.some((category) => category.id === item.category)).toBe(
        true,
      );
    }
  });

  it("points every file at a real source file", () => {
    for (const item of registry.items) {
      expect(item.files.length).toBeGreaterThan(0);
      for (const file of item.files) {
        expect(existsSync(path.join(root, file.path)), file.path).toBe(true);
      }
    }
  });
});
