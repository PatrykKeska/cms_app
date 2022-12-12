/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "primary-dark": "#1f1f1f",
      primary: "#ffffff",
      highlight: {
        dark: "#FFFFFF",
        light: "#1f1f1f",
      },
      secondary: {
        dark: "#707070",
        light: "#e6e6e6",
      },
      action: "#3B82F6",
    },
    extend: {},
  },
  plugins: [],
}