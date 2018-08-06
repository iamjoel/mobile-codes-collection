import Vue from 'vue'
import Router from 'vue-router'
import componentRouter from './component'
import resetRouter from './reset'
import pageRouter from './page'
import toolRouter from './tool'

Vue.use(Router)


export default new Router({
  routes: [
    ...componentRouter,
    ...resetRouter,
    ...pageRouter,
    ...toolRouter,
    // 出错的默认地址
    {
      path: '*',
      redirect: '/'
    }
  ]
})


