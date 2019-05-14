<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">消息提示</div>
      <van-button @click="showAlert" size="small">alert</van-button>
      <van-button @click="showNoTitleAlert" size="small"
        >无标题alert</van-button
      >
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    showAlert () {
      this.$dialog
        .alert({
          title: '标题',
          message: '弹窗内容'
        })
        .then(() => {})
    },
    showNoTitleAlert () {
      this.$dialog
        .alert({
          message: '弹窗内容'
        })
        .then(() => {})
    }
  }
}
</script>

<style></style>
