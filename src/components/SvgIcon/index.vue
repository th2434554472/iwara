<script setup lang="ts">
// 接受父组件传递过来的参数
defineProps({
  // xlink:href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-'
  },
  // 提供使用的图标名字
  name: String,
  // 提供父组件传递的颜色
  color: {
    type: String,
    default: ''
  },
  // 接受父组件传递的宽度和高度
  width: {
    type: String,
    default: '16px'
  },
  height: {
    type: String,
    default: '16px'
  }
})
</script>

<template>
  <svg :style="{width,height}">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<style scoped>

</style>