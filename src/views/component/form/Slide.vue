<template>
  <div class="main">
    <h1 class="ff-yahei">van-slider</h1>
    <section class="demo">
      <h2 class="demo__title">基础用法</h2>
      <div class="mv-10">van-slider 只支持选择范围为：0~100</div>
      <van-slider v-model="slideValue" :min="10" :max="90" :step="5" />
      <div class="mv-10">当前值: {{ slideValue }}</div>
    </section>
    <h1 class="ff-yahei" style="margin-top: 50px;">vue-slider-component</h1>
    <div class="m-20">vue-slider-component 支持更多的功能</div>
    <section class="demo">
      <h2 class="demo__title">基础用法</h2>
      <div class="ly ly-m p-20rem">
        音量值:
        <div style="flex-grow: 1">
          <vue-slider v-model="value1"></vue-slider>
        </div>
      </div>
    </section>

    <section class="demo">
      <h2 class="demo__title">范围</h2>
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
    </section>
  </div>
</template>

<script>
// https://github.com/NightCatSama/vue-slider-component
import vueSlider from 'vue-slider-component'
export default {
  components: {
    vueSlider
  },
  data () {
    return {
      slideValue: 20,
      value1: 5,
      value2: [20, 50]
    }
  },
  methods: {}
}
</script>

<style scoped>
h1 {
  margin: 0.1rem 0;
  padding: 0 0.2rem;
  font-size: 18px;
  font-weight: bold;
}
</style>
