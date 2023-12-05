module.exports = {
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
  },
  root: true,
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: ['prettier', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'plugin:playwright/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
}
