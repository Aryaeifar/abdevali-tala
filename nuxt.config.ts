import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  app: {
    baseURL: "/",
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "طلای عبدولی",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "stylesheet", href: "/assets/icomoon/style.css" },
        { rel: "icon", type: "image/x-icon", href: "./favicon.ico" },
      ],
    },
  },
  css: ["@/assets/scss/app.scss"],

  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
