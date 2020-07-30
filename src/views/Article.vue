<template>
  <div>
    <article>
      <h2>{{ filterById.title}}</h2>
      <i> {{ filterById.date|toDate}} </i><br />
      <span> {{ filterById.content}} </span>
    </article>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  mounted() {
    const id = this.$route.params.id;
    this.artId = id;
    this.$store.dispatch("changeFocusId", id);

  },
  data() {
    return {
      artId: null,
      articles: [],
    };
  },
  computed: {
    ...mapGetters(["filterById"]),

    // filterById: function() {
    //   return this.articles.filter((art) => art.id === this.artId)[0];
    // },
  },
  filters: {
    // subContent: (content) => {
    //   return content.substring(0, 150);
    // },
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
};
</script>
<style lang="scss" scoped>
div {
  margin-top: 80px;
}
</style>
