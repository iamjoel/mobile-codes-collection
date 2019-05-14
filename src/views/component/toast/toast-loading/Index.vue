<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">基础用法</h2>
      <van-button @click="showBasicLoading">显示加载中</van-button>
    </section>

    <section class="demo">
      <h2 class="demo__title">加载图标是 spinng</h2>
      <van-button
        @click="
          $toast.loading({
            loadingType: 'spinner',
            mask: true,
            message: '加载中...'
          })
        "
        >显示加载中</van-button
      >
      <div class="mt-10">默认持续显示3秒关闭(对应的配置duration:3000)</div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    showBasicLoading () {
      var toast = this.$toast.loading({
        mask: true,
        message: '加载中...',
        duration: 0 // 加载不会自动消失
      })
      // 模拟关闭
      setTimeout(() => {
        toast.clear()
      }, 5000)
    }
  }
}
</script>

<style></style>
