import { fetchList } from '@/service/api'

export default {
  props: {
    type: {
      default: 'supplier'
    },
  },
  data() {
    return {
      isShow: false,
      searchStr: null,
      key: null,
      list: [],
      selectedId: null,
      isLoading: false,
      isFinished: false,
      pager: {
        current: 0,
        item: 10,
        total: 1
      }
    }  
  },
  mounted() {
    this.key = ({
      'supplier': 'sys/Supplier'
    })[this.type]
    this.fetchList()
  },
  methods: {
    show(value) {
      this.isShow = true
      this.selectedId = value
      this.fetchList(true)
    },
    fetchList (isReSearch) {
      if (!isReSearch) {
        if (this.isFinished) {
          return
        }
        this.pager.current++
      } else {
        this.isFinished = false
        this.pager.current = 1
      }

      this.isLoading = true


      fetchList(this.key, {name__like: this.searchStr}, this.pager).then(
        ({ data }) => {
          this.list = isReSearch ? data.data : this.list.concat(data.data)
          this.pager.total = data.pager.total
          if (
            this.pager.current >= Math.ceil(data.pager.total / this.pager.item)
          ) {
            this.isFinished = true
          }
          this.isLoading = false
        }
      )
    },
    confirm() {
      var selectedItem = this.list.find(item => item.id === this.selectedId)
      this.$emit('choosed', selectedItem)
      this.isShow = false
    }
  }
}