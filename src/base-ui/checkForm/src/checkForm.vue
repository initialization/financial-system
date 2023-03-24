<template>
  <div class="check-form">
    <el-form
      :label-position="props.labelPosition"
      label-width="100px"
      style="max-width: 460px"
    >
      <template v-for="item in formItems" :key="item.label">
        <template v-if="item.type === 'password'">
          <el-form-item :label="item.label">
            <el-input
              :type="item.type"
              :placeholder="item.placeholder"
              show-password
              v-model="accountRef[`${item.field}`]"
            /> </el-form-item
        ></template>
        <template v-else>
          <el-form-item :label="item.label">
            <el-input
              :type="item.type"
              :placeholder="item.placeholder"
              v-model="accountRef[`${item.field}`]"
            />
          </el-form-item>
        </template>
      </template>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref } from "vue"
import { IFormType } from "./type"
const props = withDefaults(
  defineProps<{
    labelPosition: string
    formItems: IFormType[]
    modelValue: any
  }>(),
  {
    labelPosition: "right"
  }
)
const accountRef = ref<any>(props.modelValue)
</script>

<style scoped lang="less">
.check-form {
  width: 100%;
}
</style>
