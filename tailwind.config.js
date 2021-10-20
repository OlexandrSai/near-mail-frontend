module.exports = {
  purge: [`./index.html`, `./src/**/*.vue,js,ts,jsx,tsx}`],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray:{
          400: '#BABABA',
          900: '#171717',
        }, 
        blue: {
          300: '#22DCF5',
          400: '#3A9BD5'
        },
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      scale: ['active', 'hover'],
    },
  },
  plugins: [],
}
