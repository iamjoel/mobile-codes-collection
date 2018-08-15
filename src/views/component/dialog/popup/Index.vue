<template>
  <div class="main">
    <div class="demo__title">基础用法</div>
    <div class="p-10 b d-ib ml-15 mr-20" @click="isShow = true">弹出popup</div>
    <van-popup v-model="isShow">内容</van-popup>
    <div class="demo__title">弹出位置</div>
    <div class="p-10 b d-ib ml-15 mr-20 mb-20" @click="isShow1 = true">底部弹出</div>
    <div class="p-10 b d-ib ml-15 mr-20 mb-20" @click="isShow2 = true">顶部弹出</div>
    <div class="p-10 b d-ib ml-15 mr-20 mb-20" @click="isShow3 = true">右侧弹出</div>
    <div class="p-10 b d-ib ml-15 mr-20" @click="isShow4 = true">左侧弹出</div>
    <div class="p-10 b d-ib ml-15 mr-20 hv" @click="isShow5 = true">右侧全屏弹出</div>
    <van-popup v-model="isShow1" position="bottom">内容</van-popup>
    <van-popup v-model="isShow2" position="top">内容</van-popup>
    <van-popup v-model="isShow3" position="right">内容</van-popup>
    <van-popup v-model="isShow4" position="left">内容</van-popup>
    <div class="vh">
      <van-popup v-model="isShow5" position="right">内容</van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     isShow: false,
     isShow1: false,
     isShow2: false,
     isShow3: false,
     isShow4: false,
     isShow5: false,
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