var PREFIX = 'tool'
// 路由配置
var routes = [
  {
    path: `/${PREFIX}/index`,
    meta: {
      title: '工具',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'Index', false)
    },
  },
  {
    path: `/${PREFIX}/axios/crud`,
    meta: {
      title: 'CRUD',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'axios/CRUD', false)
    },
  },
  {
    path: `/${PREFIX}/axios/data`,
    meta: {
      title: '数据获取',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'axios/Data', false)
    },
  },
  {
    path: `/${PREFIX}/axios/customer-error-handler`,
    meta: {
      title: '自定义错误处理',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'axios/Customer-error-handler', false)
    },
  },
  {
    path: `/${PREFIX}/browser-detect`,
    meta: {
      title: '浏览器&设备探测',
      activeTypeIndex: 2,
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
