/** @type {import('prettier').Config} */
module.exports = {
  trailingComma: "es5",
  printWidth: 64,
  endOfLine: 'auto',
  useTabs: false,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  quoteProps: 'as-needed',
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: true,
  proseWrap: 'never',
  angeStart: 0,
  angeEnd: Infinity,
  // singleAttributePerLine: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    require.resolve("prettier-plugin-tailwindcss")
  ],
}