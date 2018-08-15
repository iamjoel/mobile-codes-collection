<template>
  <div class="main">
    <div class="demo__title">消息提示</div>
    <div class="p-10 b d-ib ml-15 mr-20" @click="onClickAlert">alert</div>
    <div class="p-10 b d-ib" @click="onClickAlert2">无标题alert</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    }  
  },
  methods: {
    onClickAlert() {
      this.$dialog.alert({
        title: '标题',
        message: '弹窗内容'
      }).then(() => {
      })
    },
    onClickAlert2() {
      this.$dialog.alert({
        message: '弹窗内容'
      }).then(() => {
      })
    }
  }
}
</script>

<style>

</style>