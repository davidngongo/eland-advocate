/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Use Montserrat globally
        title: ["Montserrat-bold", "sans-serif"], // Use Montserrat-bold for titles
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
