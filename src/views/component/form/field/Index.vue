<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">
        基础用法
      </div>
      <van-cell-group>
        <van-field placeholder="请输入用户名" />
      </van-cell-group>

      <van-cell-group>
        <van-field v-model="value" type="textarea" placeholder="请输入描述" />
      </van-cell-group>
      <div class="mt-5">
        只适合表单项少的情况用。表单项多时，用这种方式，用户填完表单会不知道表单对于的内容
      </div>
    </section>

    <section class="demo">
      <div class="demo__title">
        带标签的表单
      </div>
      <van-cell-group>
        <van-field placeholder="请输入用户名" label="用户名" />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="value"
          type="textarea"
          placeholder="请输入描述"
          label="描述"
        />
      </van-cell-group>
    </section>

    <section class="demo">
      <div class="demo__title">
        必填项&带清空按钮
      </div>
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
    </section>

    <section class="demo">
      <div class="demo__title">
        输入框只读
      </div>
      <van-cell-group>
        <van-field
          v-model="value"
          readonly
          placeholder="请输入用户名"
          label="用户名"
        />
      </van-cell-group>
    </section>

    <section class="demo">
      <div class="demo__title">
        禁用输入框
      </div>
      <van-cell-group>
        <van-field
          v-model="value"
          disabled
          placeholder="请输入用户名"
          label="用户名"
        />
      </van-cell-group>
    </section>

    <section class="demo">
      <div class="demo__title">
        多行文本自适应高度
      </div>
      <van-cell-group>
        <van-field
          v-model="message"
          label="留言"
          type="textarea"
          placeholder="请输入留言"
          rows="1"
          autosize
        />
      </van-cell-group>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {}
}
</script>

<style scoped></style>
