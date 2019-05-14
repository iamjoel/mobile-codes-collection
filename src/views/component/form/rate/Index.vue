<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">基础用法</h2>
      <van-rate v-model="value" />
    </section>

    <section class="demo">
      <h2 class="demo__title">禁用状态</h2>
      <van-rate v-model="value" disabled />
    </section>

    <section class="demo">
      <h2 class="demo__title">禁用状态自定义颜色</h2>
      <div class="custom">
        <van-rate v-model="value" disabled />
      </div>
    </section>

    <section class="demo">
      <h2 class="demo__title">自定义颜色&大小&总数</h2>
      <van-rate
        v-model="value"
        :size="35"
        :count="7"
        color="#2ba"
        void-color="#ceefe8"
      />
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 3
    }
  },
  methods: {}
}
</script>

<style>
.custom .van-rate__item {
  fill: #f00;
}
</style>
