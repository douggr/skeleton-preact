/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

module.exports = {
  extends: ["eslint-config-synacor"],
  rules: {
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "arrow-parens": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    curly: "error",
    indent: ["error", 2],
    "max-len": [1, 76],
    // 'no-floating-decimal': 'error',
    // 'no-new': 'warn',
    // 'no-undef': 'error',
    "no-unused-vars": "error",
    "no-var": "error",
    "prefer-const": "error",
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
      },
    ],
    "quote-props": ["error", "consistent"],
    semi: [
      "error",
      "always",
      {
        omitLastInOneLineBlock: true,
      },
    ],
    "space-before-function-paren": ["error", "never"],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "valid-jsdoc": "warn",
  },
};
