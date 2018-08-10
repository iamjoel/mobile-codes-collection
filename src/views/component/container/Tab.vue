<template>
  <div class="main">
    <div class="demo__title">基本用法</div>
    <van-tabs>
      <van-tab title="选项1">
        内容1
      </van-tab>
      <van-tab title="选项2">
        内容2
      </van-tab>
      <van-tab title="选项3">
        内容3
      </van-tab>
    </van-tabs>

    <div class="demo__title">控制底部条宽度</div>
    <van-tabs :line-width="30">
      <van-tab title="选项1">
        内容1
      </van-tab>
      <van-tab title="选项2">
        内容2
      </van-tab>
      <van-tab title="选项3">
        内容3
      </van-tab>
    </van-tabs>
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