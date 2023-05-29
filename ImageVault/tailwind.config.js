/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "font-oswald": ["Oswald", "sans-serif"],
      },
      colors: {
        "top-nav-color": "#232228",
        "sub-nav-color": "#35353d",
        "body-color": "#3c3c44",
        "text-color": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
