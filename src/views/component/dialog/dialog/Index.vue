<template>
  <div class="main">
    <div class="demo__title">自定义弹出内容</div>
    <div class="p-10 b d-ib ml-15 mr-20" @click="show = true">confirm</div>
    <van-dialog
      v-model="show"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      username: '',
      password: ''
    }  
  },
  methods: {
    beforeClose(action, done) {
      if(action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        done()
      }
    }
  }
}
</script>

<style>

</style>