import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  languageOptions: { 
    globals: globals.browser,
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
  ],
  overrides: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
  ],
  rules: {
    // Code quality rules (customize as needed)
    'eqeqeq': 'error',          // Enforce strict equality
    'curly': 'error',           // Enforce curly braces for all blocks
    'no-console': 'warn',       // Warn on console logs
    'react/prop-types': 'off',  // Disable prop-types as an example (useful if using TypeScript)
  },
});


