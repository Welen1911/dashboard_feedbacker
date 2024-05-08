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
  transformIgnorePatterns: ["node_modules/(?!axios)"],
}
