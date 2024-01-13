// module.exports = {
//   root: true,
//   extends: '@react-native',
// };
// module.exports = {
//   rules: {
//     // Note: you must disable the base rule as it can report incorrect errors
//     extends: '@react-native',
//     'no-unused-vars': 'off',
//     '@typescript-eslint/no-unused-vars': 'error',
//   },
// };
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
