<template>
  <div class="main create-comment-page">
    <div class="field-group ly ly-m">
      <div class="field-group__label">服务评价</div>
      <van-rate v-model="model.star" color="#ff6666" void-color="#e5e5e5" />
    </div>
    <textarea
      type="textarea"
      placeholder="请输入您的评价"
      v-model="model.detail"
      rows="5"
      class="field__input"
    ></textarea>
    <div class="ly ly-c mv-20rem ph-10rem">
      <van-button size="large" type="primary" @click="comment"
        >提交评价</van-button
      >
    </div>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>
