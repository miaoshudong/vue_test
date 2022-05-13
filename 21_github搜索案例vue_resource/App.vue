<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import Search from "./components/MySearch.vue";
import List from "./components/MyList.vue";
export default {
  name: "App",
  components: { Search, List },
};
</script>

<style>
</style>
