import Mock from 'mockjs'
import {SERVER_PREFIX} from '@/setting'

var singerList = ['孙燕姿','王菲','任贤齐','Coldplay','Lenka','陈粒','陈慧琳','陈小春','杜德伟','飞儿','My Little Airport','小刚','那英','Green Day','花粥',].map((item, i) => {
  return {
    id: i,
    name: item
  }
})


Mock.mock(new RegExp(`${SERVER_PREFIX}/singer/list`), 'get', ({ url, body }) => {
  console.info(`Mock GET. URL: ${url}`)
  var pageAt = 1
  var pageNum = 5
  try {
    pageAt = parseInt(/pageAt=(\d+)&/.exec(url)[1])
    pageNum = parseInt(/pageLimit=(\d+)/.exec(url)[1])
  } catch(e) {}
  var start = (pageAt - 1) * pageNum
  return {
    data: singerList.slice(start, start + pageNum),
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
  var index = parseInt(/detail\/(\d+)/.exec(url)[1])
  return {
    data: singerList[index],
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