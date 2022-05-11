<template>
  <div>
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生地址：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "tStudent",
  data() {
    return {
      studentName: "尚硅谷",
      age: 11,
    };
  },
};
</script>