var PREFIX = 'component'

// 路由配置
var routes = [
  {
    path: `/`,
    meta: {
      title: '首页',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'index')
    },
  },
  {
    path: `/${PREFIX}/common/button`,
    meta: {
      title: '按钮',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'common/Button', false)
    },
  },
  {
    path: `/${PREFIX}/common/tag`,
    meta: {
      title: '标签',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'common/Tag', false)
    },
  },
  {
    path: `/${PREFIX}/swipe`,
    meta: {
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'swipe/Normal', false)
    },
  },
  {
    path: `/${PREFIX}/swipe/vertical`,
    meta: {
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'swipe/vertical')
    },
  },
  {
    path: `/${PREFIX}/swipe/notice-bar`,
    meta: {
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'swipe/notice-bar')
    },
  },
  {
    path: `/${PREFIX}/classify-list`,
    meta: {
      title: '分类',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'classify-list')
    },
  },
  
 
  {
    path: `/${PREFIX}/media`,
    meta: {
      title: 'Media',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'Media', false)
    },
  },
  {
    path: `/${PREFIX}/form`,
    meta: {
      title: '表单',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'Form', false)
    },
  },
  {
    path: `/${PREFIX}/field`,
    meta: {
      title: '输入框',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'field')
    },
  },
  {
    path: `/${PREFIX}/radio`,
    meta: {
      title: '单选框',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'radio')
    },
  },
  {
    path: `/${PREFIX}/checkbox`,
    meta: {
      title: '复选框',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'checkbox')
    },
  },
  {
    path: `/${PREFIX}/switch`,
    meta: {
      title: '开关',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'switch')
    },
  },
  {
    path: `/${PREFIX}/select-radio`,
    meta: {
      title: '弹出层单选',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'select-radio')
    },
  },
  {
    path: `/${PREFIX}/select-checkbox`,
    meta: {
      title: '弹出层多选',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'select-checkbox')
    },
  },
  {
    path: `/${PREFIX}/datetimePicker`,
    meta: {
      title: '时间选择',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'datetimePicker')
    },
  },
  {
    path: `/${PREFIX}/uploader-single`,
    meta: {
      title: '单图片上传',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'uploader-single')
    },
  },
  {
    path: `/${PREFIX}/uploader-more`,
    meta: {
      title: '多图片上传',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'uploader-more')
    },
  },
  {
    path: `/${PREFIX}/form/slide`,
    meta: {
      title: '滑块(Slider)',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/Slide', false)
    },
  },
  {
    path: `/${PREFIX}/rate`,
    meta: {
      title: '评分',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'rate')
    },
  },
  {
    path: `/${PREFIX}/form/stop-multiple-submit`,
    meta: {
      title: '防止多次提交',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/Stop-multiple-submit', false)
    },
  },
  {
    path: `/${PREFIX}/calendar`,
    meta: {
      title: '日历',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'calendar')
    },
  },
  {
    path: `/${PREFIX}/list/infinate-load`,
    meta: {
      title: '列表无限加载',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/Infinate-load', false)
    },
  },
  {
    path: `/${PREFIX}/list/pagination`,
    meta: {
      title: '分页',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/Pagination', false)
    },
  },
  {
    path: `/${PREFIX}/list/no-data`,
    meta: {
      title: '列表无数据',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/No-data', false)
    },
  },
  {
    path: `/${PREFIX}/list/filter`,
    meta: {
      title: '列表搜索条件',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/filter')
    },
  },
  {
    path: `/${PREFIX}/list/pull-refresh`,
    meta: {
      title: '下拉刷新',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/PullRefresh', false)
    },
  },
  {
    path: `/${PREFIX}/list/hor-scroll`,
    meta: {
      title: '横向滚动',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/Hor-scroll', false)
    },
  },
  {
    path: `/${PREFIX}/tree-select`,
    meta: {
      title: '分类选择',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'TreeSelect', false)
    },
  },
  {
    path: `/${PREFIX}/img/lazyload`,
    meta: {
      title: '懒加载',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/Lazyload', false)
    },
  },
  {
    path: `/${PREFIX}/img/img-description`,
    meta: {
      title: '图片底部有描述文字',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/Img-description', false)
    },
  },
  {
    path: `/${PREFIX}/img/img-preview`,
    meta: {
      title: '图片预览',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/ImgPreview', false)
    },
  },
  {
    path: `/${PREFIX}/img/img-badge`,
    meta: {
      title: '角标',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/ImgBadge', false)
    },
  },
  {
    path: `/${PREFIX}/tool-tip`,
    meta: {
      title: '角标',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'tool-tip')
    },
  },
  {
    path: `/${PREFIX}/singer`,
    meta: {
      title: '歌手',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'singer')
    },
  },
  
  {
    path: `/${PREFIX}/map/:lng/:lat/:name/:address`,
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
    resolve(require(`@/views/component/${name}${index ? '/Index' : ''}.vue`));
  })
}

export default routes
