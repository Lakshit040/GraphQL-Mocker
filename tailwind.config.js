/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      gradientColorStops: (theme) => ({
        'blue-300': theme('colors.blue.300'),
        'pink-300': theme('colors.pink.300'),
        'blue-800': theme('colors.blue.800'),
        'purple-800': theme('colors.purple.800'),
      }),
      fontFamily: {
        'heading': ['Roboto', 'sans-serif'],
      },
      textShadow: {
        'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
        // Add as many variants as you want
        'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}

