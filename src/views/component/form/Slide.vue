<template>
  <div class="main">
    <h1>需要安装 vue-slider-component</h1>
    <div class="demo__title">基础用法</div>
    <div class="ly ly-m p-20rem">
      音量值:
      <div style="flex-grow: 1">
         <vue-slider v-model="value1"></vue-slider>
      </div>
    </div>

    <div class="demo__title">范围</div>
    <div class="ly ly-m p-20rem">
      价格范围:
      <!-- 
        interval: 间距
        piecewise: 画价格点
       -->
      <div style="flex-grow: 1">
         <vue-slider 
          v-model="value2"
          :min="10"
          :max="100"
          :interval="10"
          piecewise
          ></vue-slider>
      </div>
    </div>
    
  </div>
</template>

<script>
// https://github.com/NightCatSama/vue-slider-component
import vueSlider from 'vue-slider-component'
export default {
  components: {
    vueSlider
  },
  data() {
    return {
      value1: 5,
      value2: [20, 50],
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>