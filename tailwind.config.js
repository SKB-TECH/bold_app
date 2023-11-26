/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },

        rouge:{
          100: '#af2e16'
        }
      },
      backgroundImage: {
        'bg-img-1': "url('/src/data/imagescreen1.png')",
        'bg-img-2': "url('/src/data/imagescreen2.png')",
        'feature-bg': "url('/src/data/feature-bg.png')",
        pattern: "url('/src/data/pattern.png')",
        'pattern-2': "url('/src/data/pattern-bg.png')",
        'hero-pattern':
          "url('https://i.ibb.co/wJD4mrn/gain-removebg-preview.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#ffffff',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#121212',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'rouge':'#af2e16'
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
},
}}}