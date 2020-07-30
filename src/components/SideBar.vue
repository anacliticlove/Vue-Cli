<template>
  <div>
    <h4>醉心文章</h4>
    <hr />
    <ul>
      <li
        v-for="(art,index) in filterBySearchKey"
        :key="index"
        @click="routerToArticle(art.id)"
      >
        {{ art.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";
import { mapState, mapGetters } from "vuex";
export default {

  data() {
    return {
      articles: [],
    };
  },
  computed: {
    ...mapState(["articles"]),
    ...mapGetters(["filterBySearchKey"]),
  },
  methods: {
    routerToArticle: function(id) {
      this.$router.push({ name: "Article", params: { id: id } });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 21vw;
  position: fixed;
  top: 70px;
  right: 1rem;
  background-color: #eee;
  border-radius: 16px;
  height: 100%;
  padding-top: 1rem;
  padding-right: 0.5rem;
}
</style>
