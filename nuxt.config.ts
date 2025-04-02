
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  server: {
    port: 3323,
  },
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
  modules: ['@nuxt/image', '@vite-pwa/nuxt','@pinia/nuxt'],
  image: {},
  pwa: {
    manifest: {
      name: "Dance Baby Radio",
      short_name: "Dance Baby Radio",
      description: "Listen to Beauties and Dance",
      start_url: "/",
      display: "standalone",
      background_color: "#3d3d3d",
      theme_color: "#84f3ff",
      icons: [
        {
          src: "/favicon/dancy-girl.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "/icons/dancy-girl.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icons/dancy-girl.png",
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
          href: "/favicon/dancy-girl.png",
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