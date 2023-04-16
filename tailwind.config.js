/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'monserrati' : " Montserrat"
      },

      colors: {

        'yellowBG': '#F9DB38',
        'blueBG': '#77D4E5',
        'purpleBG': '#7647E0',

        'white': {
          'BG':'#F5F5F5',
          'TXT': '#FFFFFF',
        },

        'black': {
          'BG': '#060607',
          'TXT': "#555555",
          'border': '#D9D9D9'
        },

      }
    },
  },
  plugins: [],
}

