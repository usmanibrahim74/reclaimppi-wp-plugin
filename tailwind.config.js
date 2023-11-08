/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
  content: [
    "./resources/js/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'check-mark': "url(\"data:image/svg+xml,%0A%3Csvg width='22' height='21' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.539 10.4226L7.84654 18.8762L20.4616 1.96899' stroke='white' stroke-width='2.73064' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\")",
        'select': "url(\"data:image/svg+xml,%3Csvg width='9' height='13' viewBox='0 0 9 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.882812 3.95497L2.20377 5.11279L4.94344 2.89395L7.67873 5.11279L8.99969 3.95497L5.6018 1.2019L4.94346 0.667795L4.28085 1.2019L0.882812 3.95497Z' fill='%23616A7A'/%3E%3Cpath d='M8.99951 9.18615L7.67856 8.02832L4.93889 10.2472L2.20359 8.02832L0.882636 9.18615L4.28052 11.9392L4.93887 12.4733L5.60148 11.9392L8.99951 9.18615Z' fill='%23616A7A'/%3E%3C/svg%3E\");"
      }
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'primary-a': '#20CE44',
    //   'primary-b': '#DA2327',
    //   'secondary-a': '#D9D9D9',
    //   'secondary-b': '#CFCCCC',
    //   'secondary-c': '#EDEDED',
    //   'secondary-d': '#FEF9F2',
    // },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
;
