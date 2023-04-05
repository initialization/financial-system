<template>
  <div class="tabs-list">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      class="demo-tabs"
      @tab-remove="removeTab"
      @tab-change="handleTabChange"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.path"
        :label="item.title"
        :name="item.path"
        :closable="item.path !== '/main/center'"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"
import localCache from "@/utils/use-cache"
import router from "@/router"
const route = useRoute()
const editableTabsValue = ref(route.path)
const editableTabs = ref([
  {
    path: "/main/center",
    title: "报表中心首页"
  }
])

function addTab(tab: any) {
  let isMark =
    editableTabs.value.findIndex((t: any) => t.path === tab.path) == -1
  // const isMark = editableTabs.value.findIndex((t) => (t.path = tab.path)) == 1
  if (isMark) {
    editableTabs.value.push(tab)
  }
  // 添加缓存，防止刷新数据丢失
  localCache.setLocalCache("tabsList", editableTabs.value)
  initTabList()
}
// addTab({
//   title: "报表中心首页",
//   path: "/main/center"
// })
onBeforeRouteUpdate((to) => {
  editableTabsValue.value = to.path
  addTab({ title: to.meta.title, path: to.path })
})
const handleTabChange = (t: string) => {
  router.push(t)
}

function initTabList() {
  editableTabs.value = localCache.getLocalCache("tabsList")
}
if (localCache.getLocalCache("tabsList")) {
  initTabList()
}
const removeTab = (target: string) => {
  let tabs = editableTabs.value
  let a = editableTabsValue.value
  if (target == a) {
    tabs.forEach((tab, index) => {
      if (tab.path == target) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          a = nextTab.path as any
        }
      }
    })
  }
  editableTabsValue.value = a
  editableTabs.value = editableTabs.value.filter((t) => t.path != target)
  localCache.setLocalCache("tabsList", editableTabs.value)
}
</script>

<style scoped lang="less">
.el-tabs {
  :deep(.el-tabs__header) {
    border-bottom: none !important;
  }
  :deep(.el-tabs__nav) {
    border: none !important;
  }
  :deep(.el-tabs__item) {
    border-left: none !important;
    margin-right: 8px !important;
    background-color: #fff !important;
    box-shadow: 7px 0 5px -5px #333 !important;
  }
}
</style>
