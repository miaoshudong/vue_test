<template>
  <div class="cateGory">
    <h3>{{ title }}分类</h3>

    <slot name="center"
      >我是一些默认值，当使用者没有传递具体结构时，我会出现</slot
    >
    <slot name="footer"
      >我是一些默认值，当使用者没有传递具体结构时，我会出现</slot
    >
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
video {
  width: 100%;
}
</style>