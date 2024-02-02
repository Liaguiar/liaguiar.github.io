/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors: {
      amber: colors.amber,
      emerald: colors.emerald,
      teal: '#007A7D',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

