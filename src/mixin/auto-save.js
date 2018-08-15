export default {
  data() {
    return {
      runId: null
    }
  },
  watch: {
    model: {
      handler(curr) {
        if(!this.isUpdate &&  this.saveKey) {
          localStorage.setItem(this.saveKey, JSON.stringify(this.model))
        }
      },
      deep: true // 深度 watch
    }
  },
  methods: {

  },
  mounted() {
    if(this.isUpdate) {
      return
    }
    
    // 初始化之前存的数据，如有有的话。
    if(this.saveKey) {
      var model = JSON.parse(localStorage.getItem(this.saveKey))
      if(model) {
        this.model = model
        if(typeof this.syncFn === 'function') {
          this.syncFn(model) // 同步数据回来
        }
      }
    }
  }
}