<script setup lang="ts">
import Header from './header/index.vue'
import Slider from './slider/index.vue'
import Main from './main/index.vue'
</script>

<template>
  <div class="layout-container">
    <!-- 顶部导航栏-->
    <div class="layout-header">
      <Header/>
    </div>
    <!-- 左侧菜单-->
    <div class="layout-slider">
      <Slider/>
    </div>
    <!-- 内容区-->
    <div class="layout-content">
      <Main/>
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
    z-index: 1000;
  }
  .layout-slider {
    width: $base-slider-width;
    height: calc(100vh - $base-header-height);
    background: #e8e8e8;
    position: relative;
    top: $base-header-height;
    z-index: 100;
  }
  .layout-content {
    width: calc(100% - $base-slider-width);
    position: absolute;
    top: $base-header-height;
    left: $base-slider-width;
    padding: 10px;
  }
}
</style>