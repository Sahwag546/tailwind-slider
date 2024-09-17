/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {
      fontSize: {
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        twoXl: "20px",
        threeXl:"56px",
      },
      fontWeight:{
        sm: "400",
        md: "600",
        lg: "700",
      }
    },
  },
  plugins: [],
}

