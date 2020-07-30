<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-top">
      <b-navbar-brand href="#">MagicCoding</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/Login">Login</b-nav-item>
          </b-navbar-nav>
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              v-model="searchKey"
            > </b-form-input>
            <b-button 
            size="sm" 
            class="my-2 my-sm-0" 
            type="submit"
            @click.prevent="submitSearchKey"  >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data(){
    return{
      searchKey:""
    }
  },
  methods:{

    ...mapActions(['changeSearchKey']),

    submitSearchKey: function () {
      this.changeSearchKey(this.searchKey)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item{
    color: white;
    margin-right: 1.2rem;
}
</style>
