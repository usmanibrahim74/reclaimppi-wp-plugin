/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/js/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'check-mark': url("data:image/svg+xml,%0A%3Csvg width='22' height='21' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.539 10.4226L7.84654 18.8762L20.4616 1.96899' stroke='white' stroke-width='2.73064' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"),
        
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
