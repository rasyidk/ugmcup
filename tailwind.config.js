/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "1/2-screen": "50vh",
        "lg-1/2-screen": "50vh",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#58B1CF",
        secondary: "#EDDEC1",
      },
      fontFamily: {
        integral: "var(--font-integral)",
        poppins: "var(--font-poppins)",
        bebas: "var(--font-bebas-neue)",
      },
    },
  },
  plugins: [],
};
