<template>
  <div class="main">
    <textarea
      v-model="model.detail"
      type="textarea"
      placeholder="请输入您的反馈内容"
      rows="5"
      class="field__input"
    ></textarea>
    <div class="ly ly-c mv-20rem ph-10rem">
      <van-button size="large" type="primary" @click="save"
        >提交反馈</van-button
      >
    </div>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>
