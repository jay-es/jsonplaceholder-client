// @ts-check
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfig from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

/**
 * ESLint Config
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    ignores: ["**/dist/**/*", "**/node_modules/**/*"],
  },
  eslintConfig.configs.recommended,
  ...compat.extends(
    "plugin:@typescript-eslint/base",
    "plugin:@typescript-eslint/eslint-recommended"
  ),
  {
    files: ["**/*.ts"],
    rules: {
      ...tsEslintPlugin.configs["strict"].rules,
      ...tsEslintPlugin.configs["stylistic"].rules,
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/explicit-module-boundary-types": "error",
    },
  },
  eslintConfigPrettier,
];
