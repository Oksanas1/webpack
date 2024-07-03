module.exports = {
  extends: "eslint-config-airbnb-base",
  rules: {
    "no-console": 0,
    "no-unused-vars": "warn",
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module'
  },
  globals: {
    document: true,
    alert: true,
  }
}