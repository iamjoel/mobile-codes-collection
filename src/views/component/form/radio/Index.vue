<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">
        基础用法
      </div>
      <van-radio-group v-model="radio">
        <van-radio name="1" class="mb-10">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </section>

    <section class="demo">
      <div class="demo__title">
        禁用状态
      </div>
      <van-radio-group v-model="radio" disabled>
        <van-radio name="1" class="mb-10">单选框 1</van-radio>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group>
    </section>

    <section class="demo">
      <div class="demo__title">
        在同一行
      </div>
      <div class="ly ly-j ly-m line ph-10rem">
        <div class="title">水果</div>
        <van-radio-group v-model="radio">
          <van-radio name="1" class="mr-20rem">苹果</van-radio>
          <van-radio name="2">西瓜</van-radio>
        </van-radio-group>
      </div>
    </section>

    <section class="demo">
      <div class="demo__title">
        Label 在左边
      </div>
      <van-radio-group v-model="radio">
        <van-radio name="1" class="mb-10" label-position="left"
          >单选框 1</van-radio
        >
        <van-radio name="2" label-position="left">单选框 2</van-radio>
      </van-radio-group>
    </section>

    <section class="demo">
      <div class="demo__title">
        自定义颜色
      </div>
      <div class="custom">
        <van-radio-group v-model="radio">
          <van-radio name="1" class="mb-10">单选框 1</van-radio>
          <van-radio name="2">单选框 2</van-radio>
        </van-radio-group>
      </div>
    </section>

    <section class="demo">
      <div class="demo__title">
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
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1'
    }
  },
  methods: {}
}
</script>

<style>
.line .van-radio-group {
  display: flex;
}
.custom .van-icon-checked {
  color: #2196f3;
}
</style>
