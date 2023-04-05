<template>
  <div class="table">
    <el-table :data="props.tableData" style="width: 100%" border>
      <el-table-column
        v-for="item in props.tableConfig"
        :key="item.label"
        :prop="item.prop"
        :label="item.label"
        align="center"
      >
        <!-- <template #default="scope">
          <div>{{ scope }}</div></template
        > -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
const props = defineProps<{
  tableData: any
  tableConfig: any
}>()
console.log(props.tableData)
console.log(props.tableConfig)
</script>

<style scoped></style>
