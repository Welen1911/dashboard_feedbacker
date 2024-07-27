// module.exports = {
//   preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
//   testMatch: [
//     '**/*.spec.js'
//   ]
// }

export default {
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  testMatch: [
    '**/*.spec.js'
  ],
  testEnvironment: 'jsdom',
  testTimeout: 30000,
  transformIgnorePatterns: ["node_modules/(?!axios)"],
}
