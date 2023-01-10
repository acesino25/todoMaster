/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // avoid relying on the OS of the user to set dark mode or not. Instead we will use a hybrid
  content: ["./index.html","./src/*.{js,ts,jsx,tsx}", "./src/components/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}", './resources/**/*.js', ],
  theme: {
    extend: {},
  },
  plugins: [],
}
