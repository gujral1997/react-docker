module.exports = {
  verbose: true,
  testEnvironment: "node",
  testMatch: ["**/?(*.)(spec|test).js?(x)", "**/test/**/*.js?(x)"],
  testPathIgnorePatterns: ["/node_modules/", "/.+/helpers/", "/config/"],
};
