import Vue from 'vue'
import Router from 'vue-router'
import componentRouter from './component'
import resetRouter from './reset'
import pageRouter from './page'

Vue.use(Router)


export default new Router({
  routes: [
    ...componentRouter,
    ...resetRouter,
    ...pageRouter,
    {
      path: `/doc`,
      component: resolve => {
        require.ensure([], function(require) {
          resolve(require(`@/views/doc/Index.vue`));
        })
      },
    },
    // 出错的默认地址
    {
      path: '*',
      redirect: '/'
    }
  ]
})


