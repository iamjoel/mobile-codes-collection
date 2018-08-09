<template>
  <div class="main">
    <!-- 搜索 -->
    <van-search placeholder="请输入组件名称" v-model="searchInput" @search="onSearch"/>
    <h1 class="ly ly-c title-with-line">
      <div class="title-with-line__text">组件</div>
    </h1>
    <h2 class="demo-classify__title">常见</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/common/button')" class="nav__item">
        <van-icon name="success" />
        <div class="mt-10 ta-c">按钮</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/common/tag')" class="nav__item">
        <van-icon name="card" />
        <div class="mt-10 ta-c">标签</div>
      </a>
    </div>

    <h2 class="demo-classify__title">轮播相关</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/swipe')" class="nav__item">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">Banner轮播</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/swipe/vertical')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">垂直轮播</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/swipe/notice-bar')" class="nav__item">
        <van-icon name="more-o" />
        <div class="mt-10 ta-c">通告栏</div>
      </a>
    </div>

    <h2 class="demo-classify__title">列表相关</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/list/infinate-load')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">无限加载</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/list/infinate-load')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">无限加载封装</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/list/pagination')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">分页</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/list/no-data')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">列表无数据</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/list/filter')" class="nav__item">
        <van-icon name="search" />
        <div class="mt-10 ta-c">搜索条件</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/list/pull-refresh')" class="nav__item">
        <van-icon name="upgrade" />
        <div class="mt-10 ta-c">下拉刷新</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/list/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">记住滚动位置</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/list/hor-scroll')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">横向滚动</div>
      </a>
    </div>
    <h2 class="demo-classify__title">表单</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/form')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">综合</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/field')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">输入框&域</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/radio')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">单选(Radio)</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/checkbox')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">多选(Checkbox)</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/switch')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">开关(Switch)</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/select-radio')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">选择器(Picker)单选</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/select-checkbox')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">选择器(Picker)多选</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/datetimePicker')" class="nav__item">
        <van-icon name="clock" />
        <div class="mt-10 ta-c">日期&时间</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/uploader-single')" class="nav__item">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">单张图片上传</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/uploader-more')" class="nav__item">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">多张图片上传</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/form/slide')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">滑块(Slider)</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/rate')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">评分</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/form/stop-multiple-submit')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">防止多次提交</div>
      </a>
    </div>
    <h2 class="demo-classify__title">弹出框</h2>
    <div class="ly ly-multi nav">
      
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="pending-evaluate" />
        <div class="mt-10 ta-c">信息提示(Alert)</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="pending-evaluate" />
        <div class="mt-10 ta-c">信息确认(Confirm)</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="pending-evaluate" />
        <div class="mt-10 ta-c">自定义弹出内容</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="pending-evaluate" />
        <div class="mt-10 ta-c">弹出层(Popup)</div>
      </a>
    </div>
    <h2 class="demo-classify__title">提示</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="info-o" />
        <div class="mt-10 ta-c">轻提示(Toast)</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="info-o" />
        <div class="mt-10 ta-c">加载中</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/tool-tip')" class="nav__item">
        <van-icon name="info-o" />
        <div class="mt-10 ta-c">ToolTip</div>
      </a>
    </div>
    <h2 class="demo-classify__title">图片&图文展示</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/media')" class="nav__item">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">Media</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/component/img/img-description')" class="nav__item">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">图片底部有描述文字</div>
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
      <a href="javascript:void(0)" @click="$router.push('/component/img/img-badge')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">上传图片压缩裁切</div>
      </a>
    </div>
    <h2 class="demo-classify__title">图标</h2>
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
    <h2 class="demo-classify__title">容器</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="info-o" />
        <div class="mt-10 ta-c">单元格(Cell)</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="info-o" />
        <div class="mt-10 ta-c">折叠面板(Collapse)</div>
      </a>
    </div>
    <h2 class="demo-classify__title">地图</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/component/map/120.614/31.3661/联青大厦/吴中东路134号')" class="nav__item">
        <van-icon name="location" />
        <div class="mt-10 ta-c">导航</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('')" class="nav__item demo--unfinished">
        <van-icon name="location" />
        <div class="mt-10 ta-c">选地址</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('')" class="nav__item demo--unfinished">
        <van-icon name="location" />
        <div class="mt-10 ta-c">座标系之间的转化</div>
      </a>
    </div>

    <h2 class="demo-classify__title">数据可视化</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">折线图</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">柱状图</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('')" class="nav__item demo--unfinished">
        <van-icon name="photo" />
        <div class="mt-10 ta-c">饼图</div>
      </a>
    </div>
    <h2 class="demo-classify__title">其他</h2>
    <div class="ly ly-multi nav">
      
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