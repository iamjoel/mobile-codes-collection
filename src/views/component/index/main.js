import allPages from '@/router/component'

export default {
  data () {
    return {
      search: {
        isShowRes: false,
        query: '',
        res: [...allPages]
      }
    }
  },
  mounted () {
    // 初始化每洽
    _MEIQIA('withoutBtn') // 不使用默认的聊天窗口
    _MEIQIA('init')
  },
  methods: {
    onSearch () {
      this.search.isShowRes = true
      var query = this.search.query.trim()
      if (!query) {
        return [...allPages]
      }

      this.search.res = allPages.filter(item => {
        var hasInTitle = false
        if (item.meta && item.meta.title) {
          hasInTitle = item.meta.title.indexOf(query) !== -1
        }

        return hasInTitle || item.path.indexOf(query) !== -1
      })
    },
    chat () {
      _MEIQIA('showPanel') // 开始聊天
    }
  }
}
