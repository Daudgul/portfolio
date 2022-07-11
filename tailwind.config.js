/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        fuemen: ["Grechen Fuemen"],
      },
      colors: {
        "pro-blue": "#0e1326",
        "pro-gray": "#f1f1f1",
      },
    },
  },
  plugins: [],
};
