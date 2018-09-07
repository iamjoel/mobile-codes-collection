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
    path: `/${PREFIX}/async/promise`,
    meta: {
      title: 'Promise',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'async/Promise', false)
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
    path: `/${PREFIX}/i18n`,
    meta: {
      title: '多语言',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'I18n', false)
    },
  },
  {
    path: `/${PREFIX}/wechat/fetch-user-info`,
    meta: {
      title: '获取用户信息',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'wechat/Fetch-user-info', false)
    },
  },
  {
    path: `/${PREFIX}/wechat/share`,
    meta: {
      title: '微信分享',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'wechat/Share', false)
    },
  },
  {
    path: `/${PREFIX}/wechat/pay`,
    meta: {
      title: '微信支付',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'wechat/Pay', false)
    },
  },
  {
    path: `/${PREFIX}/other/time`,
    meta: {
      title: '时间',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'other/Time', false)
    },
  },
  {
    path: `/${PREFIX}/other/img`,
    meta: {
      title: '图片资源',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'other/img')
    },
  },
  {
    path: `/${PREFIX}/other/browser-detect`,
    meta: {
      title: '浏览器&设备探测',
      activeTypeIndex: 2,
    },
    component: resolve => {
      lazyLoading(resolve, 'other/Browser-detect', false)
    },
  },
  
]

const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/tool/${name}${index ? '/Index' : ''}.vue`))
  })
}

export default routes
