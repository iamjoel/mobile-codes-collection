<template>
  <div class="main">
    <div class="demo-block">
      <div class="demo__title">基础用法</div>
      <van-rate v-model="value" />
    </div>
    <div class="demo-block">
      <div class="demo__title">禁用状态</div>
      <van-rate v-model="value"  disabled/>
    </div>
    <div class="demo-block">
      <div class="demo__title">禁用状态自定义颜色</div>
      <div class="custom">
        <van-rate v-model="value"  disabled/>
      </div>
    </div>
    <div class="demo-block">
      <div class="demo__title">自定义颜色</div>
      <van-rate
        v-model="value"
        :size="25"
        :count="6"
        color="#2ba"
        void-color="#ceefe8"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3
    }  
  },
  methods: {
    
  }
}
</script>

<style>
  .custom .van-rate__item {
    fill: #f00;
  }
</style>