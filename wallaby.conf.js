module.exports = function (w) {
  return {
    files: [
      'package.json',
      'src/**/*.ts',
    ],

    tests: [
      'test/**/*.spec.ts'
    ],
    env: {
      type: "node"
    },
    testFramework: "mocha"
  }
}