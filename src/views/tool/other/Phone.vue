<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">隐藏手机号内容</div>
      {{'13812660321' | maskPhone}}
    </section>
    <section class="demo">
      <div class="demo__title">手机号验证</div>
      <ul>
        <li v-for="(phone,i) in testPhone" :key="i">
          {{phone}} {{isPhoneValid(phone) ? '是' : '不是'}} 合法的手机号
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.filter('maskPhone', function (value) {
  if(!value) {
    return ''
  }
  value += ''
  return `${value.slice(0,3)} **** ${value.slice(-4)}`
})
export default {
  data() {
    return {
      testPhone: [
        13812694033,
        138126940335,
        1381269403,
        'a1381269403',
      ]
    }  
  },
  methods: {
    isPhoneValid(value) {
      return /^1\d{10}$/.test(value)
    }
  }
}
</script>

<style scoped></style>