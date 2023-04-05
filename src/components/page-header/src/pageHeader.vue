<template>
  <div class="page-header">
    <div class="header-top">
      <div class="left">{{ route.meta.title }}</div>
      <div class="right">
        <el-button
          v-for="item in props.buttonData"
          :key="item.id"
          type=""
          text
          :icon="item.icon"
          >{{ item.label }}</el-button
        >
      </div>
    </div>
    <div class="header-buttom"><toolBar :toolbar-config="toolbarConfig" /></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import { useRoute } from "vue-router"
import { toolBar } from "@/base-ui/toolBar"
const props = defineProps<{
  buttonData: any[]
  toolbarConfig: any
}>()
const route = useRoute()
</script>

<style scoped lang="less">
.page-header {
  background-color: #fff;
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      font-weight: 500;
      margin-left: 20px;
    }
  }
  .header-buttom {
    margin-top: 18px;
    display: flex;
  }
}
</style>
