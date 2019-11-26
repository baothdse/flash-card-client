<template>
  <v-container>
    <v-layout row justify-center class="my-5" >
      <CardSet v-for="folder in folders.slice(0, 2)" :key="folder.id" :folder="folder" @clicked="openFolder(folder._id, $event)" />
    </v-layout>
    <v-layout row justify-center class="my-5" >
      <CardSet v-for="folder in folders.slice(2, 4)" :key="folder.id" :folder="folder" @clicked="openFolder(folder._id, $event)" />
    </v-layout>
  </v-container>
</template>

<script>
import CardSet from '../dashboard/set/CardSet';

export default {
  name: "Row",
  props: {
      folders: {
        type: Array
      }
  },
  components: {
    CardSet
  },
  data() {
  },
  created() {
    console.log(this.folders)
  },
  methods: {
    openFolder(id, e) {
      this.$router.push({ name: 'set', params: {folderId: id}});
    }
  },
};
</script>
