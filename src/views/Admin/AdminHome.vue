<template>
  <div>
    <b-table :fields="fields" :items="articles">
      <template v-slot:cell(content)="data">
        {{ data.value | subContent }}
      </template>
      <template v-slot:cell(date)="data">
        {{ data.value | toDate }}
      </template>
      <template v-slot:cell(id)="data">
        <b-button-group>
          <b-button @click="editArticle(data.value)">修改</b-button>
          <b-button @click="delArticle(data.value)">刪除</b-button>
        </b-button-group>
      </template>
    </b-table>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  //data屬於本身component的資料，可以開啟檢查查看
  data() {
    return {
      fields: [
        { key: "title", label: "文章標題" },
        { key: "date", label: "上船日期" },
        { key: "content", label: "文章內容" },
        { key: "id", label: "修改/刪除" },
      ],
    };
  },
  methods: {
    //2.觸發action
    //3.action要求mutations修改state的articles
    //4.state收修改再重新render到component的畫面
    ...mapActions(["fetchArticles","deleteArticle"]),
    editArticle: function(id) {
      this.$router.push({ name: "Admin-Edit", params: { id: id } });
    },
    delArticle: function(id) {
      // console.log(id);
      const ensure = confirm("請問是否要刪除這篇文章");
      if(ensure){
        this.deleteArticle(id)
      }
    },
  },
  //一定要用computed，為vuex的資料
  computed: {
    //1.component一開始調用了mapState
    //用擴展運算子的方式拿mapstate的資料
    ...mapState(["account", "articles"]),
  },
  filters: {
    subContent: (content) => {
      return content.substring(0, 80) + "...";

    },
    toDate: (timestamp) => {
      const date = new Date(timestamp);
      let Y = date.getFullYear();
      let M = date.getMonth();
      let D = date.getDate();
      let H = date.getHours();
      let min = (Array(2).join("0") + date.getMinutes()).slice(-2);
      return `${Y}/${M+ 1}/${D} ${H}:${min}`;
    },
  },
};
</script>
<style lang="scss" scoped>

</style>