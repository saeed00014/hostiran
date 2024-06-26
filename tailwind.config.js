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
      keyframes: {
        smaLoading: {
          '0%': {transform: 'translateY(0rem)'},
          '50%': {transform: 'translateY(-8rem)'},
          '100%': {transform: 'translateY(0rem)'}
        },
      },
      animation: {
        'smaLoad1': 'smaLoading 1.6s linear infinite',
        'smaLoad2': 'smaLoading 1.6s linear infinite .1s',
        'smaLoad3': 'smaLoading 1.6s linear infinite .2s',
        'smaLoad4': 'smaLoading 1.6s linear infinite .3s',
        'smaLoad5': 'smaLoading 1.6s linear infinite .4s',
      },
      colors: {
        g_Text_White: '#FFF',
        g_Text_Black: '#000',
        g_Background_Black: '#0F0F0F',
        g_Background_Element: '#D9D9D9',
        g_Border_Active: '#B820FF',
        g_Button_Active: '#D9D9D9',
        g_Button_Background: '#C240FF',
        g_Text_Shaded: '#ffffff80',
        g_Border_Shaded: '#626262',
        g_Background_Shaded: 'rgb(59, 59, 59)',
        g_Background_White_Shop: 'rgb(235, 235, 235)',
        g_Background_Shaded_Shop: 'rgb(241, 242, 244)',
        g_Border_Shaded_Shop: 'rgb(112, 112, 110)',
        'bg-hover': '#e5e7eb',
        'bg-theme-body': 'rgb(247, 247, 247)',
        'bg-theme-darker': 'rgb(235, 235, 235)',
        'text-error': 'rgb(252, 3, 3)'
      },
      fontFamily:{
        'primary': ['Dancing Script', 'cursive'],
        'secondary': ["Poppins", 'sans-serif']
      },
      fontSize: {
        clamp1: "clamp(.8rem, 4vw, 1rem)",
        clamp: "clamp(1rem, 12vw, 4.2rem)",
        clamp2: "clamp(1rem, 5vw, 1.5rem)",
        clamp3: "clamp(1.1rem, 4vw, 1.5rem)",
      },

      boxShadow: {
        '3xl': '0px 0px 10px 1px rgba(0, 0, 0, 0.3)',
      },

      backgroundImage: {
        'arrow': "url('/src/assets/images/icons-arrow.png')",
      }
    },
  }
}

