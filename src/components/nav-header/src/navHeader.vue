<template>
  <div class="nav-header">
    <div class="left">
      <el-image
        style="width: 150px; height: 30px"
        src="https://p0.meituan.net/rmscashier/8efff23f26051e7317d70a898837f07c21894.png"
        fit="contain"
      />
    </div>
    <div class="right">
      <div class="search">
        <el-input
          v-model="inputValue"
          class="w-50 m-2"
          size="small"
          placeholder="请输入想搜索的功能"
          :prefix-icon="Search"
        />
      </div>
      <dropDown class="shop" :list="shopList" />
      <dropDown :list="userList" title="用户1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Search } from "@element-plus/icons-vue"
import { dropDown } from "@/base-ui/dropDown"
import { userList, shopList } from "./config"
const inputValue = ref("")
</script>

<style scoped lang="less">
.nav-header {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    display: flex;
    margin-right: 10px;
    align-items: center;
    .shop {
      margin-right: 15px;
    }
    .search {
      border-radius: 6px;
      margin-right: 40px;
    }
  }
}
</style>
