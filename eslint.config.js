import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import eslintJs from '@eslint/js';

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: eslintJs.configs.recommended,
});

export default [
  { ignores: ['.vitepress/cache/**', '.vitepress/dist/**'] },
  ...compat.config({
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    env: {
      node: true,
      mocha: true,
      es2022: true,
    },
    plugins: ['import', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:prettier/recommended',
      'plugin:vue/recommended',
    ],
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'import/no-commonjs': 'error',
      // Preserve the ESLint 8 recommended rule set while adopting ESLint 9.
      'no-constant-binary-expression': 'off',
      'no-empty-static-block': 'off',
      'no-inner-declarations': 'error',
      'no-new-native-nonconstructor': 'off',
      'no-new-symbol': 'error',
      'no-unused-private-class-members': 'off',
    },
    settings: {
      'import/resolver': {
        exports: true,
        node: true,
      },
    },
  }),
];
