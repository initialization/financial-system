<template>
  <div class="user-main">
    <el-container>
      <el-header class="header"><navHeader /></el-header>
      <el-container>
        <el-aside width="220px"><navMenu /></el-aside>
        <el-main>
          <div class="tabs-list">
            <tabsList></tabsList>
          </div>
          <RouterView></RouterView
        ></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { navMenu } from "@/components/nav-menu"
import { navHeader } from "@/components/nav-header"
import { tabsList } from "@/base-ui/tabsList"
</script>

<style scoped lang="less">
.user-main {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  .header {
    background-color: #fff;
    margin-bottom: 2px;
    border: 10px solid hsla(0, 0%, 100%, 0.5);
  }
  .el-container {
    height: 100%;
    .el-main {
      padding: 8px;
    }
  }
  .tabs-list {
    display: flex;
    align-items: center;
  }
}
</style>
