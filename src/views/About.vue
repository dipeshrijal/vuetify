<template>
  <!-- <h1 class>This is an about page</h1> -->
  <v-container fluid>
    <h1 class="subheading">This is about page</h1>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    items: []
  }),
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(resp => {
        this.items = resp.data;
      })
      .catch(err => err);
  }
};
</script>
