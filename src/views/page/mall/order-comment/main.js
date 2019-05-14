import { addModel } from '@/service/api'
export default {
  data () {
    return {
      model: {
        orderId: this.$route.params.id,
        reviewId: this.$store.state.openid,
        orderType: this.$route.params.orderType,
        star: 5,
        detail: null
      }
    }
  },
  methods: {
    comment () {
      this.$toast('评价成功！')
      return
      addModel('review', this.model).then(() => {
        this.$toast('评价成功')
        this.$router.go(-1)
      })
    }
  }
}
