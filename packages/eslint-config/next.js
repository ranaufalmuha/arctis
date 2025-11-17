import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import pluginNext from "@next/eslint-plugin-next";
import globals from "globals";
import { config as baseConfig } from "./base.js";
import { globalIgnores } from "eslint/config";

/**
 * ESLint configuration optimized for Next.js environments.
 */
export const nextJsConfig = [
  ...baseConfig,

  // JS + TS


  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React
  pluginReact.configs.flat.recommended,

  // Next.js plugin
  {
    plugins: { "@next/next": pluginNext },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules
    }
  },

  // React hooks
  {
    plugins: { "react-hooks": pluginReactHooks },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off"
    },
    settings: { react: { version: "detect" } }
  },

  // Prettier last
  eslintConfigPrettier,

  // Special Next.js ignores
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ]),

  // Browser globals
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
];
