import autoSave from '@/mixin/auto-save'

export default {
  mixins: [autoSave],
  data () {
    return {
      saveKey: 'realtime-save-example', // 自动保存一定要有这个属性
      model: {
        // 自动保存 model 里的内容
      },
      previewUrl: {
        Thumb: null,
        LicenceImage: null,
        IdFront: null,
        IdBack: null,
        BackgroundImage: []
      }
    }
  },

  methods: {
    valid () {
      var errMsg
      var model = this.model
      if (!model.Name) {
        errMsg = '请输入店铺名称'
      } else if (!model.Title) {
        errMsg = '请输入经营内容'
      } else if (!model.Mobile) {
        errMsg = '请输入店铺手机'
      } else if (!model.Telphone) {
        errMsg = '请输入店铺电话'
      } else if (!model.Description) {
        errMsg = '请输入店铺简介'
      } else if (!model.Address) {
        errMsg = '请输入地址'
      }

      if (errMsg) {
        this.$toast(errMsg)
        return false
      }
      return !errMsg
    },
    save () {
      if (this.valid()) {
        this.doSave()
      }
    },
    doSave () {}
  },
  mounted () {}
}
