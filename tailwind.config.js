/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui]
}

// Parsing error: ESLint was configured to run on `<tsconfigRootDir>/tailwind.config.js` using `parserOptions.project`: 
// - /users/kargweng/code/react-playground/zustand-tailwind-form/tsconfig.json
// - /users/kargweng/code/react-playground/zustand-tailwind-form/tsconfig.node.json
// However, none of those TSConfigs include this file. Either:
// - Change ESLint's list of included files to not include this file
// - Change one of those TSConfigs to include this file
// - Create a new TSConfig that includes this file and include it in your parserOptions.project
// See the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file