<template>
  <div>
    <h1>当前求和为:{{ this.$store.state.sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "MyCount",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
      // this.$store.dispatch("jia", this.n);
      //可以越过actions直接调用mutations中的commit
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      //可以越过actions直接调用mutations中的commit
      //可以直接调用commit

      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  mounted() {
    console.log("Count", this);
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>