/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 
  theme: {
    extend: {
      
      colors: {
        amazon_blue: {
          light: "#a6c0f9",
          DEFAULT: "#1d4496",
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
