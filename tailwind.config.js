/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myyrcozelen: '#8DF58C',
        mytemnozelen: '#9AD479',
        myheitralnu: '#D1EB91',
        mytemnogoltui: '#D4D279',
        myyrcogoltui: '#F5E98C',
        veryDarkBlue: 'hsl(228, 12%, 13%)',
        myslate: '#d4e5fc',
      },
      fontFamily: {
        sans: ['Pixelify Sans'],
      },
    },
  },
  plugins: [],
}