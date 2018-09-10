<template>
  <div class="main">
    <div class="form-info pos-r">
      <a href="javascript:void(0)" class="form__item form__item--upload">
        <div>上传图片</div>
        <div class="ly ly-m">
          <img :src="img.preview ? img.preview :  ($imgPrefix + '/' + img.value)" alt="" class="upload-img" v-if="img.preview || img.value"/>
          <img src="http://via.placeholder.com/50x50" alt="" class="upload-img" v-else/>
        </div>
      </a>
      <input class="input-file" type="file" ref="img" accept="image/*" @change="upload" > 
    </div>

    服务器端返回的图片URL: {{img.value}}
  </div>
</template>

<script>
import {urls} from '@/setting'

export default {
  data() {
    return {
      img: {
        value: null,
        preview: null
      }
    }
  },
  methods: {
    upload() {
      var file = this.$refs.img.files[0]
      
      if(!this.$valiFileSize(file)) {
        return
      }
      this.$showLoading()
      var formData = new FormData();
      formData.append('name', file)
      // 图片预览
      var reader = new FileReader()
      reader.onloadend = () => {
        this.img.preview = reader.result
      }
      reader.readAsDataURL(file)

      this.$http({
        url: urls.uploadImg,
        method: 'post',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
      }).then(({data}) => {
        this.img.value = data.data
        this.$hideLoading()
        this.$toast('上传成功!')
      }, () => {
        this.$hideLoading()
        this.$toast('上传失败!')
        this.img.preview = null
      })
    }
  }
}
</script>

<style scoped>
  .form-info {
    margin-top: .15rem;
    padding: 0 .27rem;
    background-color: #fff;
  }
  .input-file {
    position: absolute;
    top: 0;
    left: 0;
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