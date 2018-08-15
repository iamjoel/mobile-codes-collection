<template>
  <div class="main">
    <div class="demo__title">加载提示</div>
    <div class="p-10 b d-ib ml-15" @click="onClickToast">加载提示</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }  
  },
  methods: {
    onClickToast() {
      this.$toast.loading({
        mask: true,
        message: '加载中...'
      })
    }
  }
}
</script>

<style>

</style>