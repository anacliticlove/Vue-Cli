<template>
  <div class="home">
    <article v-for="art in filterBySearchKey">
      <h3 @click="routerToArticle(art.id)">{{ art.title }}</h3>
      <i> {{ art.date | toDate }} </i>
      <span> {{ art.content | subContent }} </span>
    </article>
    <section class="home-side-bar">
      <SideBar :articles="articles" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar";
import { mapState, mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Home",
  // 有問題
  // const cors = "https://cors-anywhere.herokuapp.com/"; // use cors-anywhere to fetch api data
  // const url =
  //   'http://more.handlino.com/api/sentences.json'
  //     https://us-central1-expressapi-8c039.cloudfunctions.net/app/article
  // /** fetch api url by cors-anywhere */
  // axios.get(`${cors}${url}`).then(
  //   (result) => {
  //     console.log(result.data);
  //     this.articles = result.data;
  //   },
  //   (error) => {}
  // );
  computed: {
    ...mapState(["articles"]),
    ...mapGetters(["filterBySearchKey"]),
  },
  methods: {
    routerToArticle: function(id) {
      this.$router.push({ name: "Article", params: { id: id } });
    },
  },
  filters: {
    subContent: (content) => {
      return content.substring(0, 150);
    },
    toDate: (timestamp) => {
      const date = new Date(timestamp);
      let Y = date.getFullYear();
      let M = date.getMonth();
      let D = date.getDate();
      let H = date.getHours();
      let min = (Array(2).join("0") + date.getMinutes()).slice(-2);
      return `${Y}/${M + 1}/${D} ${H}:${min}`;
    },
  },
  components: {
    SideBar,
  },
};
</script>
<style lang="scss" scoped>
.home {
  margin-top: 70px;
}
article {

  display: flex;
  padding-left: 2rem;
  justify-content: center;
  margin: 1rem;
  margin-left: 100px;
  flex-direction: column;
  align-items: flex-start;
  width: 65vw;
  height: 200px;
  background-color: #dddddd;
  border-radius: 16px;
  i {
    color: gray;
  }
}
</style>
