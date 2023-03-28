<template>
  <div class="drop-down">
    <el-dropdown>
      <span class="link">
        {{ props.title }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in props.list" :key="item.name">{{
            item.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue"

const props = withDefaults(
  defineProps<{
    title: string
    list: any[]
  }>(),
  {
    title: "鱼龙潜跃餐饮集团"
  }
)
</script>

<style scoped lang="less">
.drop-down {
  .link {
    cursor: pointer;
    align-items: center;
    outline: none;
  }
}
</style>
