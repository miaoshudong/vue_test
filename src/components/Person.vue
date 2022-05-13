<template>
  <div>
    <h1>人员列表</h1>
    <h1 style="color: red">Count组件求和为:{{ sum }}</h1>
    <h1>列表中第一个人的名字是:{{ firstPersonName }}</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人名字随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState, mapMutations } from "vuex";
export default {
  name: "MyPerson",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      //   console.log(personObj);
      this.$store.commit("personAbout/ADD_PERSON", personObj);
      //   this.ADD_PERSON(personObj),
      this.name = "";
      //   console.log(this.ADD_PERSON);
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      //   console.log(personObj);
      this.$store.dispatch("personAbout/addPersonWang", personObj);
      //   this.ADD_PERSON(personObj),
      this.name = "";
      //   console.log(this.ADD_PERSON);
    },
    addPersonServer() {
      this.$store.dispatch("personAbout/addPersonServer");
    },
    // ...mapMutations(["ADD_PERSON"]),
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    // ...mapState({ personList: "personList", sum: "sum" }),
    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
};
</script>

<style>
</style>