import {addModel} from '@/service/api'

export default {
  data() {
    return {
      model: {
        openid: this.$store.state.openid,
        from: this.$route.params.type,
        detail: '',
      }
    }  
  },
  methods: {
    save() {
      this.$toast('提交反馈成功')
      return
      addModel('feedback', this.model).then(({data}) => {
        this.$toast('提交反馈成功')
        this.$router.go(-1)
      })
    },
  },
}