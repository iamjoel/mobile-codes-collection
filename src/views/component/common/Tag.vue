<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">基础用法</div>
      <van-tag>default</van-tag>
      <van-tag type="danger">danger</van-tag>
      <van-tag type="success">success</van-tag>
      <van-tag type="primary">primary</van-tag>
    </section>

    <section class="demo">
      <div class="demo__title">空心样式</div>
      <van-tag plain>plain</van-tag>
      <van-tag plain type="danger">plain</van-tag>
      <van-tag plain type="primary">plain</van-tag>
      <van-tag plain type="success">plain</van-tag>
    </section>

    <section class="demo">
      <div class="demo__title">圆角样式</div>
      <van-tag mark>mark</van-tag>
      <van-tag mark type="danger">mark</van-tag>
      <van-tag mark type="primary">mark</van-tag>
      <van-tag mark type="success">mark</van-tag>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped></style>
