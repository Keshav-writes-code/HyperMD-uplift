module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-var': 'off',
    'prefer-const': 'off',
    'no-useless-escape': 'off',
    'prefer-rest-params': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    'no-empty': 'off',
    'no-constant-condition': 'off',
    'no-misleading-character-class': 'off'
  },
}
