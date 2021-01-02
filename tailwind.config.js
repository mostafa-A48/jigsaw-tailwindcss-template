const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      'source/**/*.blade.php',
      'source/**/*.md',
      'source/**/*.html',
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
