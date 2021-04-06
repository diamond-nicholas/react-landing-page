module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        black1: '#0B0D17',
        teal: '#274B89',
        teal2: '#1B1464',
        gray1: '#18191F',
        gray2: '#515151',
        gray3: '#F4F5F7',
        gray4: '#D9DBE1',
        orange1: '#FFEDED',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
