/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
        },
      },
      colors: {
        'light-gray': "#3B3B3B",
        'dark-gray': "#4d4d4d",
        'dusk-black': "#FFFFFF1A",
      },
      fontFamily: {
        'sunflower': "'Sunflower', sans-serif",
        'space': "'Space Grotesk', serif"
      },
      fontSize: {
        "custom-xl": '56px',
        "custom-3xl": '32px',
        "custom-4xl": '34px',
      },
      lineHeight: {
        'custom-sm': '108%',
        'custom-xl': '121%',
        'custom-2xl': '180%',
      },
      backgroundImage: {
        'hero-layer': "url('/public/assets/images/png/hero-gray-layer.png')",
        'whiteImg': "url('/public/assets/images/png/bg-white.png')",
      },
    },
  },
  plugins: [],
}