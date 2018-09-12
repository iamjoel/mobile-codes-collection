import {urls} from '@/setting'
import {addModel} from '@/service/api'

export default {
  data() {
    return {
      imgs: {
        list: [],
        previewList: [],
        max: 9
      },
      detail: null
    }  
  },
  methods: {
    remove(i) {
      this.imgs.list.splice(i, 1)
      this.imgs.previewList.splice(i, 1)
    },
    uploadImgs() {
      var files = this.$refs.imgs.files
      for(var i = 0; i < files.length; i++) {
        if(!this.$valiFileSize(files[i])) {
          return
        }
      }
      if(this.imgs.previewList.length + files.length > this.imgs.max) {
        this.$toast(`最多上次${this.imgs.max}张图片`)
        return
      }
      if(files) {
        for(var i = 0; i < files.length; i++) {
          this.uploadEachOne(files.item(i))
        }
      }
    },
    uploadEachOne(file) {
      var formData = new FormData();
      formData.append('name', file)
      // 图片预览
      var reader = new FileReader()
      reader.onloadend = () => {
        this.imgs.previewList.push(reader.result) 
      }
      reader.readAsDataURL(file)

      this.$http({
        url: urls.uploadImg,
        method: 'post',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
      }).then(({data}) => {
        this.imgs.list.push(data.data)
      }, () => {
        this.$toast('上传失败!')
        this.imgs.previewList.pop()
      })
    },
    save() {
      addModel('ph2_farm_social',{
        "openId": this.$store.state.openid,
        "img": this.imgs.list.join(','),
        "detail": this.detail
      }).then(() => {
        debugger
        this.$toast('发布成功')
        this.$router.go(-1)
      })
    }
  }
}