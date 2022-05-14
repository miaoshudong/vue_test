<template>
  <ul>
    <li>消息编号：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.title }}</li>
    <li>a:{{ id }}</li>
    <li>a:{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "MyDetail",
  props: ["id", "title"],
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>