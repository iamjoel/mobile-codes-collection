<template>
  <div class="main">
    <h2 class="demo-classify__title">axios</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/tool/axios/crud')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">crud写法</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/tool/data')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">数据获取</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">自定义处理报错</div>
      </a>
    </div>
    <h2 class="demo-classify__title">多语言</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/')" class="nav__item demo--unfinished">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">多语言</div>
      </a>
    </div>
    <h2 class="demo-classify__title">工具</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/tool/browser-detect')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">终端探测</div>
      </a>
    </div>
    
    <h2 class="demo-classify__title">文档</h2>
    <ul class="doc-list">
      <li v-for="(item,index) in list">
        <a :href="item.url">{{item.label}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        label: 'Vue',
        url: 'http://vuejs.org/'
      },{
        label: 'Vant UI',
        url: 'https://www.youzanyun.com/zanui/vant#/zh-CN/component/intro'
      }]
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped>
  li {
    padding-left: .2rem;
    list-style-type: square;
    line-height: 1.5 ;
  }
  .doc-list a {
    text-decoration: underline;
  }
</style>