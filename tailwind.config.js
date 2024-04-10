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
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        primary: 'hsl(var(--primary))',
        'primary-text': 'hsl(var(--primary-text))',
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
    },
    fontFamily: {
      sans: ['Arial', 'Helvetica', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [tailwindcssTypography, tailwindcssForms],
};
