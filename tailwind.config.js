const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        'full': '100%',
        '1/2': '50%',
      },
    },
  },
  variants: {},
  plugins: [],
};
