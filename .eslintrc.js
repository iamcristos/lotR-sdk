module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    project: './tsconfig.json',
    sourceType: 'module',
    createDefaultProgram: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.ts', '.tsx', '.js'],
      },
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'arrow-parens': ['error', 'always'],
    'import/prefer-default-export': 0,
    '@typescript-eslint/indent': 0,
    'no-nested-ternary': 0,
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
}
