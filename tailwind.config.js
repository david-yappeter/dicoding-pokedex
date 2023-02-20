/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        custom: {
          red: '#FF0000',
          'red-boston': '#CC0000',
          blue: '#3B4CCA',
          'golden-yellow': '#FFDE00',
          'gold-foil': '#B3A125',
          white: '#FFFFFF',
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
      },
      fontFamily: {
        vt323: ['VT323', 'monospace'],
      },
    },
  },
  plugins: [],
};
