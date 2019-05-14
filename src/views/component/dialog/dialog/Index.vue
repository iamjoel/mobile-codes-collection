<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">自定义弹出内容</div>
      <van-button @click="isShowDialog = true" size="small">弹出</van-button>
      <van-dialog
        v-model="isShowDialog"
        show-cancel-button
        :before-close="beforeClose"
      >
        <van-field
          v-model="username"
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
        />
      </van-dialog>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShowDialog: false,
      username: '',
      password: ''
    }
  },
  methods: {
    beforeClose (action, done) {
      if (action === 'confirm') {
        setTimeout(() => {
          done()
          this.$toast('成功')
        }, 1000)
      } else {
        done()
      }
    }
  }
}
</script>

<style></style>
