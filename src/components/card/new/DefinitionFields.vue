<template>
  <div class="definition-field">
    <v-flex xs12>
      <v-text-field
        v-model="context"
        label="Context"
        color="green"
        required
        @change="emitDefinition"
      ></v-text-field>
      <v-text-field
        v-model="definition"
        label="Definition"
        color="green"
        required
        @change="emitDefinition"
      ></v-text-field>
      <div v-for="(example, index) in examples" :key="`${index}`">
        <v-text-field
          v-model="examples[index]"
          label="Example"
          color="green"
          required
          @change="setExample(index)"
        ></v-text-field>
      </div>
    </v-flex>
    <div class="text-xs-center">
      <v-btn class="add-button mx-2" fab dark small color="indigo" @click="addDefinition">
        <v-icon dark>add</v-icon>
      </v-btn>
    </div>
    <div class="text-xs-center">
      <v-btn class="ma-2" outlined small fab color="teal" @click="addExample">
        <v-icon dark>add</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      numberOfContext: 1,
      context: this.definitionData.context,
      definition: this.definitionData.definition,
      examples: [""],
      wordDefinition: {}
    };
  },
  name: "Definition",
  methods: {
    addDefinition(event) {
      this.$emit("clicked", this.numberOfContext++);
    },
    addExample(event) {
      this.examples.push('');
    },
    emitDefinition(event) {
      this.wordDefinition.context = this.context;
      this.wordDefinition.definition = this.definition;
      this.wordDefinition.examples = this.examples;

      this.$emit("change", this.wordDefinition);
    },
    setExample(index) {
      this.emitDefinition();
    },
    clearDefinitions() {
      this.context = "";
      this.definition = "";
      this.examples = [""];
      this.emitDefinition();
    }
  },
  props: {
    definitionData: {
      type: Object
    }
  }
};
</script>

<style>
.add-button {
  flex: 1 1 auto;
}
</style>

