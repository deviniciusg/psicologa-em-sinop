/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: '#E0D7D2',
        text: '#1f2933',
        muted: '#5b5857',
        accent: '#72353A',
        card: '#bd6c6d',
      }
    },
  },
  plugins: [],
}