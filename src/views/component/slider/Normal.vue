<template>
  <div class="main">
    <div class="swipe mb-10rem">
      <van-swipe :autoplay="3000" class="h-100per ta-c">
        <van-swipe-item v-for="i in 5" :key="i">
          <img class="img" src="/static/demo/2.jpeg"/>
        </van-swipe-item>
      </van-swipe>
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

<style scoped>
.swipe {
  height: 3rem;
}
.swipe .img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>