const { transform } = require("typescript");
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        "3xl": "2rem",
      },
      letterSpacing: {
        widest: ".2rem",
      },
      backgroundImage: {
        'newsletter': "url('./assets/img/newsletter.jpg')",
      }
    },
    colors: {
      primaryColor: "#212529",
      secondaryColor: "#f8f9fa",
      thirdColor: "#495057",
      rose: colors.rose,
      red: colors.red,
      pink: colors.pink,
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      grey: colors.grey,
    },
  },
  plugins: [],
};
