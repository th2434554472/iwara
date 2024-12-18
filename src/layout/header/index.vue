<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<template>
  <!-- 顶部导航左侧-->
  <div class="header-left">
    <div class="header-menu">
      <div class="icon">
        <SvgIcon name="menu" width="24px" height="24px" />
      </div>
    </div>
    <a class="header-logo" href="/">
      <SvgIcon class="logo" name="logo" width="36px" height="36px" fill="black"/>
      <div class="header-text">Iwara</div>
    </a>
  </div>
  <!-- 顶部导航搜索栏 -->
  <div class="header-search">
    <el-form class="search-box">
      <el-form-item>
        <el-input placeholder="search"/>
      </el-form-item>
      <el-button type="info">
        <div>
          <SvgIcon name="search" width="18px" height="18px" />
        </div>
      </el-button>
    </el-form>
  </div>
  <!-- 顶部导航右侧 -->
  <div class="header-right">
    <a href="#">
      <span class="money-text">0</span>
      <SvgIcon name="money" width="18px" height="18px" fill="#dda82b" />
    </a>
    <a href="#">
      <SvgIcon name="premium" width="18px" height="18px" />
    </a>
    <a href="#">
      <SvgIcon name="plus" width="18px" height="18px" />
    </a>
    <a href="#">
      <SvgIcon name="mail" width="18px" height="18px" />
    </a>
    <a href="#">
      <SvgIcon name="user" width="18px" height="18px" />
    </a>
    <a href="#">
      <SvgIcon name="bell" width="18px" height="18px" />
    </a>
    <div class="avatar">
      <img src="@/assets/image/avatar.jpg">
    </div>
  </div>
</template>

<style scoped>
.header-left {
  display: flex;
  align-items: center;
  gap: 15px;
  min-width: 200px;
  .header-menu {
    width: 74px;
    .icon {
      margin-left: 16px;
    }
  }
  .header-logo {
    display: flex;
    align-items: center;
    .logo {
      margin-right: 15px;
    }
    .header-text {
      font-size: 1.3rem;
      line-height: 1.5rem;
      font-weight: 700;
      color: black;
    }
  }
}

.header-search {
  .search-box {
    display: flex;
  }
}

.header-right {
  display: flex;
  align-items: center;
  a {
    padding: 30px 15px;
    .money-text {
      font-size: 1.05rem;
      color: #dda82b;
      margin-right: 0.5rem;
    }
  }
  .avatar {
    width: 32px;
    height: 32px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }
}

</style>