<template>
  <v-flex
    xs3
    class="mx-2"
    @click="$emit('clicked', $event)"
  >
    <v-card color="darken-2">
      <v-layout>
        <v-flex xs5>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
            height="125px"
            contain
          ></v-img>
        </v-flex>
        <v-flex xs7>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ this.folder.name }}</div>
              <div>{{ this.folder.description }}</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider light></v-divider>
      <v-card-actions class="pa-3">
        Rate this set
        <v-spacer></v-spacer>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
        <v-icon>star_border</v-icon>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "CardSet",
  props: {
    folder: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      
    };
  },
};
</script>

<style>
</style>
