<template>
  <v-layout column>
    <NavigationBar />
    <v-layout justify-center>
      <v-flex xs5>
        <v-form class='word-input-form' ref="form" enctype='multipart/form-data'>
          <v-flex xs12>
            <input ref="uploadFile" type="file" @change="previewFile($event)">
            <v-text-field v-model="term" label="Term" color="green" required></v-text-field>
            <v-text-field v-model="pronunciation" label="Pronunciation" color="green"></v-text-field>
            <v-text-field v-model="type" label="Type" color="green" required></v-text-field>
          </v-flex>
          <div v-for="(definition, index) in definitions" :key="`${index}`">
            <DefinitionFields @clicked="onAddDefinitionClick" :definitionData="definition" ref="definitions" @change="setDefinitions(index, $event)" />
          </div>
          <v-btn @click.stop="submitWord" color="success" class="mr-4">
            Submit
          </v-btn>
          <Modal ref="modal" />
        </v-form>
      </v-flex>
    </v-layout>
  </v-layout>

</template>

<script>
import DefinitionFields from "./DefinitionFields";
import NavigationBar from "../../home/navigation/NavigationBar";
import Modal from "../../common/Modal";
import cardApi from "@/api/card.js";
import { mapActions, mapState } from "vuex";
import messageConstant from "../../../constants/message.js";
import cookie from "@/utils/js/cookie.js";

export default {
  name: "CardInfo",
  data: function() {
    if (!this.isUpdate()) {
      return {
        term: "",
        pronunciation: "",
        type: "",
        definitions: [{}],
        uploadFile: null,
        isShow: false,
        message: "Succesful"
      };
    } else {
      let word = this.$store.state.cards.word;
      return {
        term: word.term,
        pronunciation: word.pronunciation,
        type: word.type,
        definitions: word.definitions,
        isShow: false,
        message: "Succesful"
      };
    }
  },
  computed: mapState({
    word: state => state.cards.word.data
  }),
  components: {
    DefinitionFields,
    NavigationBar,
    Modal
  },
  methods: {
    onAddDefinitionClick(value) {
      let definition = {};
      this.definitions.push(definition);
    },
    setDefinitions(index, definition) {
      this.definitions[index] = definition;
    },
    setDialog(status) {
      this.dialog = status;
    },
    submitWord() {
      let newWord = {
        term: this.term,
        pronunciation: this.pronunciation,
        type: this.type,
        definitions: this.definitions
      };

      cardApi.uploadImg(this.uploadFile, response => {
        if (response.data.imgUrl) {
          newWord.imageUrl = response.data.imgUrl;
        }
        if (!this.isUpdate()) {
          cardApi.add(newWord, result => {
            if (result.status == 200) {
              this.$refs.modal.dialog = true;
              this.$refs.modal.message = messageConstant.CARD_IS_ADDED;
            }
          });
        } else {
          cardApi.update(newWord, result => {
            if (result.status == 200) {
              this.$refs.modal.dialog = true;
              this.$refs.modal.message = messageConstant.UPDATE_SUCCESSFUL;
            }
          });
        }
      });
    },
    resetForm() {
      this.term = "";
      this.pronuncation = "";
      this.type = "";
      this.definitions = new Array();
      this.$refs.definitions[0].clearDefinitions();
    },
    goBack() {
      this.$router.go(-1);
    },
    isUpdate() {
      return this.$route.path === "/word/update" ? true : false;
    },
    previewFile(event) {
      this.uploadFile = event.target.files[0];
    }
  }
};
</script>

<style>
.word-input-form {
  margin-top: 20px;
}
</style>
