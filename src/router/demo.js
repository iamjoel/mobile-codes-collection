export default [
  {
    path: '/media',
    meta: {
      title: 'Media',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'Media', false)
    },
  },
  {
    path: '/form',
    meta: {
      title: '表单',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'Form', false)
    },
  },
  {
    path: '/list/infinate-load',
    meta: {
      title: '列表无限加载',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/Infinate-load', false)
    },
  },
  {
    path: '/list/no-data',
    meta: {
      title: '列表无数据',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/No-data', false)
    },
  },
  {
    path: '/list/filter',
    meta: {
      title: '列表搜索条件',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/filter')
    },
  },
  {
    path: '/list/pull-refresh',
    meta: {
      title: '下拉刷新',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/PullRefresh', false)
    },
  },
  {
    path: '/list/hor-scroll',
    meta: {
      title: '横向滚动',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/Hor-scroll', false)
    },
  },
  {
    path: '/tree-select',
    meta: {
      title: '分类选择',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'TreeSelect', false)
    },
  },
  {
    path: '/img/lazyload',
    meta: {
      title: '懒加载',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/Lazyload', false)
    },
  },
  {
    path: '/img/img-preview',
    meta: {
      title: '图片预览',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/ImgPreview', false)
    },
  },
  {
    path: '/img/img-badge',
    meta: {
      title: '角标',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/ImgBadge', false)
    },
  },
  {
    path: '/singer',
    meta: {
      title: '歌手',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'singer')
    },
  },
  {
    path: '/data',
    meta: {
      title: '数据获取',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'Data', false)
    },
  },
  {
    path: '/map/:lng/:lat/:name/:address',
    meta: {
      title: '地图',
      activeTypeIndex: 1,
      isShowFooter: false,
    },
    component: resolve => {
      lazyLoading(resolve, 'map')
    },
  },
]

const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/${name}${index ? '/Index' : ''}.vue`));
  })
}