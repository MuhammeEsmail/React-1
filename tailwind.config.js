/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:'50px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'home-bg':'#1ABC9C',
      'Navbar-color':'#2C3E50',
      'footer-color':'#1A252F',
      'overlay':'rgba(26, 188, 156,0.6)'
    },
    extend: {},
  },
  plugins: [],
}

