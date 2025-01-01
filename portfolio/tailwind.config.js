/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specifies where Tailwind should look for classes to apply its styles
  theme: {
    extend: {
      colors: {
        primary: "#552583", // Adding a custom primary color
        secondary: "#FDB927", // Adding a custom secondary color if needed
      },
    },
  },
  plugins: [],
};
