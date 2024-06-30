// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify, ThemeDefinition } from "vuetify";
import { fa } from "vuetify/locale";
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // Primary
    primary: "#DBE4C6",
    "primary-400": "#E2E9D1",
    "primary-100": "#F8FAF4",
    "primary-300": "#E9EFDD",
    "primary-200": "#F1F4E8",

    // Secondary
    secondary: "#FFF5E0",
    "secondary-400": "#FFF7E6",
    "secondary-100": "#FFFDF9",
    "secondary-300": "#FFF9EC",
    "secondary-200": "#FFFBF3",

    // Muted
    muted: "#DDDDDD",
    "muted-400": "#E4E4E4",
    "muted-100": "#F8F8F8",
    "muted-300": "#EBEBEB",
    "muted-200": "#F1F1F1",
    "muted-500":"#D9D9D9",

    // Dark
    Dark: "#000000",
    "Dark-400": "#2E2E2E",
    "Dark-100": "#717171",
    "Dark-300": "#444444",
    "Dark-200": "#555555",

    // Dark
    Blue: "#0E46A3",
    "Blue-400": "#3E6BB5",
    "Blue-100": "#CFDAED",
    "Blue-300": "#6E90C8",
    "Blue-200": "#9FB5DA",

    // Other
    red: "#C20000",
    light:"#ffffff"
  },
};
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    rtl: true,
    locale: {
      locale: "fa",
      messages: { fa },
    },
    theme: {
      defaultTheme: "myCustomLightTheme",
      themes: {
        myCustomLightTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
