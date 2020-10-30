const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          ...defaultTheme.colors.gray,
          750: '#424c5c',
          850: '#232b38',
        },
      },

      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        'full': '100%',
        '1/2': '50%',
      },

      minWidth: {
        48: '12rem',
      },
    },
  },
  variants: {
    fontWeight: ['active'],
    backgroundColor: ['hover', 'dark', 'dark-hover', 'dark-focus'],
    textColor: ['hover', 'dark', 'dark-hover', 'dark-focus'],
    borderColor: ['dark'],
    borderWidth: ['last'],
    boxShadow: ['active'],
    placeholderColor: ['dark'],
    opacity: ['disabled'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
};
