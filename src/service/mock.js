import Mock from 'mockjs'
import {SERVER_PREFIX} from '@/setting'

var singerList = [{
  id: 1,
  name: '孙燕姿'
},{
  id: 2,
  name: '王菲'
},{
  id: 3,
  name: '任贤齐'
},]


Mock.mock(new RegExp(`${SERVER_PREFIX}/singer/list`), 'get', ({ url, body }) => {
  console.info(`Mock GET. URL: ${url}`)
  return {
    data: singerList,
    pager: {
      total: singerList.length,
    }
  }
})

Mock.mock(new RegExp(`${SERVER_PREFIX}/singer/add`), 'post', ({ url, body }) => {
  console.info(`Mock POST. URL: ${url}`)

  singerList.unshift(JSON.parse(body))
  return {
    data: singerList,
    pager: {
      total: singerList.length,
    }
  }
})

Mock.mock(new RegExp(`${SERVER_PREFIX}/singer/detail`), 'get', ({ url, body }) => {
  console.info(`Mock GET. URL: ${url}`)
  return {
    data: singerList[0],
  }
})

Mock.mock(new RegExp(`${SERVER_PREFIX}/singer/edit`), 'post', ({ url, body }) => {
  console.info(`Mock POST. URL: ${url}`)

  var data = JSON.parse(body)
  singerList = singerList.map(item => {
    if(item.id == data.id) {
      return {
        item,
        ...data
      }
    } else {
      return item
    }
  })
  return {
    data: singerList,
    pager: {
      total: singerList.length,
    }
  }
})


Mock.mock(new RegExp(`${SERVER_PREFIX}/singer/del`), 'post', ({ url, body }) => {
  console.info(`Mock POST. URL: ${url}`)

  var id = url.split('/').pop()
  singerList = singerList.filter(item => item.id != id)
  return {
    data: singerList,
    pager: {
      total: singerList.length,
    }
  }
})


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

// 报错
Mock.mock(new RegExp(`${SERVER_PREFIX}/error/list`), 'get', ({ url, body }) => {
  console.info(`Mock GET. URL: ${url}`)

  return {
    errorCode: -1,
    errorMessage: '获取列表错误！哈哈哈',
    data: []
  }
})