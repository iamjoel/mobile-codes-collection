<template>
  <div class="main">
    <van-swipe :autoplay="3000" style="height: 3rem;">
      <van-swipe-item v-for="i in 5" :key="i">
        <img
          :src="'http://via.placeholder.com/200x100?text=' + i"
          alt=""
          class="slide-img"
        />
      </van-swipe-item>
    </van-swipe>
    <div class="container">
      <h2 class="ly">
        <div class="t-ddd goods-name">商品名称</div>
        <div class="like-wrap">
          <van-icon
            :name="hasStar ? 'like' : 'like-o'"
            @click="toggleStarStatus"
          />
        </div>
      </h2>
      <div class="goods-price">
        ￥29.38
      </div>

      <van-tabs sticky :line-width="40">
        <van-tab title="详情">
          <div class="mv-20rem mh-10rem">
            商品介绍
          </div>
        </van-tab>
        <van-tab title="评价">
          <div class="review">
            <div class="review__item" v-for="i in 9" :key="i">
              <div class="ly">
                <img
                  class="review__avater"
                  :src="'http://via.placeholder.com/50x50?text=' + i"
                  alt=""
                />
                <div>
                  <div class="mv-10rem">用户{{ i }}</div>
                  <van-rate v-model="starNum" readonly></van-rate>
                </div>
              </div>
              <div class="review__detail">
                <div class="review__comment">
                  很赞，东西物美价廉。
                </div>
                <div class="ly review__imgs">
                  <img :src="'http://via.placeholder.com/50x50?text=' + j"
                  v-for="j in 7" class="review__img"">
                </div>
                <div class="review__time">
                  {{ new Date() | time('YYYY-MM-DD HH:mm:ss') }}
                </div>
                <div class="review__answer">
                  店家回复: xxxx
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat" @click="onClickMiniBtn">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="shop" @click="$toast('进入店铺')">
        店铺
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn
        icon="shopping-cart"
        @click="$router.push(`/page/mall/cart`)"
      >
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="showBase = true">
        加入购物车
      </van-goods-action-big-btn>
      <!-- <van-goods-action-big-btn @click="onClickMiniBtn" primary>
        立即购买
      </van-goods-action-big-btn> -->
    </van-goods-action>
    <van-sku
      v-model="showBase"
      :sku="sku"
      :goods="{
        title: '标题',
        picture: 'http://via.placeholder.com/50x50'
      }"
      :goodsId="'xxx'"
      @buy-clicked="handleBuyClicked"
      @add-cart="addToChart"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showBase: false,
      hasStar: false,
      starNum: 3,
      sku: {}
    }
  },
  methods: {
    fetchDetail () {},
    // 评价
    fetchReview () {},
    fetchStarStatus () {},
    fetchSku () {},
    toggleStarStatus () {},
    handleBuyClicked (itemInfo) {
      this.$toast('购买')
    },
    addToChart (itemInfo, isShowToast = true, cb) {
      this.$toast('已加入购物车')
    },
    onClickMiniBtn () {}
  },
  mounted () {
    this.fetchDetail()
    this.fetchSku()
  }
}
</script>

<style scoped>
h2 {
  position: relative;
  font-size: 18px;
  font-weight: bold;
  margin: 0.2rem 0.2rem 0.3rem 0.2rem;
  padding-right: 0.4rem;
}
.goods-name {
  width: 4rem;
}
.goods-price {
  margin-bottom: 10px;
  padding-right: 0.4rem;
  text-align: right;
  font-size: 18px;
  color: #f00;
}
.slide-img {
  width: 100%;
  height: 100%;
}
.like-wrap {
  position: absolute;
  right: 0;
  top: 0;
  color: #f00;
}
.img {
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.review {
  width: 6.2rem;
  margin: 0.2rem auto;
}
.review__item {
  margin-bottom: 0.2rem;
}
.review__avater {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin-right: 0.2rem;
}
.review__detail {
  margin-left: 1rem;
}
.review__imgs {
  flex-wrap: wrap;
}
.review__img {
  width: 1.55rem;
  height: 1.55rem;
  margin: 0.1rem 0.2rem 0.1rem 0;
}
.review__img:nth-child(3n) {
  margin-right: 0;
}
.review__comment {
  font-size: 16px;
  line-height: 1.5;
}
.review__time,
.review__answer {
  margin: 0.2rem 0;
  color: #666;
  line-height: 1.2;
}
</style>
