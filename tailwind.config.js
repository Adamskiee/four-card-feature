/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens: {
        'min-desktop': '768px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'red': 'var(--red)',
        'cyan': 'var(--cyan)',
        'orange': 'var(--orange)',
        'blue': 'var(--blue)',
        'grey-500': 'var(--grey-500)',
        'grey-400': 'var(--grey-400)',
        'white': 'var(--white)',
      }
    },
  },
  plugins: [],
}

