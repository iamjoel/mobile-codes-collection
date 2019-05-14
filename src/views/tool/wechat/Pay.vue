<template>
  <div class="main m-20rem ta-c">
    <van-button type="primary" @click="createOrder">支付</van-button>
  </div>
</template>

<script>
import { addModel } from '@/service/api'
import { pay } from '@/assets/utils/wechat'

export default {
  data () {
    return {
      model: {
        // 下单需要的一些数据
        openid: this.$store.state.openid,
        goodsId: 'xxxx'
      }
    }
  },
  methods: {
    createOrder () {
      addModel('order', this.model).then(
        ({ data }) => {
          pay(
            {
              orderId: data.data.id,
              openid: this.$store.state.openid,
              productName: this.$route.params.name
            },
            () => {
              this.$toast('支付成功')
            },
            () => {
              this.$toast('支付失败')
            }
          )
        },
        () => {
          this.$toast('生成订单失败!')
        }
      )
    }
  }
}
</script>

<style scoped></style>
