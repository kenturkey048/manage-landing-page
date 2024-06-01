/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./doc/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        DarkBlue: 'hsl(12, 39%, 23%)',
        DarkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(13, 100%, 96%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}

