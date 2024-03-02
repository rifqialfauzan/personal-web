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
        'home-white': "url('/src/assets/home-white.svg')",
        'burgerQueen': "url('src/assets/img/BurgerQueenSquare.png')",
        'chatBot': "url('src/assets/img/InQuranBotSquare.png')",
        'personal': "url('src/assets/img/webPortoSquare.png')",
      },
      backgroundColor: {
        springBoot: '#6DB33F',
        react: '#61DBFB',
        tailwind: '#A5F3FC',
        java: '#ED1D25',
        javaScript: '#F0DB4F',
        python: '#FFD43B',
        mySql: '#00758F',
        nextJS: '#5E7693',
        php: '#8993BE',
        laravel: '#FB503B'
      },
      borderColor: {
        springBoot: '#6DB33F',
        react: '#61DBFB',
        tailwind: '#A5F3FC',
        java: '#ED1D25',
        javaScript: '#F0DB4F',
        python: '#FFD43B',
        mySql: '#00758F',
        nextJS: '#5E7693',
        php: '#8993BE',
        laravel: '#FB503B'
      },
      textColor: {
        springBoot: '#6DB33F',
        react: '#61DBFB',
        tailwind: '#A5F3FC',
        java: '#ED1D25',
        javaScript: '#F0DB4F',
        python: '#FFD43B',
        mySql: '#00758F',
        nextJS: '#5E7693',
        php: '#8993BE',
        laravel: '#FB503B'
      }
    },
  },
  plugins: [],
}