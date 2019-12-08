<template>
  <v-container>
    <Row
      v-if="isReady"
      :folders="folders"
    />
  </v-container>
</template>

<script>
import folderApi from "@/api/folder.js";
import Row from "./Row";

export default {
  name: "RecentSets",
  props: {},
  components: {
    Row
  },
  data() {
    return {
      folders: [],
      isReady: false
    };
  },
  created() {
    this.get4RecentFolders();
  },
  methods: {
    get4RecentFolders() {
      folderApi.getTop4RecentFolder(folders => {
        this.folders = folders;
        this.isReady = true;
      });
    }
  }
};
</script>

<style>
.card-area {
  margin-top: 20px;
  text-align: center;
}
