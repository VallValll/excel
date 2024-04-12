module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 'off',
    'coma-dangle': 'off',
    'linebreak-style': ['error', 'unix'],
    'eol-last': ['error', 'always'],
  },
};
