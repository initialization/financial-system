<template>
  <div class="code-login">
    <div class="code-top">
      <span>请使用企业微信扫一扫登录</span>
      <el-button text type="primary" :icon="RefreshLeft">刷新</el-button>
    </div>
    <div class="code">
      <img class="img-code" src="@/assets/images/code.png" />
      <div class="code-2">
        <span>扫码失败？请前往</span>
        <el-link class="link">企业微信授权页</el-link>
      </div>
    </div>
    <panelButtom></panelButtom>
  </div>
</template>

<script setup lang="ts">
import { RefreshLeft } from "@element-plus/icons-vue"
import panelButtom from "./panel-buttom.vue"
</script>

<style scoped lang="less">
.code-login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  .code-top {
    font-size: 14px;
  }
  .code {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img-code {
      width: 190px;
      height: 190px;
      margin-bottom: 25px;
      margin-top: 25px;
    }
    .code-2 {
      display: flex;
      span {
        color: #aaacb1;
        font-size: 12px;
        margin-right: 5px;
      }
      .link {
        color: #525355;
        font-size: 13px;
      }
    }
  }
}
</style>
