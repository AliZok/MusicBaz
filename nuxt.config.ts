// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/style/main.scss' // Add your SCSS file here
  ],
  build: {
    loaders: {
      scss: {
        additionalData: `@import "@/assets/style/variables.scss";`
      }
    }
  },
})
