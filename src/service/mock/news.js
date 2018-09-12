import Mock from 'mockjs'
import {SERVER_PREFIX} from '@/setting'

var newsList = [{
  id: 1,
  logo: 'http://via.placeholder.com/100x100',
  title: '文章1'
},{
  id: 2,
  logo: 'http://via.placeholder.com/100x100',
  title: '文章2'
},{
  id: 3,
  logo: 'http://via.placeholder.com/100x100',
  title: '文章3'
},{
  id: 4,
  logo: 'http://via.placeholder.com/100x100',
  title: '文章4'
},]

Mock.mock(new RegExp(`${SERVER_PREFIX}/news/list`), 'get', ({ url, body }) => {
  console.info(`Mock GET. URL: ${url}`)
  return {
    data: newsList,
    pager: {
      total: newsList.length,
    }
  }
})

Mock.mock(new RegExp(`${SERVER_PREFIX}/news/detail`), 'get', ({ url, body }) => {
  console.info(`Mock GET. URL: ${url}`)
  return {
    data: {
      title: '文章标题xxxx',
      createTime: '2018/03/17 18:09:33',
      detail: '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容'
    },
    pager: {
      total: newsList.length,
    }
  }
})