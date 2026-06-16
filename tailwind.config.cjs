/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx,js,jsx}", "./src/components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2E7D32',
        darkgreen: '#1B5E20',
        gold: '#F9A825',
        bg: '#F5F9F4',
        text: '#1F2937'
      }
    }
  },
  plugins: []
}
