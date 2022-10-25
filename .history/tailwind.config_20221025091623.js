/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/js/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'check-mark': "url('/img/hero-pattern.svg')",
        
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
