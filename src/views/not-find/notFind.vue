<template>
  <el-result icon="warning" title="404提示" sub-title="你找的页面走丢了">
    <template #extra>
      <el-button type="primary" @click="$router.push('/main')"
        >返回主页</el-button
      >
    </template>
  </el-result>
</template>

<script setup lang="ts"></script>

<style scoped></style>
