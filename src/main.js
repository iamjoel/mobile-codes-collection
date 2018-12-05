require('@/assets/vendor/rem')

import Vue from 'vue'
Vue.config.productionTip = false

// 多语言
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh: {// 中文

    },
    en: {// 英文

    }
  }
})

// vant ui
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'
import { Lazyload, Toast, ImagePreview } from 'vant';
Vue.use(Vant)
// lazyLoad https://www.youzanyun.com/zanui/vant#/zh-CN/lazyload
Vue.use(Lazyload, {
  // loading: '', // 加载中的图片样式
  // error: '' // 加载完成的图片样式
})

import {IMGS_PREFIX} from '@/setting'
Vue.prototype.$imgPrefix = IMGS_PREFIX
Vue.prototype.$preview = url => {
  if(typeof url !== 'string' ) {
    return
  }
  if(!/^http/.test(url.trim())) {
    url = `${IMGS_PREFIX}/${url}`
  }
  ImagePreview([url])
}
// 图片尺寸验证
Vue.prototype.$valiFileSize = file => {
  var fileSize = file.size
  if(fileSize > 1024*1024*3) {
    Toast('图片大小不能超过3M');
    return false
  } else {
    return true
  }
}

Vue.prototype.$showLoading = () => {
  Toast.loading({
    duration: 0,       // 持续展示 toast
    forbidClick: true, // 禁用背景点击
    mask: true,
    loadingType: 'spinner',
    message: '加载中'
  })
}

Vue.prototype.$hideLoading = () => {
  Toast.clear()
}

import browserDetect from '@/assets/utils/browser-detect'
Vue.prototype.isIOS = browserDetect.isIOS
Vue.prototype.isAndroid = browserDetect.isAndroid

import axios from 'axios'
require('@/service/interceptor') // axios 拦截器，做通用报错等
Vue.prototype.$http = axios

require('@/filters')

import store from '@/store'

import router from './router'
router.afterEach((to,from,next) => { // 进入新页面时，页面总是滚动到顶部
  window.scrollTo(0,0);
})

import App from './App.vue'



var vm =  new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App },
  store
})

// 登录成功的跳转
Vue.prototype.$loginedJump = function(url) {
  var jumpUrl = this.$store.state.user.id ? url : '/login'
  this.$router.push(jumpUrl)
}.bind(vm)

