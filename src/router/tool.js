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
    path: `/${PREFIX}/axios/crud`,
    meta: {
      title: 'CRUD',
      activeTypeIndex: 3,
    },
    component: resolve => {
      lazyLoading(resolve, 'axios/CRUD', false)
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
  {
    path: `/${PREFIX}/data`,
    meta: {
      title: '数据获取',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'Data', false)
    },
  },
]

const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/tool/${name}${index ? '/Index' : ''}.vue`))
  })
}

export default routes
