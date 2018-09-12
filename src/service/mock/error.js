import Mock from 'mockjs'
import {SERVER_PREFIX} from '@/setting'
// 报错
Mock.mock(new RegExp(`${SERVER_PREFIX}/error/list`), 'get', ({ url, body }) => {
  console.info(`Mock GET. URL: ${url}`)

  return {
    errorCode: -1,
    errorMessage: '获取列表错误！哈哈哈',
    data: []
  }
})