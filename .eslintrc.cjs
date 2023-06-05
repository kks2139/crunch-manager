module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/exhaustive-deps': ['warn', {enableDangerousAutofixThisMayCauseInfiniteLoops: true}],
    'sort-keys': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error'
  },
}
