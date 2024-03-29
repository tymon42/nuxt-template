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
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themes: [
      {
        "light": {
          "primary": "#2494F4",
          "secondary": "#c0dcfd",
          "accent": "#8CD34D",
          "neutral": "#032826",
          "base-100": "#f0f0f0",
          "info": "#549CFC",
          "success": "#8CD34D",
          "warning": "#FBA807",
          "error": "#FC0404",
        },
      }, {
        "dark": {
          "primary": "#59c9ff",
          "secondary": "#d9f3ff",
          "accent": "#e4f6d1",
          "neutral": "#9ca3af",
          "base-100": "#111827",
          "info": "#bedaff",
          "success": "#cbefa7",
          "warning": "#ffec87",
          "error": "#ffc1c1",
        },
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
  exposeConfig: true,
  theme: {
    extend: {
      colors: {
        sky: {
          '50': '#eff6ff',
          '100': '#dbebfe',
          '200': '#c0dcfd',
          '300': '#94c7fc',
          '400': '#62a8f8',
          '500': '#3d87f4',
          '600': '#3370ea',
          '700': '#1f53d6',
          '800': '#2044ad',
          '900': '#1f3d89',
          '950': '#182653',
        },
      }
    }
  }
}
