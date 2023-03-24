<template>
  <div class="login-panel">
    <el-card class="box-card">
      <el-tabs
        v-model="activeName"
        class="demo-tabs"
        stretch
        @tab-click="handleClick"
      >
        <el-tab-pane label="企业微信扫码登录" name="code"
          ><qrcodeLogin></qrcodeLogin
        ></el-tab-pane>
        <el-tab-pane label="账号密码登录" name="account"
          ><accountLogin></accountLogin
        ></el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import accountLogin from "./account-login.vue"
import qrcodeLogin from "./qrCode-login.vue"
import type { TabsPaneContext } from "element-plus"
const activeName = ref("code")
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped lang="less">
.login-panel {
  width: 550px;
}
</style>
