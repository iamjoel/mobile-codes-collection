<template>
  <div class="register-page">
    <div class="form__item ly ly-j ly-m">
      <input type="text" class="form__item-input" placeholder="请输入手机号" v-model="model.tel">
      <a href="javascript:void(0);" class="get-code-btn" v-if="!hasSend" @click="send">获取验证码</a>
      <a href="javascript:void(0);" class="get-code-btn" v-else>{{countDown}}s后重新发送</a>
    </div>

    <div class="form__item">
      <input type="text" class="form__item-input" placeholder="请输入验证码" v-model="model.code">
    </div>

    <a href="javascript:void(0);" class="login-btn" @click="register">注册</a>
    <div class="ly ly-c ly-m tip">
      <van-checkbox v-model="isAgree" style="margin-right: 5px;" />我已阅读并同意 <a href="javascript:void(0);" class="strong-text" @click="isShowArgument = true">《用户协议》</a> 内容
    </div>

    <van-popup v-model="isShowArgument" position="right">
      <div class="full">
        <van-nav-bar
          leftText="返回"
          leftArrow
          @click-left="isShowArgument = false"
        />
        用户协议内容
      </div>
      
    </van-popup>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>
<style>
  
.register-page .van-checkbox--checked{
  background-color: #fb9534;
  border-color: #fb9534;
  margin-right: .1rem;
}
.register-page .van-checkbox--round{
  margin-right: .1rem;
}

</style>