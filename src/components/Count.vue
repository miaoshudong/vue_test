<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h2>当前求和放大十倍为:{{ bigSum }}</h2>
    <h2>我在{{ school }},学习{{ subject }}</h2>
    <h1 style="color: red">Person组件的总人数是:{{ personList.length }}</h1>

    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "MyCount",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    ...mapMutations("countAbout", { increment: "JIA", decrement: "JIAN" }),
    ...mapActions("countAbout", ["jiaOdd", "jiaWait"]),
  },
  computed: {
    ...mapState("countAbout", ["sum", "school", "subject"]),
    ...mapState("personAbout", ["personList"]),

    ...mapGetters("countAbout", ["bigSum"]),
  },
  mounted() {
    // console.log("Count", this.$store);
    const x = mapState({ sum: "sum", school: "school", subject: "subject" });
    console.log(x);
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>