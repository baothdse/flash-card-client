<template>
  <v-app>
    <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <!-- <v-content>
      <NavigationMenu/>
      <VocabCard/>
    </v-content> -->
    <router-view/>
  </v-app>
</template>

<script>
import NavigationBar from "./components/home/navigation/NavigationBar";
import VocabCard from "./components/home/content/VocabCard";

export default {
  name: "App",
  components: {
    NavigationBar,
    VocabCard
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
    @import './utils/css/css-utils.css';
</style>
