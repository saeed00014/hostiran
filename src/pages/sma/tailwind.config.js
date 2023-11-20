/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',
  
        'md': '640px',
  
        'lg': '960px',
  
        'xl': '1280px',
  
        '2xl': '1728px',
      },
      
      colors: {
        'bg-hover': '#e5e7eb',
        'bg-theme-body': 'rgb(247, 247, 247)',
        'bg-theme-darker': 'rgb(235, 235, 235)',
        'text-error': 'rgb(252, 3, 3)'
      },

      fontSize: {
        clamp1: "clamp(.8rem, 4vw, 1rem)"
      },

      boxShadow: {
        '3xl': '0px 0px 10px 1px rgba(0, 0, 0, 0.3)',
      },

      backgroundImage: {
        'arrow': "url('/src/assets/images/icons-arrow.png')",
      }
    },
  },
  plugins: [],
}

