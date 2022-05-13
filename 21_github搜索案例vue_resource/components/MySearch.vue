<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import pubsub from "pubsub-js";
// import axios from "axios";
export default {
  name: "MySearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    getUsers() {
      /* this.$bus.$emit("updataListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      }); */
      pubsub.publish("updataListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      this.$http
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then(
          (response) => {
            console.log("请求成功了");

            /* this.$bus.$emit("updataListData", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          }); */
            pubsub.publish("updataListData", {
              isLoading: false,
              errMsg: "",
              users: response.data.items,
            });
          },
          (error) => {
            console.log("请求失败了", error.message);
            /* this.$bus.$emit("updataListData", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          }); */
            pubsub.publish("updataListData", {
              isLoading: false,
              errMsg: error.message,
              users: [],
            });
          }
        );
    },
  },
};
</script>

<style>
</style>