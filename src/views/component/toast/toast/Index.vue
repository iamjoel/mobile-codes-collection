<template>
  <div class="main">
    <div class="demo__title">文字提示</div>
    <div class="p-10 b d-ib ml-15" @click="onClickToast">文字提示</div>
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
      this.$toast('我是提示文案，建议不超过十五字~')
    }
  }
}
</script>

<style>

</style>