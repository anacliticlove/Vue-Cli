<template>
  <div>
    <b-form >
      <b-form-group
        id="input-group-1"
        label="輸入管理員帳號"
        label-for="input-1"
       style="margin-top:100px;" 
      >
        <b-form-input
          id="input-1"
          v-model="form.acount"
          type="text"
          required
          placeholder="Enter Acount"
          style="width:300px; margin-left:470px; " 
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="輸入密碼" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter Password"
          style="width:300px; margin-left:470px;" 
        ></b-form-input>
      </b-form-group>
      <b-button @click.prevent="routerToAdmin" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                acount:"",
                password:""
            }
        }
    },
  methods: {
    routerToAdmin: function() {
      //name要與router的路由name一樣
      this.$router.push({ name: "Admin-Home" });
    },
  },
};
</script>
<style lang="scss" scoped>

       

</style>
