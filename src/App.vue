<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Header></Header>
    <router-view/>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld";
import Header from "@/components/Header";
import axios from "axios";


export default {
  mounted(){
    //在頁面載入後，vue取得控制權的時候，透過dispatch去呼叫vuex中的action運作
this.$store.dispatch('fetchArticles')
  },
  components: {
    HelloWorld,
    Header,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
