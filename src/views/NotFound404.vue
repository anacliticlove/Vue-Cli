<template>
<div>
<h1>This not found 404</h1>
<b-btn @click="goBackHome">go back</b-btn>
</div>
    
</template>
<script>
export default {
    methods:{
        goBackHome:function(){
            this.$router.push({name:"Home"})
        }
    }
}
</script>
<style lang="scss" scoped>
div {
  margin-top: 80px;
}
</style>