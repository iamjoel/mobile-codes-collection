<template>
  <div class="main">
    <div class="demo-block">
      <div class="label">
        基础用法
      </div>
      <van-switch v-model="checked" />
    </div>
    <div class="demo-block">
      <div class="label">
        禁用状态
      </div>
      <van-switch v-model="checked" disabled/>
    </div>
    <div class="demo-block">
      <div class="label">
        大尺寸
      </div>
      <van-switch v-model="checked" size="50px"/>
    </div>
    <div class="demo-block">
      <div class="label">
        自定义颜色
      </div>
      <div class="custom">
        <van-switch v-model="checked"/>
      </div>
    </div>
    <div class="demo-block">
      <div class="label">
        切换前确认
      </div>
      <van-switch :value="checked" size="36px" @change="onInput" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    }  
  },
  methods: {
    onInput(checked) {
      this.$dialog.confirm({
        title: '提醒',
        message: '是否切换开关？'
      }).then(() => {
        this.checked = checked;
      });
    }
  }
}
</script>

<style>
  .custom .van-switch--on {
    background-color: #2196f3;
  }
</style>