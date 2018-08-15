# 移动端代码库
## 代码内容包括
* 组件(数量50+)
  * 轮播相关
    * Banner 轮播。 
    * 垂直轮播。 一般轮播文字，如购买信息，中奖信息。
    * 通告栏。 以水平跑马灯的形式展示。
  * 列表相关
    * 无限加载。 
    * 无限加载封装。 比调用无限加载组件更容易。 **未完成**
    * 分页。
    * 列表无数据。
    * 筛选条件。展现形式包括 底部弹出 和 tab 下部展开。
    * 下拉刷新。
    * 记住滚动位置。列表页，进入详情页，从详情页返回时，还是滚动到上次列表页查看的位置。 **未完成**
    * 横向滚动。
  * 表单
    * 综合。
    * 输入框&域。
    * 单选(Radio)。
    * 多选(Checkbox)。
    * 开关(Switch)。
    * 选择器(Picker)单选。 对应 PC的 Select。
    * 选择器(Picker)多选。
    * 日期&时间。
    * 单张图片上传。
    * 多张图片上传。
    * 滑块(Slider)。 用滑块选择范围。
    * 评分。
    * 防止多次提交。
  * 弹出框
    * 信息提示(Alert)。**未完成**
    * 信息确认(Confirm)。**未完成**
    * 自定义弹出内容。**未完成**
    * 弹出层(Popup)。**未完成**
  * 提示
    * 轻提示(Toast)。**未完成**
    * 加载中。**未完成**
    * ToolTip。
  * 图片
    * Media。
    * 图片底部有描述文字。
    * 懒加载。
    * 图片预览。
    * 角标。
    * 瀑布流。**未完成**
    * [上传图片压缩裁切。](https://www.jianshu.com/p/82dbf309f9b1)。类似微信的上传头像。 **未完成** 
  * 图标
    * Vant 图标。
    * 商城相关。**未完成**
  * 容器
    * 标签页(Tab)
    * 单元格(Cell)。**未完成**
    * 折叠面板(ollapse)。**未完成**
    * 底部导航。**未完成**
  * 地图
    * 导航。支持百度和腾讯地图。
    * 选地址。 支持腾讯地图。
    * 坐标转换服务。 需要用服务器做代理。
  * 数据可视化
    * 折线图。**未完成**
    * 柱状图。**未完成**
    * 饼图。**未完成**
  * 其他
    * 日历。
    * 分类选择。
* 页面(20+)
  * UI规范。 **待完善**
  * 通用页面
    * 个人中心。
    * 注册。
    * 登录。
  * 表单
    * 新增&编辑。
    * 新增实时保存。
    * 表单验证。
  * 商城相关
    * 商品列表。
    * 商品详情。
    * 订单列表。**未完成**
    * 支付成功&失败。
    * 订单评论。**未完成**
    * 购物车。
  * 文章&新闻
    * 列表。 **未完成**
    * 详情。 详情是富文本内容。**未完成**
  * 其他
    * 用户协议。**未完成**
    * 常见问题。**未完成**
    * 意见反馈。**未完成**
    * 朋友圈。**未完成**
* 工具(8)
  * axios
    * crud写法。
    * 数据获取。 列表获取，详情获取的封装。
    * 自定义处理报错。通过改响应数据来做到，不触发通用报错。
  * 微信相关
    * 获取用户信息。
    * 分享。
    * 支付。
  * 多语言
    * 多语言。
  * 工具
    * 终端探测。是 IOS 还是 Android。
* 文档

## 兼容手机测试
* iphone 6，7，8，x
* 华为，三星，小米，vivo，魅族，锤子。

## TODO
* 考虑加入 [飞冰](https://github.com/alibaba/ice/) 的一些组件。

## 运行
1 安装依赖：  

1. `npm install`

推荐用[Yarn](https://yarnpkg.com/en/docs/install):
1. 安装 [Yarn](https://yarnpkg.com/en/docs/install)。
1. `yarn install`。

2 启动 `npm run dev`

## 构建
1. `npm run build`
1. 打开 `dist` 下的 `index.html` 来查看效果。

## 项目结构
```
├── build 构建流程代码
├── config 构建相关的配置
├── dist 构建过上线的代码
├── src
│   ├── assets 
│   │   └── utils 工具方法
│   ├── components 组件
│   ├── mixin 一些组件的混入
│   ├── pages 页面
│   ├── router 路由
│   ├── service 与后端的交互。公共的放这，非公共放 views/具体页面 下。
│   ├── store 全局数据
│   ├── setting.js 业务相关的配置
│   ├── dict.js 字典。如性别之类的键值对。
│   ├── filters.js 全局过滤器
│   └── views 路由对应的视图
└── static 静态资源
```

## 路由配置
```
{
  path: 路由,
  meta: {
    title: 页面标题, 
    isShowFooter: false, // 是否显示底部的Tab。默认值是true
    activeTypeIndex: 1, // 需要高亮的底部Tab的下标。首页，分类，购物车，我的 对应 0，1，2，3
  },
  component: resolve => {
    lazyLoading(resolve, 在views下的木)
  },
}
```

## 约定
1 页面中的 `style` 默认要加 `scoped` 的属性。如
```
<style scoped>
.img {
  display: block;
  width: 3rem;
}
</style>
```

在当前页面重置第三方组件样式时，可以不加 `scoped`。需要在带去页面加唯一的类名。如:  

```
<template>
<div class="main some-page">
  <el-menu>...</el-menu>
</div>
</template>

<style>
.some-page .el-menu {
  border-radius: 0;
}
</style>
```

2 为每个页面建立一个目录。文件包括:
* `Index.vue` 
* `style.css` 可选。
* `main.js` 可选。
* `image/` 可选。放图片。

## 用的主要的框架
* [Vue](http://vuejs.org/) vue-router, vuex 等相关全家桶。
* [Vant UI](https://www.youzanyun.com/zanui/vant#/zh-CN/component/intro) 有赞出品的基于 Vue 的组件库。