// @ts-check

import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config({
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.strictTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
        eslintConfigPrettier,
    ],
    plugins: {
        '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        parser: tseslint.parser,
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname,
        },
    },
    files: ['src/**/*.ts'],
});
