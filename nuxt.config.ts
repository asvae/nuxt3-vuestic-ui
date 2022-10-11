// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuestic-ui/dist/vuestic-ui.css'],
  build: {
    transpile: ['vuestic-ui'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
