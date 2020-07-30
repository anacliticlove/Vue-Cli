<template>
  <div>
    <!-- <h1>here is admin page!</h1> -->
    <router-link to="/admin">admin-home</router-link>
    <router-link to="/admin/add">admin-add</router-link>
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
div {
  margin-top: 80px;
}
</style>
