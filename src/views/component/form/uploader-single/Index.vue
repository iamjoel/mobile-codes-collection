<template>
  <div class="main">
    <div class="form-info pos-r">
      <a href="javascript:void(0)" class="form__item form__item--upload">
        <div>头像</div>
        <div class="ly ly-m">
          <img
            :src="
              avtarImg.preview
                ? avtarImg.preview
                : $imgPrefix + '/' + avtarImg.value
            "
            alt=""
            class="upload-img"
            v-if="avtarImg.preview || avtarImg.value"
          />
          <img
            src="http://via.placeholder.com/50x50"
            alt=""
            class="upload-img"
            v-else
          />
        </div>
      </a>
      <input
        class="input-file"
        type="file"
        ref="avtarImg"
        accept="image/*"
        @change="upload('avtar')"
      />
    </div>
    <div class="mt-10rem">服务器端返回的图片URL: {{ avtarImg.value }}</div>

    <div class="form-info pos-r">
      <a href="javascript:void(0)" class="form__item form__item--upload">
        <div>背景</div>
        <div class="ly ly-m">
          <img
            :src="
              backgroundImg.preview
                ? backgroundImg.preview
                : $imgPrefix + '/' + backgroundImg.value
            "
            alt=""
            class="upload-img"
            v-if="backgroundImg.preview || backgroundImg.value"
          />
          <img
            src="http://via.placeholder.com/50x50"
            alt=""
            class="upload-img"
            v-else
          />
        </div>
      </a>
      <input
        class="input-file"
        type="file"
        ref="backgroundImg"
        accept="image/*"
        @change="upload('background')"
      />
    </div>

    <div class="mt-10rem">服务器端返回的图片URL: {{ backgroundImg.value }}</div>
  </div>
</template>

<script>
import { urls } from '@/setting'

export default {
  data () {
    return {
      avtarImg: {
        value: null,
        preview: null
      },
      backgroundImg: {
        value: null,
        preview: null
      }
    }
  },
  methods: {
    upload (type) {
      var file = this.$refs[type + 'Img'].files[0]
      // 图片大小验证。图片太大，可能会导致后台响应太慢或浏览器崩溃
      if (!this.$valiFileSize(file)) {
        return
      }
      this.$showLoading()

      // 图片预览
      var reader = new FileReader()
      reader.onloadend = () => {
        this[type + 'Img'].preview = reader.result
      }
      reader.readAsDataURL(file)

      var formData = new FormData()
      formData.append('name', file)
      this.$http({
        url: urls.uploadImg,
        method: 'post',
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      }).then(
        ({ data }) => {
          this[type + 'Img'].value = data.data
          this.$hideLoading()
          this.$toast('上传成功!')
          this.$refs[type + 'Img'].value = null
        },
        () => {
          this.$hideLoading()
          this.$toast('上传失败!')
          this[type + 'Img'].preview = null
        }
      )
    }
  }
}
</script>

<style scoped>
.form-info {
  margin-top: 0.15rem;
  padding: 0 0.27rem;
  background-color: #fff;
}
.input-file {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  opacity: 0.00001;
}
.form__item {
  display: flex;
  height: 0.79rem;
  line-height: 0.79rem;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 0.27rem;
  background-position-y: 0.35rem;
}
.form__item--upload {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1.55rem;
  color: #333;
}
.upload-img {
  margin-right: 0.18rem;
  width: 1.09rem;
  height: 1.09rem;
  border-radius: 50%;
}
</style>
