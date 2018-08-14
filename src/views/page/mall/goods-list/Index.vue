<template>
  <div class="main">
    <div class="container">
      <van-row gutter="20" v-if="true">
        <van-col span="12" v-for="i in 10" :key="i">
          <div class="media"  @click="$router.push('/page/mall/goods-detail/' + i)">
            <img :src="'http://via.placeholder.com/100x100?text=' + i"  class="media__img"/>
            <div class="media__name">商品名称{{i}}</div>
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
  .media__img {
    height: 3rem;
  }
  .media__name {
    text-align: center;
    line-height: 1.5;
  }
</style>