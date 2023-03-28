<template>
  <div class="nav-menu">
    <el-menu text-color="#606266" class="el-menu-vertical-demo">
      <template v-for="item in userMenu.data" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon><component :is="item.icon"></component></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handelMenuItem(subitem)"
              >
                <el-icon><component :is="subitem.icon"></component></el-icon>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id + ''">
            <el-icon><component :is="item.icon"></component></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "@/store/main/userStore"
import router from "@/router"
import { storeToRefs } from "pinia"
const store = userStore()
store.userMenuAction()
const { userMenu } = storeToRefs(store)
const handelMenuItem = (item: any) => {
  router.push({
    path: item.url ?? "/not-find"
  })
}
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
