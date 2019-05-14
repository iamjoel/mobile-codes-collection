<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">用 Loading 图标提示正在提交中</h2>
      <div class="ly ly-c ph-10rem">
        <van-button
          size="large"
          type="primary"
          @click="save"
          :loading="isSubmiting"
          >保存</van-button
        >
      </div>
    </section>

    <section class="demo">
      <h2 class="demo__title">用文字提示正在提交中</h2>
      <div class="ly ly-c ph-10rem">
        <van-button size="large" type="primary" @click="save2">{{
          isSubmiting2 ? '提交中...' : '保存'
        }}</van-button>
      </div>
    </section>

    <p class="mt-20rem">
      对于新增，需要有防止多次提交的处理。否则在接口响应慢的情况，会出现用户多次提交而造成多条一样的数据。
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSubmiting: false,
      isSubmiting2: false
    }
  },
  methods: {
    save () {
      // loading 状态不会进入 click 回调
      this.isSubmiting = true
      // 模拟提交
      setTimeout(() => {
        this.$toast('已提交')
        this.isSubmiting = false
      }, 3000)
    },
    save2 () {
      if (this.isSubmiting2) {
        return false
      }

      this.isSubmiting2 = true
      setTimeout(() => {
        this.$toast('已提交')
        this.isSubmiting2 = false
      }, 3000)
    }
  }
}
</script>

<style scoped></style>
