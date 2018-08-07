<template>
  <div class="main">
    <div class="demo-block">
      <div class="label">
        基础用法
      </div>
      <van-radio-group v-model="radio">
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </div>
    <div class="demo-block">
      <div class="label">
        禁用状态
      </div>
      <van-radio-group v-model="radio" disabled>
        <van-radio name="1">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </div>
    <div class="demo-block">
      <div class="label">
        与cell组件一起使用
      </div>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="单选框 1" clickable @click="radio = '1'">
            <van-radio name="1" />
          </van-cell>
          <van-cell title="单选框 2" clickable @click="radio = '2'">
            <van-radio name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1'
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>