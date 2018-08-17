<template>
  <div class="main">
    <div class="form-info">
      <input type="file" ref="LicenceImage" accept="image/*" class="tpye-file"> 
      <a href="javascript:void(0)" class="form__item form__item--upload">
        <div>上传图片</div>
        <div class="ly ly-m">
          <img src="http://via.placeholder.com/200x100" alt="" class="upload-img"/>
          <!-- <img src="./imagse/right.png" alt="" class="icon-right"> -->
        </div>
      </a>
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
  .form-info {
    position: relative;
    margin-top: .15rem;
    padding: 0 .27rem;
    background-color: #fff;
  }
  .tpye-file {
    position: absolute;
    width: 100%;
    height: 1.5rem;
    opacity: .00001;
  }
  .form__item {
    display: flex;
    height: .79rem;
    line-height: .79rem;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: .27rem;
    background-position-y: .35rem;
    border-bottom: 1px solid #ebebeb;
  }
  .form__item--upload {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.55rem;
    color: #333;
  }
  .upload-img {
    margin-right: .18rem;
    width: 1.09rem;
    height: 1.09rem;
    border-radius: 50%;
  }
</style>