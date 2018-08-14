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
  return {
    data: singerList,
    pager: {
      total: singerList.length,
    }
  }
})

Mock.mock(new RegExp(`${SERVER_PREFIX}/singer/add`), 'post', ({ url, body }) => {
  singerList.unshift(JSON.parse(body))
  return {
    data: singerList,
    pager: {
      total: singerList.length,
    }
  }
})

Mock.mock(new RegExp(`${SERVER_PREFIX}/singer/edit`), 'post', ({ url, body }) => {
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
  var id = url.split('/').pop()
  singerList = singerList.filter(item => item.id != id)
  return {
    data: singerList,
    pager: {
      total: singerList.length,
    }
  }
})

// 报错
Mock.mock(new RegExp(`${SERVER_PREFIX}/error/list`), 'get', ({ url, body }) => {
  return {
    errorCode: -1,
    errorMessage: '获取列表错误！哈哈哈',
    data: []
  }
})