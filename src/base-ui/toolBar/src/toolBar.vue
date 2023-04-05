<template>
  <div class="tool-bar">
    <template v-for="item in props.toolbarConfig" :key="item.label">
      <template v-if="item.type == 'datePicker'">
        <div class="bar-item">
          <span>{{ item.label }}:</span>
          <el-date-picker
            v-model="datePickerValue"
            type="daterange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            size="small"
            style="width: 180px"
          />
        </div>
      </template>
      <template v-else-if="item.type == 'cascader'">
        <div class="bar-item">
          <span>{{ item.label }}:</span>
          <el-cascader
            v-model="cascaderValue"
            :options="item.cascaderOptions"
            :placeholder="item.placeholder"
            :show-all-levels="false"
          />
        </div>
      </template>
      <template v-else>
        <div class="bar-item">
          <el-checkbox v-model="checkValue" :label="item.label" size="large" />
        </div>
      </template>
    </template>
    <div class="right">
      <el-button type="primary" icon="Search">查询</el-button>
      <el-button icon="Edit">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue"
import { IToolBarType } from "./type"
const props = defineProps<{
  toolbarConfig: IToolBarType[]
}>()
const datePickerValue = ref("")
const cascaderValue = ref("")
const checkValue = ref("")
</script>

<style scoped lang="less">
.tool-bar {
  display: flex;
  align-items: center;
  padding-left: 20px;
  justify-content: space-evenly;
  .bar-item {
    margin-right: 26px !important;
  }
}
</style>
