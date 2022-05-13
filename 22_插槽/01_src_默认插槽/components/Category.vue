<template>
  <div class="cateGory">
    <h3>{{ title }}分类</h3>
    <!--  <ul v-show="title !== '美食'">
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul>
    <img
      v-show="title === '美食'"
      src="http://img.aiimg.com/uploads/allimg/160330/263915-1603300R135.jpg"
    /> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  props: ["listData", "title"],
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
</style>