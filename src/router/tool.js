var PREFIX = 'tool'
// 路由配置
var routes = [
  {
    path: `/${PREFIX}/index`,
    meta: {
      title: '工具和其他',
      activeTypeIndex: 3,
    },
    component: resolve => {
      lazyLoading(resolve, 'Index', false)
    },
  },
]

const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/tool/${name}${index ? '/Index' : ''}.vue`))
  })
}

export default routes
