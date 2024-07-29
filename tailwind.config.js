/** @type {import('tailwindcss').Config} */

import palette from './palette';

export default {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: palette
    },
    fontFamily: {
      regular: ["RobotoRegular"],
      medium: ["RobotoMedium"],
      bold: ["RobotoBold"],
      black: ["RobotBlack"],
    },
  },
  plugins: [],
};
