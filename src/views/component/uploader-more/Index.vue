<template>
  <div class="main">
    <div class="item">
      <div class="item__title">上传图片</div>
      <div class="form__item--content ly ly-multi">
        <div class="bac-img" v-for="(item,i) in BackgroundImages" :key="i">
          <img src="http://via.placeholder.com/200x100"/>
          <a href="javascript:void(0)" class="remove-img-btn"></a>
        </div>
        <a href="javascript:void(0)" class="img-upload">
          <input type="file" ref="background"  accept="image/*" class="tpye-file-img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BackgroundImages: {}
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped>
  .item {
    margin-bottom: .25rem;
    padding: 0 .27rem;
  }
  .item__title {
    position: relative;
    margin-bottom: .25rem;
    font-size: 14px;
    color: #555;
  }
  .form__item--content {
    box-sizing: border-box;
    padding: .27rem .32rem .16rem;
    width: 5.87rem;
    background-color: #fff;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .bac-img {
    position: relative;
    margin-right: .11rem;
    margin-bottom: .11rem;
    width: 1.21rem;
    height: 1.21rem;
  }
  .bac-img:nth-child(4n) {
    margin-right: 0;
  }
  .bac-img img {
    width: 100%;
    height: 100%;
  }
  .img-upload {
    display: block;
    width: 1.21rem;
    height: 1.21rem;
    background-color: #cccccc;
    background-image: url(./images/add-img.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: .88rem .88rem;
  }
  .tpye-file-img {
    position: relative;
    width: 1.21rem;
    height: 1.21rem;
    opacity: .00001;
  }
</style>