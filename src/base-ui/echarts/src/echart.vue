<template>
  <el-card shadow="always">
    <template #header>
      <div>
        <span>{{ props.title }}</span>
      </div>
    </template>
    <!-- card body -->
    <div
      ref="echartsRef"
      style="
         {
          width: 200px;
          height: 200px;
        }
      "
    ></div>
  </el-card>
</template>

<script setup lang="ts">
import * as echarts from "echarts"
import { defineProps, ref, onMounted } from "vue"
const props = defineProps<{
  title?: string
  options?: any
}>()
const echartsRef: any = ref<HTMLElement>()
onMounted(() => {
  const myChart = echarts.init(echartsRef.value)
  const option: any = props.options

  myChart.setOption(option)
})
</script>

<style scoped lang="less"></style>
