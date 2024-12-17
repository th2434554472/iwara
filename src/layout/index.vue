<script setup lang="ts">
import Header from './header/index.vue'
</script>

<template>
  <div class="layout-container">
    <!-- 顶部导航栏-->
    <div class="layout-header">
      <Header/>
    </div>
    <!-- 左侧菜单-->
    <div class="layout-slider">
      <div>左侧菜单</div>
    </div>
    <!-- 内容区-->
    <div class="layout-content">

    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;
  .layout-header {
    width: 100%;
    height: $base-header-height;
    background: #e8e8e8;
    padding: 8px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .layout-slider {
    width: $base-slider-width;
    height: calc(100vh - $base-header-height);
    background: #e8e8e8;
    position: relative;
    top: $base-header-height;
  }
}
</style>