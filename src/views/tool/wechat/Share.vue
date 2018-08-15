<template>
  <div class="main">
  </div>
</template>

<script>
import wechat from '@/assets/utils/wechat'

export default {
  data() {
    return {

    }  
  },
  methods: {
    
  },
  mounted() {
    var vm = this
    wechat(undefined, () => { // 注册 JS SDK
      wx.onMenuShareTimeline({ // 朋友圈
          title: '标题', // 分享标题
          link: `${location.href.split('#')[0]}?path=${encodeURIComponent('/')}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `${location.origin}/static/logo.png`, // 分享图标
          success: function () {
            vm.$toast('分享成功!')
          }
      })
      wx.onMenuShareAppMessage({ // 发送给朋友
          title: '标题', // 分享标题
          link: `${location.href.split('#')[0]}?path=${encodeURIComponent('/')}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: `${location.origin}/static/logo.png`, // 分享图标
          success: function () {
            vm.$toast('分享成功!')
          }
      })
    })
  }
}
</script>

<style scoped></style>