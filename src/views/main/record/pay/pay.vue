<template>
  <div class="pay">
    <pageHeader :button-data="buttonData" :toolbar-config="toolbarConfig" />
  </div>
</template>

<script lang="ts" setup>
import { pageHeader } from "@/components/page-header"
import { useUserStore } from "@/store/main/useUserStore"
import localCache from "@/utils/use-cache"
const buttonData = [
  {
    id: 1,
    icon: "FullScreen",
    label: "全屏展示"
  },
  {
    id: 2,
    icon: "Download",
    label: "导出"
  },
  {
    id: 3,
    icon: "Star",
    label: "设为常用"
  },
  {
    id: 4,
    icon: "View",
    label: "报表说明"
  }
]
const userStore = useUserStore()
userStore.shopDataAction()
const shopData = localCache.getLocalCache("shopData")
console.log("shopData", shopData)
const toolbarConfig = [
  {
    label: "营业日期",
    type: "datePicker"
  },
  {
    label: "门店",
    type: "cascader",
    cascaderOptions: shopData,
    placeholder: "请选择门店"
  },
  {
    label: "统计会员卡/订金/挂账/礼品卡消费",
    type: "checkbox"
  }
]
</script>

<style scoped></style>
