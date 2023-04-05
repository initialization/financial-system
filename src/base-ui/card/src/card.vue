<template>
  <el-card class="box-card content" shadow="hover">
    <div class="card">
      <div class="title">{{ props.cardData.title }}</div>
      <div class="main"><countTo :value="props.cardData.value" /></div>
    </div>
    <div class="right">
      <el-tag class="ml-2" :type="props.cardData.type" size="large">月</el-tag>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import { ICardData } from "./type"
import { countTo } from "@/base-ui/countTo"
const props = defineProps<{
  cardData: ICardData
}>()
console.log(props.cardData)
</script>

<style scoped lang="less">
.content {
  position: relative;
  .card {
    .title {
      color: #aaacc5;
      font-size: 12px;
      margin-bottom: 10px;
    }
    .main {
      color: #222233;
      font-size: 28px;
    }
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
