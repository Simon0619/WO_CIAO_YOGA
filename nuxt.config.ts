// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxthub/core'],
  css: ['~/assets/css/main.css'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  hub: {
    database: true,
  },
  ui: {
    colorMode: false,
    fonts: false,
  },
  routeRules: {
    '/about': {
      prerender: true,
    },
    '/contact': {
      prerender: true,
    },
    '/schedule': {
      prerender: true,
    },
  },
  app: {
    head: {
      script: [
        {
          src: 'https://code.tidio.co/o9w6hsfj7rgfbs3jsetmofhu8fhllqbx.js',
          async: true,
        },
      ],
    },
  },
})
