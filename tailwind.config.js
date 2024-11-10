/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        'primary': '#FF0000',
        'secondary': '#FFD700',
      },
      backgroundColor: {
        'primary': '#FF0000',
        'secondary': '#F5F5F5',
      },
      fontFamily: {
        primary: ['Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

