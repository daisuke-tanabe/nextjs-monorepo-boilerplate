import eslint from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat();

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./apps/web/tsconfig.json', './packages/database/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: ['node_modules', '.next', 'out', 'build'],
  },
  {
    files: ['apps/web/**/*.[jt]s', 'apps/web/**/*.[cm]js', 'apps/web/**/*.[cm]ts', 'apps/web/**/*.[jt]sx'],
    extends: compat.extends('next/core-web-vitals'),
    settings: {
      // Locating the Next.js application
      // https://nextjs.org/docs/app/building-your-application/configuring/eslint#custom-settings
      next: {
        rootDir: 'apps/web',
      },
    },
  },
  {
    files: ['**/*.js', '**/*.[cm]js', '**/*.jsx'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  eslintConfigPrettier,
);
