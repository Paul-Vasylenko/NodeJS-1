module.exports = {
  root: true,
  extends: ["custom"],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
		project: "tsconfig.json"
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
};
