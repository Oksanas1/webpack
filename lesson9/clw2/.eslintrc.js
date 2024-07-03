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
  "env": {
    "browser": true,
    "node": true
  },
  globals: {
    document: true,
    alert: true,
  }
}