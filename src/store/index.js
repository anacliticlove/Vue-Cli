import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
import { db } from "./firebase.js";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: "happy2",
    articles: [],
    searchKey: "",
    focusId: "",
    articleChanged: false,
  },
  mutations: {
    //唯一會調用的參數是state和payload
    fetchArticles: (state, payload) => {
      state.articles = payload;
    },
    changeSearchKey: (state, payload) => {
      state.searchKey = payload;
    },
    addArticle: (state, payload) => {
      state.articles = [payload, ...state.articles];
      state.articleChanged = !state.articleChanged;
    },
    changeFocusId: (state, payload) => {
      state.focusId = payload;
    },
    updateArticle: (state, { id, newArticle }) => {
      const index = state.articles.map((art) => art.id).indexOf(id);
      state.articles[index] = newArticle;
      state.articleChanged = !state.articleChanged;
    },
    deleteArticle: (state, payload) => {
      const index = state.articles.map((art) => art.id).indexOf(payload);
      state.articles.splice(index, 1);
    },
  },
  actions: {
    //將mutation命名名稱跟action一樣(個人習慣，方便管理)
    fetchArticles: async ({ commit }) => {
      const Ref = db.collection("Articles");
      const result = await Ref.get();
      var payload = [];
      result.forEach((art) => {
        payload.push({ id: art.id, ...art.data() });
      });
      commit("fetchArticles", payload);
    },
    changeSearchKey: ({ commit }, payload) => {
      //有payload是因為，他要接收client端傳值過來
      commit("changeSearchKey", payload);
    },
    addArticle: async ({ commit }, payload) => {
      //set 方式，如果希望資料庫有自己的命名方式
      // {const Ref = db.collection("Articles").doc("myid");
      // const addRef = Ref.set(payload);
      // commit("addArticle", { id: addRef.id, ...payload });}
      const Ref = db.collection("Articles");
      const addRef = await Ref.add(payload);
      commit("addArticle", { id: addRef.id, ...payload });
    },
    changeFocusId: ({ commit }, payload) => {
      commit("changeFocusId", payload);
    },
    updateArticle: async ({ commit }, payload) => {
      // console.log(payload.id)
      const docRef = db.collection("Articles").doc(payload.id);
      await docRef.update(payload.newArticle);
      commit("updateArticle", payload);
    },
    deleteArticle: async ({ commit }, payload) => {
      const docRef = db.collection("Articles").doc(payload);
      await docRef.delete();
      commit("deleteArticle", payload);
    },
    //axios的版本一
    // fetchArticles: ({ commit }) => {
    //   const api ="網址"
    //   axios.get(api).then(result=>{
    //     this.articles = result.data.data;
    //   });
    // },
    //axios的版本二，異步方式
    // fetchArticles:async ({ commit }) => {
    //   const api ="網址"
    //   const result = await axios.get(api);
    // const payload = result.data.data;
    // },
  },
  getters: {
    filterBySearchKey: (state) => {
      //getters有固定引數值
      if (state.articles.length) {
        if (state.searchKey === "") {
          return state.articles;
        } else {
          return state.articles.filter((art) =>
            art.title.includes(state.searchKey)
          );
          // return state.articles.filter(art => art.title === state.searchKey)
        }
      }
    },
    filterById: (state) => {
      if (state.articles.length) {
        return state.articles.filter((art) => art.id === state.focusId)[0];
      }
    },
  },
});
