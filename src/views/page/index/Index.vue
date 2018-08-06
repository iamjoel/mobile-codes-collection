<template>
  <div class="main">
    <!-- 搜索 -->
    <van-search placeholder="请输入页面名称" v-model="searchInput" @search="onSearch"/>
    <h1 class="ly ly-c title-with-line">
      <div class="title-with-line__text">页面</div>
    </h1>
    <h2 class="demo-classify-title">个人中心</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/page/member-center')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">个人中心</div>
      </a>
    </div>

    <h2 class="demo-classify-title">下单流程</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/page/cart')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">购物车</div>
      </a>
      
    </div>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>