/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslateblue: "#163f89",
        white: "#fff",
        gainsboro: "rgba(217, 217, 217, 0)",
      },
      spacing: {},
      fontFamily: {
        salsa: "Salsa",
        "luckiest-guy": "'Luckiest Guy'",
        inherit: "inherit",
      },
    },
    fontSize: {
      "13xl": "32px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
