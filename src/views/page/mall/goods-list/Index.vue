<template>
  <div class="main">
    <div class="ph-10">
      <van-row gutter="10" v-if="true">
        <van-col span="12" v-for="i in 10" :key="i">
          <div class="goods"  @click="$router.push('/page/mall/goods-detail/' + i)">
            <img :src="'http://via.placeholder.com/100x100?text=' + i"  class="goods__img"/>
            <div class="goods__info">
              <div class="goods__name">商品{{i}}</div>
              <div class="goods__price">￥<strong>25.6</strong></div>
            </div>
          </div>
        </van-col>
      </van-row>
      <div v-if="!isLoading && false" class="">暂无数据</div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false
    }  
  },
  methods: {
    

  },
  mounted() {
  }
}
</script>

<style scoped>
  .goods__img {
    width: 100%;
    height: 3rem;
  }
  .goods__info {
    line-height: 1.5;
    margin-bottom: .2rem;
  }
  .goods__price {
    font-family: arial;
    font-size: 16px;
    color: #f00;
  }
  .goods__price strong{
    font-size: 20px;
    font-weight: bold;
  }


</style>