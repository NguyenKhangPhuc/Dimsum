/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ipad: { max: '1024px' },
        iphone: { max: '700px' },
      }
    },
  },
  plugins: [],
}