// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#8B9D83', // Rojo
          secondary: '#00FF00', // Verde
          accent: '#0000FF', // Azul
          neutral: '#333333', // Gris oscuro
          'base-100': '#FFFFFF', // Blanco
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};