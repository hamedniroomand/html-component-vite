import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,js}'],
    rules: {
      'semi': 'error',
      'quotes': ['error', 'single'],
      'no-console': 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'no-extra-semi': 'error',
      'no-extra-boolean-cast': 'error',
    }
  }
], {
  ignores: ['dist/**']
});
