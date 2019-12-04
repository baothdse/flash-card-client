<template>
  <div>
    <NavigationBar />
    <VocabCard />
  </div>
</template>

<script>
import NavigationBar from "../components/home/navigation/NavigationBar";
import VocabCard from "../components/home/content/VocabCard";

export default {
  components: {
    NavigationBar,
    VocabCard
  }
};
</script>
