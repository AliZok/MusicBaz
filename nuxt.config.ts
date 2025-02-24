// import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true },
//   css: [
//     '@/assets/style/main.scss' // Add your SCSS file here
//   ],
//   build: {
//     loaders: {
//       transpile: ['vuetify'],
//       scss: {
//         additionalData: `@import "@/assets/style/variables.scss";`
//       }
//     }
//   },
//   modules: [// (_options, nuxt) => {
//     //   nuxt.hooks.hook('vite:extendConfig', (config) => {
//     //     config.plugins.push(vuetify({ autoImport: true }))
//     //   })
//     // },
//     '@nuxt/image', '@vite-pwa/nuxt'],
//   image: {},
//   pwa: {
//     manifest: {
//       name: "Dance Baby",
//       short_name: "Dance Baby",
//       description: "Lissten to Beauties and Dance",
//       icons: [
//         {
//           src: 'favicon/gorilla-music.png',
//           sizes: '144x144',
//           type: 'image/png',
//         },
//       ],
//     },
//     // workbox: {
//     //   navigateFallback: '/'
//     // },
//     devOptions: {
//       enabled: true,
//       type: 'module'
//     }
//   },
//   app: {
//     head: {
//       link: [
//         // {
//         //   rel: "apple-touch-icon",
//         //   sizes: "180x180",
//         //   href: "/favicon/apple-touch-icon.png",
//         // },
//         {
//           rel: "icon",
//           type: "image/png",
//           // sizes: "32x32",
//           href: "/favicon/gorilla-music.png",
//         },
//         // {
//         //   rel: "icon",
//         //   type: "image/png",
//         //   sizes: "16x16",
//         //   href: "/favicon/favicon-16x16.png",
//         // },
//         // { rel: "manifest", href: "/favicon/site.webmanifest" },
//         // {
//         //   rel: "mask-icon",
//         //   href: "/favicon/safari-pinned-tab.svg",
//         //   color: "#1f2667",
//         // },
//         // { rel: "shortcut icon", href: "/favicon/favicon.ico" },
//       ],
//     },
//   },

//   vite: {
//     vue: {
//       template: {
//         transformAssetUrls,
//       },
//     },
//   },
// })




import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/style/main.scss'],
  build: {
    loaders: {
      transpile: ['vuetify'],
      scss: {
        additionalData: `@import "@/assets/style/variables.scss";`,
      },
    },
  },
  modules: ['@nuxt/image', '@vite-pwa/nuxt'],
  image: {},
  pwa: {
    manifest: {
      name: "Dance Baby",
      short_name: "Dance Baby",
      description: "Listen to Beauties and Dance",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      icons: [
        {
          src: "/favicon/gorilla-music.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "/icons/gorilla-music.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icons/gorilla-music.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon/gorilla-music.png",
        },
        { rel: "manifest", href: "/manifest.webmanifest" },
      ],
      meta: [
        { name: "theme-color", content: "#ffffff" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
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
});