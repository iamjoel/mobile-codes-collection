var PREFIX = 'page'
// 路由配置
var routes = [
  {
    path: `/${PREFIX}/index`,
    meta: {
      title: '页面',
      activeTypeIndex: 1
    },
    component: resolve => {
      lazyLoading(resolve, 'index')
    }
  },
  {
    path: `/${PREFIX}/ui`,
    meta: {
      title: 'UI规范',
      activeTypeIndex: 1
    },
    component: resolve => {
      lazyLoading(resolve, 'ui')
    }
  },

  {
    path: `/${PREFIX}/common/register`,
    meta: {
      title: '注册',
      activeTypeIndex: 1
    },
    component: resolve => {
      lazyLoading(resolve, 'common/register')
    }
  },
  {
    path: `/${PREFIX}/common/login`,
    meta: {
      title: '登录',
      activeTypeIndex: 1
    },
    component: resolve => {
      lazyLoading(resolve, 'common/login')
    }
  },

  {
    path: `/${PREFIX}/common/member-center`,
    meta: {
      title: '个人中心',
      activeTypeIndex: 1
    },
    component: resolve => {
      lazyLoading(resolve, 'common/member-center')
    }
  },

  {
    path: `/${PREFIX}/form/add-and-edit`,
    meta: {
      title: '新增&编辑',
      activeTypeIndex: 1
    },
    component: resolve => {
      lazyLoading(resolve, 'form/add-and-edit')
    }
  },
  {
    path: `/${PREFIX}/form/realtime-save`,
    meta: {
      title: '新增实时保存',
      activeTypeIndex: 1
    },
    component: resolve => {
      lazyLoading(resolve, 'form/realtime-save')
    }
  },
  {
    path: `/${PREFIX}/form/valid`,
    meta: {
      title: '表单验证',
      activeTypeIndex: 1
    },
    component: resolve => {
      lazyLoading(resolve, 'form/valid')
    }
  },
  {
    path: `/${PREFIX}/mall/goods-list`,
    meta: {
      title: '商品列表',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'mall/goods-list')
    }
  },
  {
    path: `/${PREFIX}/mall/goods-detail/:id`,
    meta: {
      title: '商品详情',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'mall/goods-detail')
    }
  },
  {
    path: `/${PREFIX}/mall/order-list`,
    meta: {
      title: '订单列表',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'mall/order-list')
    }
  },
  {
    path: `/${PREFIX}/mall/order-comment/:orderId`,
    meta: {
      title: '订单评价',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'mall/order-comment')
    }
  },
  {
    path: `/${PREFIX}/mall/result/:type/:code`,
    meta: {
      title: '支付成功&失败',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'mall/order-result')
    }
  },
  {
    path: `/${PREFIX}/mall/address`,
    meta: {
      title: '管理收货地址',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'mall/address')
    }
  },
  {
    path: `/${PREFIX}/mall/cart`,
    meta: {
      title: '购物车',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'mall/cart')
    }
  },
  {
    path: `/${PREFIX}/mall/integral-record`,
    meta: {
      title: '积分记录',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'mall/integral-record')
    }
  },
  {
    path: `/${PREFIX}/mall/my-commission`,
    meta: {
      title: '我的佣金',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'mall/my-commission')
    }
  },
  {
    path: `/${PREFIX}/mall/contact-service`,
    meta: {
      title: '联系客服',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'mall/contact-service')
    }
  },
  {
    path: `/${PREFIX}/seller/report/order`,
    meta: {
      title: '订单报表',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'seller/report/order')
    }
  },

  {
    path: `/${PREFIX}/article/list`,
    meta: {
      title: '文章列表',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'article/list')
    }
  },
  {
    path: `/${PREFIX}/article/detail/:id`,
    meta: {
      title: '文章详情',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'article/detail')
    }
  },

  {
    path: `/${PREFIX}/other/argument`,
    meta: {
      title: '',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'other/argument/User', false)
    }
  },
  {
    path: `/${PREFIX}/other/faq`,
    meta: {
      title: '',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'other/faq')
    }
  },
  {
    path: `/${PREFIX}/other/feedback`,
    meta: {
      title: '',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'other/feedback')
    }
  },
  {
    path: `/${PREFIX}/other/community`,
    meta: {
      title: '',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'other/community/list')
    }
  },
  {
    path: `/${PREFIX}/other/community/create`,
    meta: {
      title: '',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'other/community/create')
    }
  },
  {
    path: `/${PREFIX}/other/todomvc`,
    meta: {
      title: '代办事宜',
      activeTypeIndex: 1,
      isShowFooter: false
    },
    component: resolve => {
      lazyLoading(resolve, 'other/todomvc')
    }
  }
]

const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function (require) {
    resolve(require(`@/views/page/${name}${index ? '/Index' : ''}.vue`))
  })
}

export default routes
