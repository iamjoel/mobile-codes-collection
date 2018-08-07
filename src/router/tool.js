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
  {
    path: `/${PREFIX}/browser-detect`,
    meta: {
      title: '浏览器&设备探测',
      activeTypeIndex: 3,
    },
    component: resolve => {
      lazyLoading(resolve, 'Browser-detect', false)
    },
  },
]

const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/tool/${name}${index ? '/Index' : ''}.vue`))
  })
}

export default routes
