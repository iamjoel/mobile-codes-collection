<template>
  <div class="main">
    <div class="create">
      <textarea class="text" placeholder="分享农场的新鲜事..."></textarea>

      <div class="ly ly-multi ">
        <div class="pos-r img-wrap" v-for="i in 4" :key="i">
          <img class="img" src="http://via.placeholder.com/200x100" />
          <a
            href="javascript:void(0)"
            class="remove-img-btn"
            @click="remove(i)"
          ></a>
        </div>

        <div class="img upload-img-btn-wrap" v-if="imgs.list.length < imgs.max">
          <img class="create-img" src="./images/create-img.png" />
          <input
            class="upload"
            type="file"
            accept="image/*"
            @change="uploadImgs"
            :multiple="isIOS"
            ref="imgs"
          />
        </div>
      </div>
    </div>
    <div class="confirm-button-wrap">
      <a href="javascript:void(0)" class="primary-lg-btn" @click="save"
        >发 布</a
      >
    </div>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>
