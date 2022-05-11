<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <tSchool></tSchool>
    <tStudent></tStudent>
  </div>
</template>

<script>
import tSchool from './components/Student.vue';
import tStudent from './components/School.vue';
export default {
  name: "App",
  components: {
    tSchool,
    tStudent,
  },
};
</script>

<style>
</style>