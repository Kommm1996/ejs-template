/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindcssTypography = require('@tailwindcss/typography');
const tailwindcssForms = require('@tailwindcss/forms');

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/ejs/**/*.ejs'],
  theme: {
    // extend: {},
    fontFamily: {
      sans: ['Arial', 'Helvetica', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [tailwindcssTypography, tailwindcssForms],
};
