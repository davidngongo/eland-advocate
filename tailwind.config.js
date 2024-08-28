/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat-bold", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      colors: {
        Maroon: "#680221",
      },
    },
  },
  plugins: [],
};
