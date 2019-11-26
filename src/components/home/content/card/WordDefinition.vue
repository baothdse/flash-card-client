<template>
  <ul class='definition-list'>
    <li v-for="(definition, index) in word.definitions" :key="index">
      <div id="context-line">
          <i class="material-icons">keyboard_arrow_right</i>
          <p> {{ definition.context }} </p><br/>
      </div>       
      <div class="example-container">
          <div class='example-area'>
            <div id='definition-line'>
              <i class="material-icons">stars</i>
              <strong><p style='font-size: 16px; margin-left: 8px'> {{ definition.definition }} </p></strong>
            </div>
            <ul class='example-list'>
              <li v-for="(example, index) in definition.examples" :key="index">
                <p> {{ example }} </p>
              </li>
            </ul>
          </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "WordDefinition",
  computed: mapState({
    word: state => state.cards.word.data
  }),
};
</script>

<style>
#context-line {
  display: inline-flex;
}
#definition-line {
  display: inline-flex;
}
</style>

