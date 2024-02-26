/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        kodemono: ['Kode Mono', 'sans-serif'],
        pacifico: ['Pacifico', 'sans-serif'],
      },
      backgroundImage: {
        'home-green': "url('/src/assets/home-background.svg')",
        'home-white': "url('/src/assets/home-white.svg')"
      }
    },
  },
  plugins: [],
}