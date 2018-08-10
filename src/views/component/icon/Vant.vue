<template>
  <div class="main">
    <div class="demo__title">图标列表</div>
    <van-row>
      <van-col span="8" v-for="icon in icons" :key="icon">
        <van-icon :name="icon" />
        <span>{{ icon }}</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
var icons = [
    'close',
    'upgrade',
    'add-o',
    'passed',
    'chat',
    'question',
    'clock',
    'gold-coin',
    'play',
    'pause',
    'stop',
    'more-o',
    'info-o',
    'share',
    'like-o',
    'logistics',
    'edit',
    'exchange',
    'location',
    'cart',
    'shop',
    'gift',
    'contact',
    'wap-home',
    'points',
    'discount',
    'point-gift',
    'after-sale',
    'edit-data',
    'delete',
    'records',
    'completed',
    'certificate',
    'tosend',
    'sign',
    'photo',
    'idcard',
    'home',
    'free-postage',
    'cash-back-record',
    'points-mall',
    'exchange-record',
    'pending-payment',
    'pending-orders',
    'pending-deliver',
    'pending-evaluate',
    'password-view',
    'password-not-view',
    'check',
    'arrow',
    'arrow-left',
    'search',
    'success',
    'fail',
    'add',
    'checked',
    'warn',
    'clear',
    'underway',
    'more',
    'like',
    'photograph',
    'qr-invalid',
    'qr',
    'add2',
    'wechat',
    'alipay',
    'wap-nav',
    'ecard-pay',
    'balance-pay',
    'peer-pay',
    'credit-pay',
    'debit-pay',
    'other-pay',
    'shopping-cart',
    'browsing-history',
    'goods-collect',
    'shop-collect',
    'receive-gift',
    'send-gift',
    'setting',
    'coupon',
    'gift-card-pay',
    'cash-on-deliver',
    'phone',
    'description',
    'card',
    'value-card',
    'gift-card',
    'hot',
    'new',
    'new-arrival',
    'hot-sale',
]
export default {
  data() {
    return {
      icons
    }  
  }
}
</script>

<style scoped>
  .main i{
    display: block;
    margin-bottom: .1rem;
    font-size: 28px;
  }
  .van-col--8 {
    margin-bottom: .2rem;
    text-align: center;
  }
</style>