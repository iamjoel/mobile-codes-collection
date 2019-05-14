<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">消息确认</div>
      <van-button @click="showConfirm" size="small">confirm</van-button>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    showConfirm () {
      this.$dialog
        .confirm({
          message: '确认删除？',
          showCancelButton: true
        })
        .then(() => {
          this.$toast('删除成功')
        })
        .catch(() => {
          this.$toast('放弃删除')
        })
    }
  }
}
</script>

<style></style>
