import Vue from 'vue'

// 获取资源服务器的图片
import { IMGS_PREFIX, BASIC_CONFIG } from '@/setting'
Vue.filter('img', function (value, size) {
  if (typeof value !== 'string') {
    return value
  }

  if (
    /^http/.test(value.trim()) || // 绝对路径，不加前缀
    value.indexOf('data:image') !== -1 // base64
  ) {
    return value
  }
  return `${IMGS_PREFIX}/${value}`
})

import moment from 'moment'
Vue.filter('time', function (value, format = 'YYYY-MM-DD') {
  if (!value) {
    return ''
  }
  return moment(value).format(format)
})

// 距当前的时间
Vue.filter('diffNow', function (value, notShowDetail, format = 'YYYY-MM-DD') {
  if (!value) {
    return ''
  }
  var diff = (Date.now() - moment(value).valueOf()) / 1000 // 秒
  if (diff > 0) {
    if (diff < 60) {
      return '刚刚'
    } else if (diff < 3600) {
      return `${Math.floor(diff / 60)}分钟前`
    } else if (diff < 24 * 3600) {
      return `${Math.floor(diff / 3600)}小时前`
    } else if (diff < 7 * 24 * 3600) {
      return `${Math.floor(diff / (24 * 3600))}天前`
    } else {
      return notShowDetail ? '' : moment(value).format(format)
    }
  } else {
    console.error('非法时间')
    return '' // 非法时间
  }
})

Vue.filter('money', function (value) {
  if (value === null) {
    return 0
  }
  var res = value / 100
  return isNaN(res) ? '非法金额' : res
})

import * as dict from '@/dict'
Vue.filter('dict', function (value, key) {
  if (!dict[key]) {
    return `未知key: ${key}`
  }
  var res = dict[key].filter(item => item.id == value)[0]
  return res ? res.name : `未知id: ${value}`
})
