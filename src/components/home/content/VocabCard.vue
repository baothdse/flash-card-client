<template>
  <v-content>
    <v-container fluid>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card class="word-card">
            <v-img :src="word.imageUrl" aspect-ratio="2.75"></v-img>
            <v-card-title primary-title>
              <div class="card-content" v-if="word">
                <h2 class="headline mb-0" style="text-align: center">
                  <strong>{{ word.term }}</strong>
                </h2>
                <i>
                  <h4 style="text-align: center">{{ word.pronunciation }}</h4>
                </i>
                <i>
                  <h4 style="text-align: center">({{ word.type }})</h4>
                </i>
                <br />
                <WordDefinition></WordDefinition>
              </div>
            </v-card-title>
            <div class="buttons-group">
              <v-card-actions>
                <v-btn flat color="green" @click="updateWord">Update</v-btn>
                <v-btn flat color="green" @click="getAnotherWord">Next</v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import http from "@/utils/http-common.js";
import WordDefinition from "./card/WordDefinition";
import { mapActions, mapState } from "vuex";
import cookie from "@/utils/js/cookie.js";

export default {
  name: "NavigationBar",
  props: {},
  components: {
    WordDefinition
  },
  computed: mapState({
    word: state => state.cards.word.data
  }),
  methods: {
    ...mapActions({
      getRandomWord: "cards/getRandomWord"
    }),
    updateWord: function() {
      this.$router.push({
        path: "/word/update",
        query: { word: this.word.term }
      });
    },
    getAnotherWord() {
      this.$store.dispatch("cards/getRandomWord", this.$route.params.folderId);
    }
  },
  created() {
    let token = cookie.getCookie("token");
    this.$store.dispatch("cards/getRandomWord", this.$route.params.folderId);
    console.log("here")
    console.log(this.state)
    // console.log(this.$route)
  }
};
</script>

<style>
.word-card {
  margin-top: 50px;
}
.card-content {
  width: 100%;
}
.definition-list {
  list-style-type: none;
}
.example-area {
  border-radius: 10px;
  border: 1px dashed black;
  min-height: 100px;
  background-color: #fffacd;
  padding: 8px;
  margin: 0 20px 20px 20px;
}
.buttons-group {
  float: right;
}
#context-line {
  display: inline-flex;
}
</style>
