/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PPHatton: ["PP Hatton", "sans-serif"],
        montsrrat: "Montserrat",
      },
      colors: {
        appBlack: "#0d0d0d",
      },
    },
  },
  plugins: [],
};
