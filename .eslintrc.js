module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    semi: ["error", "always"],
    "no-console": 2,
    curly: 0,
    "brace-style": ["error", "stroustrup"],
    indent: ["error", 2],
    "eol-last": ["error", "always"],
    "@typescript-eslint/no-unused-vars": 2,
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: [".eslintrc.js", "snowpack.config.js"],
      env: {
        node: true,
      },
    },
  ],
};
