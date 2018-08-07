var PREFIX = 'reset'
// 路由配置
var routes = [
  {
    path: `/${PREFIX}/index`,
    meta: {
      title: '组件重置',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'index')
    },
  },
  {
    path: `/${PREFIX}/tab`,
    meta: {
      title: '标签页',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'tab', false)
    },
  },
  {
    path: `/${PREFIX}/tabbar`,
    meta: {
      title: '底部导航',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'tabbar', false)
    },
  },
 
]



const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/reset/${name}${index ? '/Index' : ''}.vue`));
  })
}

export default routes
