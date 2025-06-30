
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
  modules: ['@nuxt/image', '@vite-pwa/nuxt', '@pinia/nuxt', '@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://dance-baby-radio.com', // آدرس دامنه خود را وارد کنید
    gzip: true, // در صورت نیاز، برای فشرده‌سازی
    routes: [
      '/', // صفحات خاص خود را اینجا وارد کنید
    ],
  },
  image: {},
  pwa: {
    manifest: {
      name: "Dance Baby Radio",
      short_name: "Dance Baby Radio",
      description: "Listen to Beauties and Dance",
      start_url: "/",
      display: "standalone",
      background_color: "#fff",
      theme_color: "#fff",
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
      // navigateFallback: '/',
      navigateFallback: null,
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
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        // NEW: Open Graph (OG) tags for social sharing
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Dance Baby Radio" }, // Customize this!
        { property: "og:description", content: "Listen to Beauties and Dance" }, // Customize!
        { property: "og:image", content: "https://dance-baby-radio.com/images/background-dance-1.jpg" }, // Absolute URL required
        { property: "og:url", content: "https://dance-baby-radio.com" }, // Homepage URL
        { property: "og:image:width", content: "1200" }, // Optimized for WhatsApp/Facebook
        { property: "og:image:height", content: "630" },

        // Twitter Card (optional)
        { name: "twitter:card", content: "https://dance-baby-radio.com/images/background-dance-1.jpg" },
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