/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'DARK_BLUE': '#1A1F3A',
        'MID_BLUE': '#404B8B'
      },
    },
    fontFamily: {
      'grosque': ['Bricolage Grotesque', 'sans-serif'],
      'bodytext': ['Instrument Sans', 'Open Sans']
    }
  },
  plugins: [],
};
