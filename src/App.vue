<template>
  <div id="app">
    <h1>{{ $t('title') }}</h1>
    <p>{{ $t('text') }}</p>
  </div>
</template>

<script>
/*
export default {
  name: "app",
  data() {
    return {
      locale: "en", // navigator.language.split('-')[0]
      fallbackLocale: "en",
      messages: {
        es: {
          title: "¡Hola!",
          text: "Esto es un ejemplo"
        },
        en: {
          title: "Hello!",
          text: "this is a example"
        }
      }
    };
  }
};
*/
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
