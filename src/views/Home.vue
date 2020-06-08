<template>
  <v-container>
    <v-row fluid justify="center">
      <v-col cols="5">
        <v-list flat>
          <v-subheader>TODOS</v-subheader>
          <v-list-item-group color="red">
            <v-list-item v-for="(item, i) in items" :key="i" @click="toggleComplete(item)">
              <v-list-item-icon>
                <!-- <v-checkbox flat input-value="true" :value="item.complete"></v-checkbox> -->
                <v-icon v-text="item.complete ? 'check_box' : 'check_box_outline_blank'"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import db from "@/firebase";

export default {
  data: () => ({
    items: []
  }),
  methods: {
    toggleComplete(item) {
      console.log("toggle complete");
      const citiesRef = db.collection("todo").doc(item.id);
      citiesRef
        .update({
          complete: !item.complete
        })
        .then(() => {
          this.getAll();
          console.log("success");
        });
    },
    getAll() {
      this.items = [];
      const citiesRef = db.collection("todo");
      citiesRef.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log("called get all");
          this.items.push({
            title: doc.data().title,
            complete: doc.data().complete,
            id: doc.id
          });
        });
      });
    }
  },
  created() {
    console.log("created");
    return this.getAll();
  }
};
</script>