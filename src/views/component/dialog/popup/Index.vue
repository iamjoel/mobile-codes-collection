<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">基础用法</div>
      <van-button @click="isShowBasicPopup = true" size="small">弹出popup</van-button>
      <van-popup v-model="isShowBasicPopup">内容</van-popup>
    </section>

    <section class="demo">
      <div class="demo__title">弹出位置</div>
      <van-button @click="isShowBottomPopup = true" size="small">底部弹出</van-button>
      <van-button @click="isShowTopPopup = true" size="small">顶部弹出</van-button>
      <van-button @click="isShowRightPopup = true" size="small">右侧弹出</van-button>
      <van-button @click="isShowLeftPopup = true" size="small">左侧弹出</van-button>
      <br>
      <van-button  @click="isShowRightFullPopup = true" size="small" class="mt-10rem">右侧全屏弹出</van-button>

      <van-popup v-model="isShowBottomPopup" position="bottom">内容</van-popup>
      <van-popup v-model="isShowTopPopup" position="top">内容</van-popup>
      <van-popup v-model="isShowRightPopup" position="right">内容</van-popup>
      <van-popup v-model="isShowLeftPopup" position="left">内容</van-popup>
      <div class="vh">
        <van-popup v-model="isShowRightFullPopup" position="right">
          
          内容
        </van-popup>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
     isShowBasicPopup: false,
     isShowBottomPopup: false,
     isShowTopPopup: false,
     isShowRightPopup: false,
     isShowLeftPopup: false,
     isShowRightFullPopup: false,
    }  
  },
  methods: {
    
  }
}
</script>

<style>
  .van-popup {
    padding: 20px;
  }
  .vh .van-popup {
    width: 100%;
    height: 100vh;
    padding: 0;
  }
</style>