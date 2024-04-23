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
    'require-jsdoc': 0,
    'indent': ['error', 2],
    'operator-linebreak': 'off',
    'object-curly-spacing': 'off',
  },
};
