<template>
  <div class="cateGory">
    <h3>{{ title }}分类</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  props: ["listData", "title"],
  data() {
    return {
      foods: ["food1", "food2", "food3", "food4"],
      games: ["game1", "game2", "game3", "game4"],
      files: ["file1", "file2", "file3", "file4"],
    };
  },
};
</script>

<style>
.cateGory {
  background-color: green;
  width: 200px;
  height: 300px;
  margin-right: 10px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>