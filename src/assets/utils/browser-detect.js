// 参考 [JS判断浏览器语言及终端类型](http://blog.baiwand.com/?post=176)
var u = navigator.userAgent

export default {
  isIOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
  isAndroid: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
  isIPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
  isIPad: u.indexOf('iPad') > -1 //是否iPad
}
