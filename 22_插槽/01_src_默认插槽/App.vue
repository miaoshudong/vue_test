<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img
        src="http://img.aiimg.com/uploads/allimg/160330/263915-1603300R135.jpg"
        alt=""
      />
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影" :listData="files">
      <video
        controls
        src="https://vd3.bdstatic.com/mda-ncvvvx640p34hqvk/mda-ncvvvx640p34hqvk.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
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
.container {
  display: flex;
  /* justify-content: space-around; */
}
</style>
