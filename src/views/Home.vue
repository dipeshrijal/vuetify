<template>
  <v-container>
    <v-row fluid justify="center">
      <v-col cols="5">
        <v-list flat>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group color="red">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="item.complete = !item.complete"
            >
              <v-list-item-icon>
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
  created() {
    db.collection("todo").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.items.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>