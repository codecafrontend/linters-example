import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
