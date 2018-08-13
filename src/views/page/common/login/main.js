import {urls} from '@/setting'

export default {
  data() {
    return {
      model: {
        tel: null,
        password: null,
      },
    }
  },
  methods: {
    login() {
      this.$toast('登录')
    },
    isValid() {
      var errMsg = false
      let model = this.model
      if(!this.checkPhone(model.tel)) {
        errMsg = '请输入合法的手机号'
      } else if(!model.password) {
        errMsg = '请输入密码'
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
   
  }
}