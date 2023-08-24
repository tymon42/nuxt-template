// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['@nuxthq/ui', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:8888',
    },
  },
  routeRules: {
    '/api/v1/**': {
      proxy: { to: `${process.env.BASE_URL}/api/v1/**` },
    },
  },
})
