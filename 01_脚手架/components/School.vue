<template>
  <div class="demo">
    <h2>学校姓名{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我提示学校名称</button>
  </div>
</template>

<script>
// 第一种 export const school = Vue.extend({
// export const school = Vue.extend({
// export default Vue.extend({
export default {
  name: "tSchool",
  data() {
    return {
      schoolName: "尚硅谷",
      address: "北京昌平",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
// 统一暴露 export { school };
// 默认暴露
// export default school;
</script>

<style >
.demo {
  background-color: orange;
}
</style>