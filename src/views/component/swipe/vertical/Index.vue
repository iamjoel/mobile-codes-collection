<template>
  <div class="main">
    <div class="ly notice">
      <i class="notice__icon"><img src="./images/notice.png" alt=""></i>
      <div class="notice__content">
        <van-swipe :autoplay="3000" :vertical="true" :show-indicators="false"  class="h-100per">
          <van-swipe-item v-for="item in 10" :key="item">
            用户<strong style="">138123456{{item}}</strong>进入聊天室
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>