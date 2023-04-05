<template>
  <div class="page-content">
    <baseTable :table-data="tabelData" :table-config="tableConfig"></baseTable>
  </div>
</template>

<script setup lang="ts">
import { baseTable } from "@/base-ui/table"
const tabelData = [
  {
    num: 1,
    project: "test",
    money: 12
  },
  {
    num: 13,
    project: "test",
    money: 112
  },
  {
    num: 131,
    project: "test",
    money: 1232
  },
  {
    num: 14,
    project: "test",
    money: 11112
  }
]
const tableConfig = [
  {
    label: "序号",
    prop: "num",
    width: 30
  },
  {
    label: "项目",
    prop: "project",
    width: 130
  },
  {
    label: "金额合计（元）",
    prop: "money",
    width: 30
  },
  {
    label: "操作",
    prop: "handle",
    width: 40
  }
]
</script>

<style scoped lang="less">
.page-content {
  margin-top: 20px;
}
</style>
