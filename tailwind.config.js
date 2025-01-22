/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle, rgba(8,3,54,1) 40%, rgba(0,1,4,1) 90%)',   
      },
    },
  },
  plugins: [],
}

