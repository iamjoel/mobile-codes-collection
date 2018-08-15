<template>
  <div class="main">
    <div class="demo__title">消息确认</div>
    <div class="p-10 b d-ib ml-15 mr-20" @click="onClickAlert">confirm</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }  
  },
  methods: {
    onClickAlert() {
      this.$dialog.alert({
        title: '标题',
        message: '弹窗内容',
        showCancelButton: true
      }).then(() => {

      }).catch(() => {

      })
    }
  }
}
</script>

<style>

</style>