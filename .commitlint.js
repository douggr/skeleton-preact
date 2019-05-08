/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

module.exports = {
  extends: ["@commitlint/config-conventional"],

  rules: {
    "scope-enum": [
      2,
      "always",
      ["components", "routes", "services", "styles"],
    ],
  },
};
