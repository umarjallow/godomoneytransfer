module.exports = {
  mode : 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /* colors:{
      godo: {
        'light': '#BBA7C8',
        'DEFAULT': '#D3D2D2',
        'dark': '#331c5f',
      }
    } */
      
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
