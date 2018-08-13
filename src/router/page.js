var PREFIX = 'page'
// 路由配置
var routes = [
  {
    path: `/${PREFIX}/index`,
    meta: {
      title: '页面',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'index')
    },
  },
  {
    path: `/${PREFIX}/ui`,
    meta: {
      title: 'UI规范',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'ui')
    },
  },
  {
    path: `/${PREFIX}/cart`,
    meta: {
      title: '购物车',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'cart')
    },
  },
  {
    path: `/${PREFIX}/common/member-center`,
    meta: {
      title: '个人中心',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'common/member-center')
    },
  },
  {
    path: `/${PREFIX}/common/register`,
    meta: {
      title: '注册',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'common/register')
    },
  },
  {
    path: `/${PREFIX}/common/login`,
    meta: {
      title: '登录',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'common/login')
    },
  },
 
]



const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/page/${name}${index ? '/Index' : ''}.vue`));
  })
}

export default routes
