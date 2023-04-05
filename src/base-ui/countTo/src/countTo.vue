<template>
  <div class="count-to">{{ num.num2.toFixed() }}</div>
</template>

<script setup lang="ts">
import { reactive, defineProps, watch } from "vue"
import gsap from "gsap"

const props = defineProps<{
  value: number
}>()
const num = reactive({
  num2: 0
})
function animateToValue() {
  gsap.to(num, {
    duration: 0.6,
    num2: props.value
  })
}
animateToValue()
watch(
  () => props.value,
  () => animateToValue()
)
</script>

<style scoped></style>
