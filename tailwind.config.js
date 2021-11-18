const colors = {
  brand: {
    purple: '#7371EE',
    gray: {
      50: '#F2F2F2',
      200: '#E9E9E9',
    },
  },
}

module.exports = {
  content: ['./index.html', './**/*.tsx'],
  theme: {
    extend: { colors },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
