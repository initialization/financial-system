<template>
  <div class="user-login">
    <img src="@/assets/images/login.svg" class="img" />
    <loginPanel></loginPanel>
  </div>
</template>

<script setup lang="ts">
import loginPanel from "./components/login-panel.vue"
</script>

<style scoped lang="less">
.user-login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 100px;
  .img {
    width: 550px;
    height: 404px;
    margin-right: 160px;
  }
}
</style>
