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
        <van-icon name="contact" />
        <div class="mt-10 ta-c">个人中心</div>
      </a>
    </div>

    <h2 class="demo-classify-title">通用页面</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">注册</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">登录</div>
      </a>
      
    </div>
    <h2 class="demo-classify-title">表单</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">新增</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">实时保存</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">编辑</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">表单验证</div>
      </a>
    </div>

    <h2 class="demo-classify-title">商城相关</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">商品列表</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">商品详情</div>
      </a>
    </div>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">订单列表</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">订单详情</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">购买成功</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">购买失败</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">订单评论</div>
      </a>
    </div>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/page/cart')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">购物车</div>
      </a>
    </div>

    <h2 class="demo-classify-title">其他</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">用户协议</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">常见问题</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">意见反馈</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">朋友圈</div>
      </a>
    </div>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>