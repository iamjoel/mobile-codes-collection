import Vue from 'vue'
import Router from 'vue-router'
import componentRouter from './component'
import pageRouter from './page'
import toolRouter from './tool'

Vue.use(Router)


export default new Router({
  routes: [
    ...componentRouter,
    ...pageRouter,
    ...toolRouter,
    {
      path: `/doc`,
      meta: {
        title: '文档',
        activeTypeIndex: 3,
      },
      component: resolve => {
        lazyLoading(resolve, 'doc/Index', false)
      },
    },
    // 出错的默认地址
    {
      path: '*',
      redirect: '/'
    }
  ]
})

const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/${name}${index ? '/Index' : ''}.vue`));
  })
}


