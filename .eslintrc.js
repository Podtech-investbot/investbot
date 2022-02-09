module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['prettier', 'eslint:recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: 'always',
        endOfLine: 'auto'
      }
    ],
    'no-console': 'error',
    'no-debugger': 'error',
    'comma-dangle': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-empty': 'error',
    'no-var': 'error',
    'no-unsafe-finally': 'off',
    'no-useless-escape': 'off',
    'nuxt/no-cjs-in-config': 'off',
    camelcase: ['off']
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true
      }
    }
  ]
};
