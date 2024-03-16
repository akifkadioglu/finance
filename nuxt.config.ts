// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@vueuse/motion/nuxt",
    "@vite-pwa/nuxt",
    "@morev/vue-transitions/nuxt",
    "@pinia/nuxt",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  pwa: {
    manifest: {
      name: "Nuxt 3 PWA",
      short_name: "Nuxt 3 PWA",
      theme_color: "#ffffff",
    },
  },
  css: ["@/assets/css.css"],
});
