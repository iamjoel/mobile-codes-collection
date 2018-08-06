# 移动端代码库
## 代码内容包括
* 页面
  * 个人中心。
  * 购物车。
  * 表单页。
* 组件
  * 轮播。 用 Vant 组件。
  * 跑马灯通知。 用 Vant 组件。
  * 列表相关
    * 无限加载。 用 Vant 组件。
    * 无限加载二次封装。
    * 下拉刷新。用 Vant 组件。
    * 列表无数据。
    * 筛选条件。
      * 底部弹出
      * tab 下部展开。
    * 横向滚动。
  * 图片
    * 懒加载。用 Vant 组件。
    * 图片预览。用 Vant 组件。
    * 角标。
  * 地图
    * 标点。支持百度和腾讯。
    * 跳转第三方地图的导航页。支持百度和腾讯。
  * 其他
    * Media。
    * 日历

### 待完善
* 首页搜索框，可以通过关键字来搜demo。
* 页面
  * 订单页
  * 订单的评论页
  * 用户协议。内容很多时，ios 滚动生涩的处理。
  * 朋友圈页面。
  * 表单页优化。
    * 新增时实时保存。
    * 多张图片的上传，展示，删除。
    * 验证的展示。
    * 防止多次点击。
    * 多选。
    * 图片上传，单图上传，多图上传。
* 组件
  * 轮播的二次封装。传入数组，高度，能跳转。
  * 评分组件。包括不能点击。
  * 图片
    * 瀑布流组件。
  * 地图
    * 通过地图点的。支持腾讯。百度地图官方不支持，可以腾讯的，把点的坐标转成百度的。
    * 标点，把 Google 的放过去。
* 组件重置
  * Vant 底部导航。自定义图标；中间带不一样的图标。
  * Vant 的个tab。2个tab，3个tab，4个tab。
* 工具
  * axios
    * crud写法
    * 通过改响应来做到，不触发通用报错。
  * 环境判断。 是微信，是安卓，是 iphone。
* 其他
  * Mock 数据集。
  * Media 里，border-radius 很小值的重置。还是放在组件里比较好。

## 兼容手机测试
* iphone 6，7，8，x
* 华为，三星，小米，vivo，魅族，锤子。

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