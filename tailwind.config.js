/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundSize: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
      },
      colors: {
        custom: {
          red: '#ff0000',
          'red-boston': '#cc0000',
          blue: '#3b4cca',
          'golden-yellow': '#ffde00',
          'gold-foil': '#b3a125',
          gray: '#dce1ea',
          whitesmoke: '#f5f5f5',
          white: '#ffffff',
          black: '#000000',
        },
      },
      content: {
        'data-content': 'attr(data-content)',
      },
      fontSize: {
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '20px': '20px',
        '24px': '24px',
        '100%': '100%',
        '125%': '125%',
        '150%': '150%',
        '200%': '200%',
      },
      spacing: {
        0: '0',
        '0px': '0px',
        '4px': '4px',
        '5px': '5px',
        '10px': '10px',
        '20px': '20px',
        '48px': '48px',
        '96px': '96px',
        '100px': '100px',
        '144px': '144px',
        '150px': '150px',
        '200px': '200px',
        '250px': '250px',
        '100%': '100%',
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '35vw': '35vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '100vw': '100vw',
      },
      fontFamily: {
        vt323: ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
};
