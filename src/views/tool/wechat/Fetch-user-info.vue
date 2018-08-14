<template>
  <div class="main">
  </div>
</template>

<script>
import {urls, shareURLTemplate} from '@/setting'
import * as types from '@/store/mutation-types'

export default {
  data() {
    return {

    }  
  },
  methods: {
    fetchUserInfo(openid) {
      this.$http.get(`${urls.wechat.userInfo}/${openid}`).then(({data}) => {
        data = data.data
        this.$store.commit(types.USER_INFO, data)
        this.$hideLoading()
      }, (errorCode)=> {
        if(errorCode == 111) {
          this.$router.push('/follow') // 未关注公众号
        }
        this.$hideLoading()
      })
    },
    fetchOpenId(code) {
      if(!code) { // 本地没有 code
        return new Promise((resolve, reject) => {
          reject()
        })
      } else {
        return new Promise((resolve, reject) => {
          this.$http.get(urls.wechat.getOpenid + '/' + code).then(({data})=> {
            resolve(data.data)
          }, (errorCode)=> {
            if(errorCode == 111) {
              this.$router.push('/follow') // 未关注公众号
            }
            reject()
          })
        })
      }
    }
  },
  created() {
    var vm = this
    this.$showLoading()
    var queryObject = getQueryObject()
    var code = queryObject.code
    if(code) {
      // 微信是 redirectUrl 上不支持 hash。
      if(queryObject.state && queryObject.state != 'STATE') {
        this.$router.push(queryObject.state)
      }
      this.fetchOpenId(code).then((data) => { // 把用户信息也返回了
        vm.$store.commit(types.OPENID, data.openid)
        vm.$store.commit(types.USER_INFO, data)
        vm.$hideLoading()
      }, )
    } else {
      // 从分享进来的。
      if(process.env.NODE_ENV !== 'development') {
        let jumpUrl = shareURLTemplate.replace('STATE',  queryObject.path ? queryObject.path : '')
        location.href = jumpUrl
        return
      } else { // 测试环境
        var openid = 'xxxxxxxx' // 测试openid
        vm.$store.commit(types.OPENID, openid)
        vm.fetchUserInfo(openid)
      }
      
    }
    
  }
}

function getQueryObject(url) {
    url = url == null ? window.location.href : url;
    var search = url.substring(url.lastIndexOf("?") + 1);
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, function (rs, $1, $2) {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);
        val = String(val);
        obj[name] = val;
        return rs;
    });
    return obj;
}
</script>

<style scoped></style>