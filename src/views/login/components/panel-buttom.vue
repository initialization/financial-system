<template>
  <div class="code-button">
    <h4>登录遇到问题？</h4>
    <div class="code-3">
      <span>原登录方式不可用、密码无法找回、账号管理员变动，请</span>
      <el-link type="primary" class="link">前往申诉</el-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.code-button {
  .code-3 {
    display: flex;
    align-items: center;
    color: #c1c2c6;
    font-size: 13px;
    .link {
      padding-left: 4px;
      font-size: 13px;
    }
  }
}
</style>
