<template>
  <div class="main">
    <div class="demo-block">
      <div class="demo__title">
        基础用法
      </div>
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入用户名" />
      </van-cell-group>
      <br>
      <van-cell-group>
        <van-field v-model="value" type="textarea" placeholder="请输入用户名" />
      </van-cell-group>
    </div>
    <div class="demo-block">
      <div class="demo__title">
        输入框只读
      </div>
      <van-cell-group>
        <van-field v-model="value" readonly placeholder="请输入用户名" />
      </van-cell-group>
      <br>
      <van-cell-group>
        <van-field v-model="value" type="textarea" readonly placeholder="请输入用户名" />
      </van-cell-group>
    </div>
    <div class="demo-block">
      <div class="demo__title">
        禁用输入框
      </div>
      <van-cell-group>
        <van-field v-model="value" disabled placeholder="请输入用户名" />
      </van-cell-group>
      <br>
      <van-cell-group>
        <van-field v-model="value" type="textarea" disabled placeholder="请输入用户名" />
      </van-cell-group>
    </div>
    <div class="demo-block">
      <div class="demo__title">
        自定义输入框
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
    </div>
    <div class="demo-block">
      <div class="demo__title">
        自适应高度
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      username: '',
      password: '',
      message: ''
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped></style>