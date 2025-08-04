// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          255: 'rgb(255,0,0)',
          200: 'rgb(200,0,0)',
          150: 'rgb(150,0,0)',
          100: 'rgb(100,0,0)',
          75: 'rgb(75,0,0)',
          50: 'rgb(50,0,0)',
          25: 'rgb(35,0,0)'
        }
      }
    },
  },
  plugins: [],
}