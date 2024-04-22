/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#9d6fe2",
          DEFAULT: "#4c287f",
          dark: "#2a1842",
        },
        secondary: {
          light: "#ffdb72",
          DEFAULT: "#f6cc4d",
          dark: "#f9b702",
        },
        accent: {
          light: "#fefae0",
          DEFAULT: "#9d0208",
          dark: "#333333",
        },
      },
    },
  },
  plugins: [],
};
