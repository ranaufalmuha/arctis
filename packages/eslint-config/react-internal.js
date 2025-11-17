import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import { config as baseConfig } from "./base.js";

/**
 * ESLint configuration for React component libraries like ARCTIS UI.
 */
export const config = [
  ...baseConfig,

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React recommended
  pluginReact.configs.flat.recommended,

  // Browser + worker globals
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.serviceworker
      }
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

  // Prettier cleanup
  eslintConfigPrettier
];
