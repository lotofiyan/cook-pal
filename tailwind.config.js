/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        green: {
          DEFAULT: "#509E2F",
        },
        black: {
          DEFAULT: "#253D4E",
        },
      },
    },
  },
  plugins: [],
};
