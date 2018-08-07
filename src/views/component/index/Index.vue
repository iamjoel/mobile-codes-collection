<template>
  <div class="main">
    <!-- 搜索 -->
    <van-search placeholder="请输入组件名称" v-model="searchInput" @search="onSearch"/>
    <h1 class="ly ly-c title-with-line">
      <div class="title-with-line__text">组件</div>
    </h1>
    <h2 class="demo-classify-title">轮播相关</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/slider')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">普通轮播</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/slider/vertical')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">垂直轮播<!-- 消息通知 --></div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/slider/notice-bar')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">通告栏</div>
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
    <h2 class="demo-classify-title">表单</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/form')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">综合</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/field')" class="nav__item">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">输入框&域</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/radio')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">Radio</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">Checkbox</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="records" />
        <div class="mt-10 ta-c">开关</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">Select 单选</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">Select 多选</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="records" />
        <div class="mt-10 ta-c">日期&时间</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">单图片上传</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">多图片上传</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">范围<!-- Range 滑块 --></div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">评分</div>
      </a>
    </div>
    <h2 class="demo-classify-title">弹出框</h2>
    <div class="ly ly-multi nav">
      
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">Alert</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">确认框<!-- Confirm --></div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">弹出框 <!-- Dialog--></div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">Popup</div>
      </a>
    </div>
    <h2 class="demo-classify-title">提示</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">轻提示<!--Toast--></div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">加载中</div>
      </a>
    </div>
    <h2 class="demo-classify-title">图片&图文展示</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/media')" class="nav__item">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">Media</div>
      </a>
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
      <a href="javascript:void(0)" @click="$router.push('/component/img/img-badge')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">瀑布流</div>
      </a>
    </div>
    <h2 class="demo-classify-title">图标</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">Vant</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">商城相关</div>
      </a>
    </div>
    <h2 class="demo-classify-title">容器</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">单元格(Cell)</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">折叠面板</div>
      </a>
    </div>
    <h2 class="demo-classify-title">地图</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/map/120.614/31.3661/联青大厦/吴中东路134号')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">导航</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('')" class="nav__item demo--unfinished">
        <van-icon name="records" />
        <div class="mt-10 ta-c">选地址</div>
      </a>

    </div>
    <h2 class="demo-classify-title">其他</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/data')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">数据获取</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/calendar')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">日历</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/tree-select')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">分类选择</div>
      </a>
      
      
    </div>
    
    
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>