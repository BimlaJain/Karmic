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
        'rich-black': "#01000B",
        'light-purple': "#BF97FF3D",
        'blue': "#3A3EF5",
        'sky-blue': "#32C8F1",
        'light-blue': "#34A4F2"
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
      backgroundImage: {
        'hero-layer': "url('../public/assets/images/webp/hero-gray-layer.webp')",
      },
      lineHeight: {
        'custom-sm': '108%',
        'custom-xl': '121%',
        'custom-2xl': '180%',
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, rgba(59, 40, 246, 0.22) 0%, rgba(59, 40, 246, 0) 100%)",
      },
      borderImage: {
        gradient: "linear-gradient(103.52deg, #3A3EF5 18.99%, #32C8F1 82.34%)",
      },
    },
  },
  plugins: [],
}