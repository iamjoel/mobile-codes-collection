import areaList from './area'

export default {
  props: {
    list: Array,
    isUserCenter: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      show: false,
      choseArea: false,
      selectedId: null,
      areaList,
      addressInfo: {}
    }
  },
  computed: {},
  methods: {
    backToAdList () {
      this.show = false
    },
    backToPage () {
      this.$emit('close')
    },
    choose (id) {
      this.$emit('choose', {
        id: 123,
        address: 'xxxx'
      })
    },
    select (id) {
      this.$emit('select', this.list.find(item => item.id == id))
    },
    save (address) {
      this.$emit('save', address)
      this.show = false
    },
    onDelete (address) {
      this.$emit('delete', address.id)
      this.show = false
    },
    add () {
      this.show = true
      this.addressInfo = {}
    },
    edit (item) {
      this.addressInfo = {
        name: item.name,
        tel: item.tel,
        areaCode: item.areaCode,
        addressDetail: item.addressDetail,
        isDefault: item.isDefault,
        id: item.id
      }
      this.show = true
    }
  }
}
