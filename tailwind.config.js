const { transform } = require("typescript");

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
    },
  },
  plugins: [],
};
