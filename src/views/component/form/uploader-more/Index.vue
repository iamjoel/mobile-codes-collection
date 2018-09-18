<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">上传多张图片</h2>
      <div class="upload-img-wrap">
        <div class="form__item--content ly ly-multi">
          <div class="img-item-wrap" v-for="(item,i) in imgs.previewList" :key="i">
            <img :src="item | img"/>
            <a href="javascript:void(0)" class="remove-img-btn" @click="removeImg(i)"></a>
          </div>
          <a href="javascript:void(0)" class="img-upload" v-if="imgs.previewList.length < imgs.max">
            <input type="file" ref="imgs"  accept="image/*" class="tpye-file-img" @change="uploadImgs" :multiple="isIOS">
          </a>
        </div>
      </div>
      服务器端返回的图片URL:
      <ol>
        <li v-for="(item,i) in imgs.list" :key="i">{{item}}</li>
      </ol>
    </section>
    
  </div>
</template>

<script>
import {urls} from '@/setting'
const MAX_UPLOAD_IMG_NUM = 9 // 最多上传的图片数

export default {
  data() {
    return {
      imgs: {
        list: [],
        previewList: [],
        max: MAX_UPLOAD_IMG_NUM
      }
    }  
  },
  methods: {
    uploadImgs() {
      var files = this.$refs.imgs.files
      if(files) {
        // 图片大小验证。图片太大，可能会导致后台响应太慢或浏览器崩溃
        for(var i = 0; i < files.length; i++) {
          if(!this.$valiFileSize(files[i])) {
            return
          }
        }

        if(this.imgs.previewList.length + files.length > this.imgs.max) {
          this.$toast(`最多上次${this.imgs.max}张图片`)
          return
        }
        let prevUploadedImgNum = this.imgs.previewList.length
        this.$showLoading()
        var uploadedSuccessNum = 0
        for(var i = 0; i < files.length; i++) {
          this.uploadEachOne(files.item(i), prevUploadedImgNum + i, () => {
            uploadedSuccessNum++
            if(uploadedSuccessNum === files.length) {
                this.imgs.list = this.imgs.list.filter(img => !!img)
                this.imgs.previewList = this.imgs.previewList.filter(img => !!img)
                this.$hideLoading()
                this.$toast('上传成功!')
                this.$refs.imgs.value = null
            }
          })
        }
      }
    },
    uploadEachOne(file, index, uploadedFn) {
      // 图片预览
      var reader = new FileReader()
      reader.onloadend = () => {
        this.imgs.previewList[index] = reader.result
      }
      reader.readAsDataURL(file)

      var formData = new FormData()
      formData.append('name', file)
      this.$http({
        url: urls.uploadImg,
        method: 'post',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
      }).then(({data}) => {
        this.imgs.list[index] = (data.data)
        uploadedFn()
      }, () => {
        uploadedSuccessFn()
        // this.$toast('上传失败!')
        this.imgs.previewList[index] = false
      })
    },
    removeImg(index) {
      this.$dialog.confirm({
        message:'确认删除?'
      }).then(() => {
        this.imgs.list.splice(index, 1)
        this.imgs.previewList.splice(index, 1)
      })
    } 
  }
}
</script>

<style scoped>
  .upload-img-wrap {
    margin-bottom: .25rem;
  }
  .form__item--content {
    box-sizing: border-box;
    padding: .27rem .32rem .16rem;
    background-color: #fff;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .img-item-wrap {
    position: relative;
    margin-right: .11rem;
    margin-bottom: .11rem;
    width: 1.21rem;
    height: 1.21rem;
  }
  .img-item-wrap:nth-child(4n) {
    margin-right: 0;
  }
  .remove-img-btn {
    position: absolute;
    top: -.1rem;
    right: -.04rem;
    width: .32rem;
    height: .32rem;
    background-image: url(./images/remove-btn.png);
    background-size: 100% 100%;
  }
  .img-item-wrap img {
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