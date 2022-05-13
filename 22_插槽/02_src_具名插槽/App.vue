<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img
        slot="center"
        src="http://img.aiimg.com/uploads/allimg/160330/263915-1603300R135.jpg"
        alt=""
      />
      <a slot="footer" href="https://www.baidu.com">点我</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">点我</a>
        <a href="https://www.baidu.com">点我</a>
      </div>
    </Category>
    <Category title="电影" :listData="files">
      <template slot="footer">
        <!-- <template v-slot=footer> -->
        <div class="foot">
          <a href="https://www.baidu.com">点我</a>
          <a href="https://www.baidu.com">点我</a>
          <a href="https://www.baidu.com">点我</a>
        </div>
        <h4>欢迎来观影</h4>
      </template>
      <video slot="center" controls src=""></video>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
