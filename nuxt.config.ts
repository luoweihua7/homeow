// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  watch: ['./tailwind.config.js'],
  css: ['assets/base.css'],
  app: {
    cdnURL: './',
  },
});
