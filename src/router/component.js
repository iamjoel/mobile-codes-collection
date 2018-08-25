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
      title: 'Banner轮播',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'swipe/Normal', false)
    },
  },
  {
    path: `/${PREFIX}/swipe/vertical`,
    meta: {
      title: '垂直轮播',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'swipe/vertical')
    },
  },
  {
    path: `/${PREFIX}/swipe/notice-bar`,
    meta: {
      title: '通告栏',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'swipe/notice-bar')
    },
  },
  {
    path: `/${PREFIX}/container/tab`,
    meta: {
      title: 'Tab 标签页',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'container/Tab', false)
    },
  },
  {
    path: `/${PREFIX}/container/cell`,
    meta: {
      title: 'Cell 单元格',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'container/Cell', false)
    },
  },
  {
    path: `/${PREFIX}/container/collapse`,
    meta: {
      title: '折叠面板',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'container/Collapse', false)
    },
  },
  {
    path: `/${PREFIX}/container/tabbar`,
    meta: {
      title: '底部导航',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'container/Tabbar', false)
    },
  },

  {
    path: `/${PREFIX}/form/form`,
    meta: {
      title: '表单',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/Form', false)
    },
  },
  {
    path: `/${PREFIX}/form/field`,
    meta: {
      title: '输入框',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/field')
    },
  },
  {
    path: `/${PREFIX}/form/radio`,
    meta: {
      title: '单选框',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/radio')
    },
  },
  {
    path: `/${PREFIX}/form/checkbox`,
    meta: {
      title: '复选框',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/checkbox')
    },
  },
  {
    path: `/${PREFIX}/form/switch`,
    meta: {
      title: '开关',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/switch')
    },
  },
  {
    path: `/${PREFIX}/form/select-radio`,
    meta: {
      title: '选择器(Picker)单选',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/select-radio')
    },
  },
  {
    path: `/${PREFIX}/form/select-checkbox`,
    meta: {
      title: '选择器(Picker)多选',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/select-checkbox')
    },
  },
  {
    path: `/${PREFIX}/form/datetimePicker`,
    meta: {
      title: '日期&时间',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/datetimePicker')
    },
  },
  {
    path: `/${PREFIX}/form/calendar`,
    meta: {
      title: '日历',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/calendar')
    },
  },
  {
    path: `/${PREFIX}/form/uploader-single`,
    meta: {
      title: '单图片上传',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/uploader-single')
    },
  },
  {
    path: `/${PREFIX}/form/uploader-more`,
    meta: {
      title: '多图片上传',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/uploader-more')
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
    path: `/${PREFIX}/form/rate`,
    meta: {
      title: '评分',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/rate')
    },
  },
  {
    path: `/${PREFIX}/form/tree-select`,
    meta: {
      title: '树形分类选择(TreeSelect)',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'form/TreeSelect', false)
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
    path: `/${PREFIX}/dialog/alert`,
    meta: {
      title: '信息提示',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'dialog/alert')
    },
  },
  {
    path: `/${PREFIX}/dialog/confirm`,
    meta: {
      title: '信息确认',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'dialog/confirm')
    },
  },
  {
    path: `/${PREFIX}/dialog/dialog`,
    meta: {
      title: '自定义弹出内容',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'dialog/dialog')
    },
  },
  {
    path: `/${PREFIX}/dialog/popup`,
    meta: {
      title: '弹出层',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'dialog/popup')
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
    path: `/${PREFIX}/list/infinate-load-wrap`,
    meta: {
      title: '列表无限加载封装',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/Infinate-load-wrap', false)
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
    path: `/${PREFIX}/list/remember-scroll-pos`,
    meta: {
      title: '记住滚动位置',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'list/Remember-scroll-pos', false)
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
    path: `/${PREFIX}/img/media`,
    meta: {
      title: 'Media',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/Media', false)
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
    path: `/${PREFIX}/img/brick`,
    meta: {
      title: '瀑布流',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'img/Brick', false)
    },
  },
  {
    path: `/${PREFIX}/icon/vant`,
    meta: {
      title: 'Vant 图标',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'icon/Vant', false)
    },
  },
  {
    path: `/${PREFIX}/toast/toast`,
    meta: {
      title: '轻提示',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'toast/toast')
    },
  },
  {
    path: `/${PREFIX}/toast/toast-loading`,
    meta: {
      title: '加载中',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'toast/toast-loading')
    },
  },
  {
    path: `/${PREFIX}/toast/tool-tip`,
    meta: {
      title: '角标',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'toast/tool-tip')
    },
  },
  {
    path: `/${PREFIX}/map/:lng/:lat/:name/:address`,
    meta: {
      title: '地图',
      activeTypeIndex: 0,
      isShowFooter: false,
    },
    component: resolve => {
      lazyLoading(resolve, 'map/Navigator', false)
    },
  },
  {
    path: `/${PREFIX}/map/choose-loc`,
    meta: {
      title: '地图',
      activeTypeIndex: 0,
      isShowFooter: false,
    },
    component: resolve => {
      lazyLoading(resolve, 'map/Choose-loc', false)
    },
  },
  {
    path: `/${PREFIX}/map/convert`,
    meta: {
      title: '坐标转换服务',
      activeTypeIndex: 0,
      isShowFooter: false,
    },
    component: resolve => {
      lazyLoading(resolve, 'map/Convert', false)
    },
  },
  {
    path: `/${PREFIX}/chart/line`,
    meta: {
      title: '折线图',
      activeTypeIndex: 0,
      isShowFooter: false,
    },
    component: resolve => {
      lazyLoading(resolve, 'chart/line')
    },
  },
  {
    path: `/${PREFIX}/chart/bar`,
    meta: {
      title: '柱状图',
      activeTypeIndex: 0,
      isShowFooter: false,
    },
    component: resolve => {
      lazyLoading(resolve, 'chart/bar')
    },
  },
  {
    path: `/${PREFIX}/chart/pie`,
    meta: {
      title: '饼图',
      activeTypeIndex: 0,
      isShowFooter: false,
    },
    component: resolve => {
      lazyLoading(resolve, 'chart/pie')
    },
  },
]



const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/component/${name}${index ? '/Index' : ''}.vue`));
  })
}

export default routes
