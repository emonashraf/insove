/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',

      md: '768px',

      lg: '960px',

      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd',
        },
        grey: '#e8f0f1',
      },
      fontFamily: {
        primary: 'POppins',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 2px 30px 0px rgba(8, 70, 81, 0.06)',
      },
      backgroundImage: {
        services: 'url(../../src/assets/img/services/bg.svg)',
        testimonials: 'url(../../src/assets/img/testimonials/bg.svg)',
        departments: 'url(../../src/assets/img/departments/bg.svg)',
        quotLeft: 'url(../../src/assets/icons/testimonials/quote-left.svg)',
        quotRight: 'url(../../src/assets/icons/testimonials/quote-right.svg)',
      },
    },
  },
  plugins: [],
};
