<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "MyNews",
  data() {
    return {
      opacity: 1,
    };
  },
  /*  beforeDestroy() {
    console.log("xxx");
    clearInterval(this.timer);
  }, */
  /* mounted() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  }, */
  activated() {
    console.log("news激活");
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("news销毁");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>