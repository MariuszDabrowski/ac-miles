module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': 0,
    'react/state-in-constructor': 0,
    'no-prototype-builtins': 0,
    'react/no-danger': 0
  },
};