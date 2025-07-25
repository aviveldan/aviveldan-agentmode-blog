/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode via class strategy so users can toggle themes.
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // You can extend the default Tailwind theme here.
    },
  },
  plugins: [],
};
