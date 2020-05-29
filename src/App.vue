<template>
  <div id="app">
    <v-app>
    <v-content>
      <Header />
      <router-view />
      <Footer />
    </v-content>
  </v-app>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}
</style>
