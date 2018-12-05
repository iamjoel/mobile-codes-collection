<template>
  <div class="login-page">
    <div class="form__item">
      <input type="text" class="form__item-input" placeholder="请输入手机号" v-model="model.tel">
    </div>

    <div class="form__item">
      <input type="password" class="form__item-input" placeholder="请输入密码" v-model="model.password">
    </div>

    <a href="javascript:void(0);" class="login-btn" @click="login">登录</a>
    <div class="mt-10 ta-c c-666">
      没有帐号?
      <a @click="$router.push('/page/common/register')" href="javascript:void(0);" class="register-link">去注册</a>
    </div>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>