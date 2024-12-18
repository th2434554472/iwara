<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>
<template>
  <div class="menu">
    <ul>
      <li>
        <a href="#" class="menu-item active">
          <div class="icon">
            <SvgIcon name="home" width="24px" height="24px"/>
          </div>
          <div>主页</div>
        </a>
      </li>
      <li><a href="#">查找</a></li>
      <li><a href="#">连接</a></li>
      <li><a href="#">高级会员</a></li>
      <li><a href="#">Wura</a></li>
      <li><a href="#">常见问题</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  a {
    color: black;
    display: flex;
    &.active {
      background: #19b898;
    }
    li {
      background-color: gray;
      padding: 10px;
      margin: 1px 0;
      border-radius: 10px;
      text-align: center;

      &:hover {
        background-color: aquamarine
      }
    }
  }
}
</style>
