<template>
  <div class="main">
    <!-- 搜索 -->
    <van-search placeholder="请输入组件名称" v-model="searchInput" @search="onSearch"/>
    <!-- 跑马灯通知 -->
    <van-notice-bar
      text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
      left-icon="/static/icon/chat.png"
    />

    <h1 class="ly ly-c title-with-line">
      <div class="title-with-line__text">组件</div>
    </h1>
    <h2 class="demo-classify-title">轮播</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/slider')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">普通轮播</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/slider/vertical')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">垂直轮播<!-- 消息通知 --></div>
      </a>
    </div>

    <h2 class="demo-classify-title">列表</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/list/infinate-load')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">无限加载</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/list/no-data')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">无数据</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/list/filter')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">搜索条件</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/list/pull-refresh')" class="nav__item">
        <van-icon name="upgrade" />
        <div class="mt-10 ta-c">下拉刷新</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/list/hor-scroll')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">横向滚动</div>
      </a>
    </div>
    <h2 class="demo-classify-title">图片</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/img/lazyload')" class="nav__item">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">懒加载</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/img/img-preview')" class="nav__item">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">图片预览</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/img/img-badge')" class="nav__item">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">角标</div>
      </a>
    </div>
    <h2 class="demo-classify-title">其他</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/data')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">数据获取</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/media')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">Media</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/form')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">表单</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/calendar')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">日历</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/tree-select')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">分类选择</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/map/120.614/31.3661/联青大厦/吴中东路134号')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">地图</div>
      </a>
    </div>
    
    
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>