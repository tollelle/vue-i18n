import Vue from "vue";
import App from "./App";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: navigator.language.split("-")[0], // navigator.language.split('-')[0]
  fallbackLocale: "en",
  messages: {
    en: {
      title: "¡Hola!",
      text: "Esto es un ejemplo"
    },
    es: {
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
