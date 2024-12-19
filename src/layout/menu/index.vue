<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useRoute } from 'vue-router';

let $route = useRoute()

defineProps(["menuList"])
</script>

<script lang="ts">
  export default {
    name: "menuCom"
  }
</script>
<template>
    <el-menu :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="transparent"
    text-color="#000"
    active-text-color="#ffd04b"
    style="border-right: 0;"
    router>
      <template v-for="(menu) in menuList" :key="menu.path">
        <el-menu-item v-if="!menu.meta.hidden && !menu.children"
        :index="menu.path">
          <el-icon></el-icon>
          <span>{{ menu.meta.title }}</span>
        </el-menu-item>
        
        <!-- 有多个子路由 -->
      <el-sub-menu
        v-if="!menu.meta.hidden && menu.children && menu.children.length > 1"
        :index="menu.path"
      >
        <template #title>
          <el-icon><component :is="menu.meta.icon"></component></el-icon>
          <span>{{ menu.meta.title }}</span>
        </template>
        <menuCom :menuList="menu.children" />
      </el-sub-menu>
      </template>
      
    </el-menu>
</template>