import eslint from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

import globals from 'globals';

const compat = new FlatCompat();

export default tseslint.config(
  {
    files: ['apps/web/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['apps/web/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...compat.extends('next/core-web-vitals'),
    ],
    settings: {
      // Locating the Next.js application
      // https://nextjs.org/docs/app/building-your-application/configuring/eslint#custom-settings
      next: {
        rootDir: 'apps/web',
      },
    },
  },

  {
    files: ['packages/database/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: ['packages/database/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
      },
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
  },

  {
    files: ['**/*.{js,jsx,mjs}'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/out/**', '**/build/**'],
  },

  eslintConfigPrettier,
);
