// @ts-check

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig({
    files: ['src/**/*.ts'],
    languageOptions: {
        ecmaVersion: 2022,
        parserOptions: {
            projectService: true,
        },
    },
    extends: [
        eslint.configs.recommended,
        stylistic.configs.customize({
            braceStyle: '1tbs',
            indent: 4,
            semi: true,
        }),
        tseslint.configs.strictTypeChecked,
        tseslint.configs.stylisticTypeChecked,
    ],
    plugins: {
        '@stylistic': stylistic,
        '@typescript-eslint': tseslint.plugin,
    },
});
