/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      descriptionSize: ["16px", "24px"],
      headertext: ["20px", "30px"],
      label: ["20px", "28px"],
    },
    colors: {
      gray1: "#333333",
      gray3: "#828282",
      gray5: "#E0E0E0",
      gray6: "#F2F2F2",
      white: "#ffffff",
      black: "#000000",
      bgcolor: "#ffffff",
    },
    extend: {
      fontFamily: {
        mono: ["Roboto Mono"],
        normal: ["Roboto"],
      },
    },
  },
  plugins: [],
};
