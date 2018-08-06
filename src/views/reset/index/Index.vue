<template>
  <div class="main">
    <!-- 搜索 -->
    <van-search placeholder="请输入重置名称" v-model="searchInput" @search="onSearch"/>
    <h1 class="ly ly-c title-with-line">
      <div class="title-with-line__text">重置</div>
    </h1>
    <h2 class="demo-classify-title">Vant 组件重置</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/page/slider')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">Tab</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/page/slider')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">底部导航</div>
      </a>
    </div>

  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>