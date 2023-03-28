<template>
  <div class="user-main">
    <el-container>
      <el-header class="header"><navHeader /></el-header>
      <el-container>
        <el-aside width="220px"><navMenu /></el-aside>
        <el-main><RouterView></RouterView></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { navMenu } from "@/components/nav-menu"
import { navHeader } from "@/components/nav-header"
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
  }
}
</style>
