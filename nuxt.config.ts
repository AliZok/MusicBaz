
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/style/main.scss' // Add your SCSS file here
  ],
  build: {
    loaders: {
      transpile: ['vuetify'],
      scss: {
        additionalData: `@import "@/assets/style/variables.scss";`
      }
    }
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/image',
  ],
  image: {},
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  
})
