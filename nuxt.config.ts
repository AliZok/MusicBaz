import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "http://localhost:4000",
    },
  },
  server: {
    port: 3323,
  },
  plugins: ["@/plugins/pwa.client.js"],
  devtools: { enabled: true },
  css: ["@/assets/style/main.scss"],
  build: {
    loaders: {
      transpile: ["vuetify",],
      scss: {
        additionalData: `@import "@/assets/style/variables.scss";`,
      },
    },
  },
  modules: [
    "@nuxt/image",
    "@vite-pwa/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/tailwindcss",
    '@vee-validate/nuxt',
  ],
  sitemap: {
    hostname: "https://dance-baby-radio.com",
    gzip: true,
    routes: ["/"],
  },
  image: {},
  pwa: {
    // ... keep your existing manifest config ...
    workbox: {
      navigateFallback: null,
      globPatterns: ['**/*.{js,css,woff2,png,jpg,jpeg,svg,gif,webp,ico}'],
      runtimeCaching: [
        // ... keep your existing caching rules ...
      ],
      skipWaiting: true,
      cleanupOutdatedCaches: true,
      // Add this:
      clientsClaim: true,
      offlineGoogleAnalytics: false
    },
    devOptions: {
      enabled: false, // DISABLE IN DEV MODE
      type: 'module',
      navigateFallback: null,
    },
    // Add this:
    strategies: process.env.NODE_ENV === 'development' ? 'injectManifest' : 'generateSW',
    srcDir: './service-worker',
    filename: process.env.NODE_ENV === 'development' ? 'sw-dev.js' : 'sw.js',
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon/dancy-girl.png",
        },
        // { rel: "manifest", href: "/manifest.webmanifest" },
      ],
      meta: [
        { name: "theme-color", content: "#ffffff" },
        { name: "mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Dance Baby Radio" },
        { property: "og:description", content: "Listen to Beauties and Dance" },
        {
          property: "og:image",
          content: "https://dance-baby-radio.com/images/background-dance-1.jpg",
        },
        { property: "og:url", content: "https://dance-baby-radio.com" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          name: "twitter:card",
          content: "https://dance-baby-radio.com/images/background-dance-1.jpg",
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
    optimizeDeps: {
      include: [],
    },
  },
});
