/* eslint-env node */
module.exports = {
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort', 'promise'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsConfigRootDir: __dirname,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  root: true,
  rules: {
    'prettier/prettier': ['error', { semi: false }],
    'no-console': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  ignorePatterns: ['.eslintrc.cjs'],
}
