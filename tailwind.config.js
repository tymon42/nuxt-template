/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  daisyui: {
    // themes: true,
    // darkTheme: 'dat', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
  exposeConfig: true,
}
