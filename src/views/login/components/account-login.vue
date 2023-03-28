<template>
  <div class="account-login">
    <h3>欢迎回来</h3>
    <div class="check">
      <checkForm
        :form-items="formItems"
        labelPosition="top"
        v-model="account"
      ></checkForm>
      <div class="control-account">
        <el-checkbox v-model="checkedAccount" label="记住密码" />
        <el-link type="primary">忘记密码？</el-link>
      </div>
      <el-button type="primary" class="btn" @click="handleLogin"
        >登录</el-button
      >
    </div>
    <panelButtom />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import panelButtom from "./panel-buttom.vue"
import { checkForm } from "@/base-ui/checkForm"
import { IAccount } from "@/base-ui/checkForm/src/type"
import { formItems } from "../config"
import router from "@/router"

const checkedAccount = ref(false)
const account = reactive<IAccount>({
  account: "",
  password: ""
})
const handleLogin = () => {
  router.push("/main")
}
</script>

<style scoped lang="less">
.account-login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .check {
    width: 233px;
    .btn {
      margin-top: 20px;
      width: 100%;
    }
  }
  .control-account {
    display: flex;
    justify-content: space-between;
  }
}
</style>
