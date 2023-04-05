<template>
  <div class="center">
    <div class="header">
      <h3 class="header-title">经营概况</h3>
      <el-row :gutter="10">
        <template v-for="item in cardData" :key="item.title"
          ><el-col :span="6"><Card :card-data="item" /></el-col
        ></template>
      </el-row>
    </div>
    <div class="content">
      <el-row :gutter="20" class="content-item">
        <el-col :span="12" :offset="0"
          ><echart title="盈利能力" :options="firstOption"
        /></el-col>
        <el-col :span="12" :offset="0"
          ><echart title="月支出类型" :options="secOption"
        /></el-col>
      </el-row>
      <el-row :gutter="20" class="content-item">
        <el-col :span="12" :offset="0"
          ><echart title="月支出对比" :options="thirdOption"
        /></el-col>
        <el-col :span="12" :offset="0"
          ><echart title="月支出排行" :options="secOption"
        /></el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Card } from "@/base-ui/card"
import { storeToRefs } from "pinia"
import { useUserStore } from "@/store/main/useUserStore"
import { echart } from "@/base-ui/echarts"
const userStore = useUserStore()
userStore.cardDataAction()
const { cardData } = storeToRefs(userStore)
const firstOption = {
  xAxis: {
    type: "category",
    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"]
  },
  tooltip: {
    trigger: "item"
  },
  grid: {
    top: 30,
    x: 30,
    x2: 18,
    y2: 18
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [120, 932, 901, 934, 1290, 1330, 1320],
      type: "line",
      smooth: true
    }
  ]
}
const secOption = {
  xAxis: {
    type: "category",
    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"]
  },
  tooltip: {
    trigger: "item"
  },
  yAxis: {
    type: "value"
  },
  grid: {
    top: 30,
    x: 30,
    x2: 18,
    y2: 18
  },
  series: [
    {
      data: [120, 932, 901, 934, 1290, 1330, 1320],
      type: "bar",
      showBackground: true
    }
  ]
}
const thirdOption = {
  title: {
    left: "center"
  },
  tooltip: {
    trigger: "item",
    axisPointer: {
      type: "cross",
      backgroundColor: "#6a7985"
    }
  },
  legend: {
    orient: "vertical",
    left: "left"
  },
  series: [
    {
      type: "pie",
      radius: "80%",
      data: [
        { value: 1048, name: "收入" },
        { value: 735, name: "支出" },
        { value: 580, name: "工资" },
        { value: 484, name: "盈利" },
        { value: 300, name: "财务" }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
}
</script>

<style scoped lang="less">
.center {
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.header-title {
  color: #856d6a;
}
.content {
  background-color: #fff;
  margin-top: 15px;
  margin-bottom: 20px;
  .content-item {
    margin-bottom: 10px;
  }
}
</style>
