<template>
  <div>
    <NavigationBar />
    <RecentSets />
  </div>
</template>

<script>
import RecentSets from "../components/home/dashboard/RecentSets";
import NavigationBar from "../components/home/navigation/NavigationBar";

export default {
  components: {
    RecentSets,
    NavigationBar
  }
};
</script>
