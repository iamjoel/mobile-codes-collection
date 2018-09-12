import Mock from 'mockjs'

// 为了有Loading 的感觉。设置被拦截的 Ajax 请求的响应时间，单位是毫秒。
Mock.setup({
  timeout: 400
})

require('./singer')
require('./news')
require('./picture')
require('./community') // 朋友圈
require('./error')