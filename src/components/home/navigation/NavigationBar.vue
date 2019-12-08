<template>
  <v-toolbar >
    <v-toolbar-title class="headline text-uppercase" @click="backToHomePage">
      <span style="color: grey">FLASH</span>
      <span class="font-weight-light" style="color: green">CARDS</span>
    </v-toolbar-title>
    
    <v-toolbar-items>
      <v-btn flat color="green" class="nav-item"> 
        <router-link to="/page2">Folder</router-link>
      </v-btn>
       <v-btn flat color="green" class="nav-item"> 
        <router-link to="/page">Quiz</router-link>
      </v-btn>
      <v-btn flat color="green" class="nav-item"> 
        <router-link to="/page2">Stat</router-link>
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-text-field v-model='searchingWord' label="Search English" v-show="isHomePage()" color="green" required>
    </v-text-field>
    <v-btn v-show="isHomePage()" flat color="green" target="_blank" @click="searchWord">
      <span class="mr-2">Search</span>
    </v-btn>
    <router-link :to="{ name: 'new-word' }">
      <v-btn v-show="isHomePage()" class="mx-2" fab dark small color="green">
        <v-icon dark>add</v-icon>
      </v-btn>
    </router-link>
  </v-toolbar>
</template>

<script>
import api from "@/api/card.js";
import { mapState } from "vuex";

export default {
  name: "NavigationBar",
  data() {
    return {searchingWord: ""};
  },
  computed: mapState({
    word: state => state.cards.word.data
  }),
  methods: {
    searchWord() {
      this.$store.dispatch("cards/searchWord", this.searchingWord);
    },
    backToHomePage() {
      this.$router.push("/dashboard");
    },
    isHomePage() {
      return this.$route.path === "/set" ? true : false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: green;
  text-decoration: none;
}
</style>
