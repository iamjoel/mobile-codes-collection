var PREFIX = 'page'
// 路由配置
var routes = [
  {
    path: `/${PREFIX}/index`,
    meta: {
      title: '页面',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'index')
    },
  },
  {
    path: `/${PREFIX}/ui`,
    meta: {
      title: 'UI规范',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'ui')
    },
  },
  {
    path: `/${PREFIX}/cart`,
    meta: {
      title: '购物车',
      activeTypeIndex: 2,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'cart')
    },
  },
  {
    path: `/${PREFIX}/member-center`,
    meta: {
      title: '个人中心',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'member-center')
    },
  },
 
]



const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/page/${name}${index ? '/Index' : ''}.vue`));
  })
}

export default routes
