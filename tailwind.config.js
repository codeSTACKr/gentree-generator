/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        c1: "0.25rem 0.25rem 0px 0px rgba(255,255,255,1)",
        c2: "0.5rem 0.5rem 0px 0px rgba(255,255,255,1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
