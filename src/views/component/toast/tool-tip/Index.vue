<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">头部，靠左</h2>
      <div
        v-tooltip.top.start="'有问题，要尝试自己解决'"
        style="margin-top: 50px"
      >
        <van-icon name="question" /> 头部，靠左
      </div>
    </section>

    <section class="demo" style="margin-top: 50px">
      <h2 class="demo__title">头部，靠右</h2>
      <div
        v-tooltip.top.end="'有问题，要尝试自己解决'"
        style="margin-top: 50px"
      >
        <van-icon name="question" /> 头部，靠右
      </div>
    </section>
  </div>
</template>

<script>
//文档地址： https://hekigan.github.io/vue-directive-tooltip/
import Vue from 'vue'
import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/css/index.css'
Vue.use(Tooltip)

export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped></style>
