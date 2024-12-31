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
  modules: [// (_options, nuxt) => {
  //   nuxt.hooks.hook('vite:extendConfig', (config) => {
  //     config.plugins.push(vuetify({ autoImport: true }))
  //   })
  // },
  '@nuxt/image', '@vite-pwa/nuxt', '@nuxtjs/supabase'],
  image: {},
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'FreemanZok',
      short_name: 'FreemanZok',
      description: 'Listen to Magics',
      // theme_color: '#ffffff',
      // background_color: '#ffffff',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/',
      icons: [
        // {
        //   src: 'icons/icon-192x192.png',
        //   sizes: '192x192',
        //   type: 'image/png'
        // },
        // {
        //   src: 'icons/icon-512x512.png',
        //   sizes: '512x512',
        //   type: 'image/png'
        // }
      ]
    }
  },
  app: {
    head: {
      link: [
        {
          rel: "my-icon",
          // sizes: "180x180",
          href: "/favicon/my-icon.ico",
        },
      ],
    },
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})