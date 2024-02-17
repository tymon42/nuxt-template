import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  build: {
    // transpile: ['vue-sonner'],
    transpile: process.env.NODE_ENV === 'production' ? ['vue-sonner', 'naive-ui', 'vueuc', '@css-render/vue3-ssr', 'juggle/resize-observer'] : ['vue-sonner', '@juggle/resize-observer'],
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone']
          : [],
      exclude: ['fsevents'],
    },
    plugins: [
      AutoImport({
        imports: [
          {
            'vue-sonner': ['toast'],
          },
        ],
      }),
      Components({
        resolvers: [NaiveUiResolver()],
      }),
    ],
  },

  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
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
      // baseURL: process.env.BASE_URL || 'http://localhost:8888',
      // baseURL: 'http://localhost:8888',
      baseURL: process.env.BASE_URL,
    },
  },
  routeRules: {
    '/api/v1/**': {
      // proxy: { to: 'http://localhost:8888/api/v1/**' },
      proxy: { to: `${process.env.BASE_URL}/api/v1/**` },
    },
  },
  app: {
    head: {
      meta: [
        { name: 'referrer', content: 'no-referrer' },
      ],
    },
  },
})
