/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "mobile": "100px",
      "tablet": "450px",
      "desktop": "1050px",
    },
    extend: {
      colors: {
        veryDarkGrey: "#050505",
        darkGrey: "#1f1f1f",
        veryMedGrey: "#2d2d2d",
        medGrey: "#3a3a3a",
        grey: "#757575",
        lightGrey: "#e9e9e9",
        veryLightGrey: "#f4f4f4",
        white: "#ffffff",
        amethyst: "#a445ed",
        salmon: "#ff5252",
        neutral: "#838383",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["Inconsolata", "monospace"],
      },
      maxWidth: {
        "3xl": "46rem",
      },
    },
  },
  plugins: [],
};
