import Mock from 'mockjs'
import {SERVER_PREFIX} from '@/setting'

var userInfos = new Array(6).fill(1).map((item, index)=> {
  return {
    name: Mock.Random.cname(),
    openid: index,
    avatar: `http://via.placeholder.com/100x100?text=${Mock.Random.integer(1,6)}`,
  }
})

var imgs = new Array(9).fill(1).map((item, index)=> {
  return `http://via.placeholder.com/100x100?text=${index + 1}`
})

var list = new Array(6).fill(1).map((item, index)=> {
  return {
    userInfo: userInfos[Mock.Random.integer(0, userInfos.length - 1)],
    content: Mock.Random.cparagraph(1, 5),
    imgs: imgs.slice(0, Mock.Random.integer(0, imgs.length - 1)).join(','),
    createTime: new Date()
  }
})

Mock.mock(new RegExp(`${SERVER_PREFIX}/community/list`), 'get', ({ url, body }) => {
  console.info(`Mock GET. URL: ${url}`)
  var pageAt = 1
  var pageNum = 5
  try {
    pageAt = parseInt(/pageAt=(\d+)&/.exec(url)[1])
    pageNum = parseInt(/pageLimit=(\d+)/.exec(url)[1])
  } catch(e) {}
  var start = (pageAt - 1) * pageNum
  return {
    data: list.slice(start, start + pageNum),
    pager: {
      total: list.length,
    }
  }
})

Mock.mock(new RegExp(`${SERVER_PREFIX}/community/add`), 'post', ({ url, body }) => {
  console.info(`Mock POST. URL: ${url}`)
  var {openid, content, imgs }  = JSON.parse(body)
  var userInfo = userInfos.filter(item => item.openid === openid)[0]


  list.unshift({
    userInfo: {...userInfo},
    content: content,
    imgs: imgs,
    createTime: createTime
  })
  return {
    
  }
})


