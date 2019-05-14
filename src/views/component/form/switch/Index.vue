<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">
        基础用法
      </div>
      <van-switch v-model="checked" />
    </section>

    <section class="demo">
      <div class="demo__title">
        禁用状态
      </div>
      <van-switch v-model="checked" disabled />
    </section>

    <section class="demo">
      <div class="demo__title">
        大尺寸
      </div>
      <van-switch v-model="checked" size="50px" />
    </section>

    <section class="demo">
      <div class="demo__title">
        自定义颜色
      </div>
      <div class="custom">
        <van-switch v-model="checked" />
      </div>
    </section>

    <section class="demo">
      <div class="demo__title">
        切换前确认
      </div>
      <van-switch :value="checked" size="36px" @change="onInput" />
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  },
  methods: {
    onInput (checked) {
      this.$dialog
        .confirm({
          title: '提醒',
          message: '是否切换开关？'
        })
        .then(() => {
          this.checked = checked
        })
    }
  }
}
</script>

<style>
.custom .van-switch--on {
  background-color: #2196f3;
}
</style>
