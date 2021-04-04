module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: '#274B89',
        teal2: '#1B1464',
        gray1: '#18191F',
        gray2: '#515151',
        gray3: '#F4F5F7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
