/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      fontWeight: {
        thin: "100",
        extrabold: "800",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
