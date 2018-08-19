<template>
  <div class="main">
    <h2 class="demo-classify__title">axios</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/tool/axios/crud')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">crud写法</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/tool/axios/data')" class="nav__item">
        <van-icon name="records" />
        <div class="mt-10 ta-c">数据获取</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/tool/axios/customer-error-handler')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">自定义处理报错</div>
      </a>
    </div>
    <h2 class="demo-classify__title">微信相关</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/tool/wechat/fetch-user-info')" class="nav__item">
        <van-icon name="contact" />
        <div class="mt-10 ta-c">获取用户信息</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/tool/wechat/share')" class="nav__item">
        <van-icon name="wechat" />
        <div class="mt-10 ta-c">分享</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/tool/wechat/pay')" class="nav__item">
        <van-icon name="debit-pay" />
        <div class="mt-10 ta-c">支付</div>
      </a>
    </div>
    <h2 class="demo-classify__title">多语言</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/tool/i18n')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">多语言</div>
      </a>
    </div>
    <h2 class="demo-classify__title">其他</h2>
    <div class="ly ly-multi nav">
      <a href="javascript:void(0)" @click="$router.push('/tool/other/time')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">时间</div>
      </a>
      <a href="javascript:void(0)" @click="$router.push('/tool/other/browser-detect')" class="nav__item">
        <van-icon name="wap-nav" />
        <div class="mt-10 ta-c">终端探测</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
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