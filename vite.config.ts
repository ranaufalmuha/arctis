import { defineConfig } from "vite-plus";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      // Registry sources use shadcn's canonical utils import. Point it at the
      // app's shared utils so the same file works in the site and on install.
      {
        find: /^@\/lib\/utils$/,
        replacement: path.resolve(
          import.meta.dirname,
          "src/shared/lib/utils.ts",
        ),
      },
      {
        find: /^@\//,
        replacement: `${path.resolve(import.meta.dirname, "src")}/`,
      },
    ],
  },
  build: {
    target: "es2022",
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
    passWithNoTests: false,
  },
  fmt: {
    ignorePatterns: [
      "dist/**",
      "public/**",
      ".agents/**",
      "opencode.json",
      "pnpm-lock.yaml",
    ],
    printWidth: 80,
    singleQuote: false,
    semi: true,
    trailingComma: "all",
  },
  lint: {
    ignorePatterns: ["dist/**", "public/**", ".agents/**"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      "no-console": ["error", { allow: ["error"] }],
    },
  },
});
