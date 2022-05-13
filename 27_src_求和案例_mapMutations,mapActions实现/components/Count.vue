<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h2>当前求和放大十倍为:{{ bigSum }}</h2>
    <h2>我在{{ school }},学习{{ subject }}</h2>
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
    //亲自写方法
    /* increment() {
      // this.$store.dispatch("jia", this.n);
      //可以越过actions直接调用mutations中的commit
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      //可以越过actions直接调用mutations中的commit
      //可以直接调用commit
      this.$store.commit("JIAN", this.n);
    }, */
    //借助mapMutations生成对应的方法，方法中会调用commit去联系Mutations(对象写法)
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系Mutations(数组写法)
    // ...mapMutations(["JIA", "JIAN"]),
    /* *********************************************** */
    /* incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    }, */
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions(对象写法)
    // ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系Actions(数组写法)
    ...mapActions(["jiaOdd", "jiaWait"]),
  },
  computed: {
    //自己写生成属性
    /* sum() {
      return this.$store.state.sum;
    },
    school() {
      return this.$store.state.school;
    },
    subject() {
      return this.$store.state.subject;
    }, */

    //借助mapstate生成计算属性，从state中读取数据，（对象写法）
    // ...mapState({ sum: "sum", school: "school", subject: "subject" }),
    //借助mapstate生成计算属性，从state中读取数据，（数组写法）
    ...mapState(["sum", "school", "subject"]),
    // ————————————————————————————————————————————————————————————————————————————————————————
    /*  bigSum() {
      return this.$store.getters.bigSum;
    }, */
    //对象写法
    // ...mapGetters({ bigSum: "bigSum" }),
    //数组写法
    ...mapGetters(["bigSum"]),
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