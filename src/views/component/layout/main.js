export default {
  props: {
    type: {
      type: String,
      default: 'flex'
    },
    config: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {
    getStyle () {
      var style = {}
      const type = this.type
      const config = this.config
      if (type === 'flex') {
        if (config.x) {
          style['justify-content'] = config.x //简写和更舒服的写法
        }
        if (config.y) {
          style['align-items'] = config.y
        }
        if (config.multiLine) {
          style['flex-wrap'] = 'wrap'
        }
      }
    }
  }
}
