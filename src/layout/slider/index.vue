<script setup lang="ts">
import useUserStore from '@/stores/modules/user';
import Menu from '../menu/index.vue';

const userStore = useUserStore();
console.log(userStore.menuRoutes);

</script>

<template>
  <div class="menu">
    <Menu :menuList="userStore.menuRoutes"/>
    <!-- <ul>
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
    </ul> -->
  </div>
</template>

<style lang="scss" scoped>
.menu {
  a {
    color: black;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    .icon {
      margin-right: 20px;
    }
    &.active {
      background: #19b898;
    }
    &:hover {
      background-color: #C9BAE1;
    }
    li {
      background-color: gray;
      margin: 1px 0;
      text-align: center;
    }
  }
}
</style>
