<template>
  <div class="main">
    <div class="demo__title">基础用法</div>
    <div class="ly ly-c">
      <div class="img-description" style="width: 50%">
        <img src="/static/demo/1.jpeg" alt="" class="img-description__img">
        <div class="img-description__text t-ddd">一些描述</div>
      </div>
    </div>

    <div class="demo__title">描述文字很多</div>
    <div class="ly ly-c">
      <div class="img-description" style="width: 50%">
        <img src="/static/demo/1.jpeg" alt="" class="img-description__img">
        <div class="img-description__text t-ddd">很多描述很多描述很多描述很多描述很多描述很多描述很多描述</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {

    }  
  },
  methods: {
    
  }
}
</script>

<style scoped>

.img-description {
  position: relative;
}
.img-description__img {
  display: block;/* 去除底部的空隙 */
  width: 100%;
  height: 2rem;
}
.img-description__text {
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 .2rem;
  line-height: 2;
  background-color: rgba(0, 0, 0, .8);
  text-align: center;
  color: #fff;
}
</style>