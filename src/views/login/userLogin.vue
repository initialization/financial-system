<template>
  <div class="user-login">
    <el-row class="row">
      <el-col :lg="16" :md="12">
        <img src="@/assets/images/login.svg" class="img" />
      </el-col>
      <el-col :lg="8" :md="12"><loginPanel></loginPanel></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import loginPanel from "./components/login-panel.vue"
import { useUserStore } from "@/store/main/useUserStore"
const store = useUserStore()
store.userMenuAction()
</script>

<style scoped lang="less">
.user-login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 100px;
  .row {
    display: flex;
  }
  .img {
    width: 550px;
    height: 404px;
    margin-right: 160px;
  }
}
</style>
