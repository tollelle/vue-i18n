import Vue from "vue";
import App from "./App";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "es", // navigator.language.split('-')[0]
  fallbackLocale: "en",
  messages: {
    es: {
      title: "¡Hola!",
      text: "Esto es un ejemplo sdfgsdfg"
    },
    en: {
      title: "Hello!",
      text: "this is a example"
    }
  }
});

const app = new Vue({
  el: "#app",
  i18n,
  render: h => h(App)
});
