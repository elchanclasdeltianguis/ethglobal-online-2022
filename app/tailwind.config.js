/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray1: "#333333",
      gray3: "#828282",
      gray6: "#F2F2F2",
    },
    extend: {
      fontFamily: {
        mono: ["Roboto Mono"],
      },
    },
  },
  plugins: [],
};
