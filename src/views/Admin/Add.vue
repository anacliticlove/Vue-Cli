<template>
  <div>
    <b-form>
      <b-form-group id="input-group-1" label="輸入標題" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="formData.title"
          type="text"
          required
          placeholder="Enter Title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="輸入文章內容" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="formData.content"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button 
      v-if="!submited"
      @click.prevent="submitFormData" type="submit" variant="primary"
        >送出</b-button
      >
      <b-button
        v-if="!submited"
       @click.prevent="resetFormData" type="reset" variant="danger"
        >重置</b-button
      >
       <b-spinner v-else variant="primary" label="Spinning"></b-spinner>
    </b-form>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import axios from "axios";
export default {
  mounted() {
    if (this.$route.name === "Admin-Edit") {
      const id = this.$route.params.id;
      this.mode = "edit";
      this.$store.dispatch("changeFocusId", id);
    }
    //不建議的做法，會導致難以維護
    //在此可針對store的state進行修改，但同時會影響到其他頁面
    this.thisAccount = this.$store.state.account;
  },
  data() {
    return {
      mode: "add",
      formData: {
        title: "",
        date: "",
        content: "",
      },
      submited:false,
      thisAccount: null,
    };
  },
  //一定要用computed，取得vuex的資料
  computed: {
    //用擴展運算子的方式拿mapstate的資料
    ...mapState(["account","articleChanged"]),
    ...mapGetters(["filterById"]),
  },
  methods: {
    ...mapActions(["updateArticle","addArticle"]),

    resetFormData: function() {
      this.formData = {
        title: "",
        date: "",
        content: "",
      };
    },
    submitFormData: function() {
      this.submited = true
      this.formData.date = new Date().getTime();
      if (this.mode === "edit") {
        this.updateArticle({
          id: this.$route.params.id,
          newArticle: this.formData
        })
      } else {
        this.addArticle(this.formData);
      }
    },
  },
  watch: {
    filterById: function() {
      this.formData.title = this.filterById.title;
      this.formData.content = this.filterById.content;
    },
    articleChanged: function() {
      this.$router.push({ name:"Admin-Home"});
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin-top: 80px;
}
</style>
