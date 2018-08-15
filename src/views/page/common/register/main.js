import {urls} from '@/setting'
import * as types from '@/store/mutation-types'

const COUNT_DOWN_NUM = 60
export default {
  data() {
    return {
      isAgree: true,
      model: {
        openid: this.$store.state.openid,
        tel: null,
        code: null,
        codeId: null 
      },
      hasSend: false,
      countDown: COUNT_DOWN_NUM,
      isShowArgument: false
    }
  },
  methods: {
    register() {
      if(!this.isAgree) {
        this.$toast('请阅读并同意《用户协议》内容')
      } else {
        if(this.isValid()) {
          this.$toast('注册成功')
          return // test
          this.$http.post(urls.register, this.model).then(({data}) => {
            this.$toast('注册成功')
            this.$store.commit(types.USER_INFO, {
              ...this.$store.state.user,
              isComplete: 1
            })
            localStorage.removeItem('j-care-service-oreder')
            localStorage.removeItem('j-package-service-oreder')

            this.$router.push(this.$route.params.from)
          })
        }
      }
    },
    isValid() {
      var errMsg = false
      let model = this.model
      if(!this.checkPhone(model.tel)) {
        errMsg = '请输入合法的手机号'
      } else if(!model.code) {
        errMsg = '请输入验证码'
      }
      if(errMsg) {
        this.$toast(errMsg)
        return false
      } else {
        return true
      }
    },
    checkPhone() {
      let model = this.model
      if(!model.tel || !/^\d{11}$/.test(model.tel)) {
        return false
      } else {
        return true
      }
    },
    send() {
      if(!this.checkPhone()) {
        this.$toast('请输入合法的手机号')
        return
      }
      this.hasSend = true
      var countDownId = setInterval(() => {
        if(this.countDown <= 1) {
          clearInterval(countDownId)
          this.hasSend = false
          this.countDown = COUNT_DOWN_NUM
        } else {
          this.countDown--
        }
      }, 1000)
      this.$toast('已发送')
      // this.$http.get(urls.getValidCode, {
      //   params: {
      //     tel: this.model.tel,
      //     openid: this.$store.state.openid,
      //   }
      // }).then(({data}) => {
      //   this.$toast('已发送')
      //   this.model.codeId = data.data
      // })
      
    }
  }
}