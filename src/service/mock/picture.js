import Mock from 'mockjs'
import {SERVER_PREFIX} from '@/setting'
import {Random} from 'mockjs'

// 图片上传
Mock.mock(new RegExp(`${SERVER_PREFIX}/picture/upload`), 'post', ({ url, body }) => {
  return {
    data: 'http://via.placeholder.com/100x100?text=' + Random.integer(1,100)
  }
})
