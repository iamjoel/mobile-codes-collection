import allPages from '@/router/component'

export default {
  data() {
    return {
      search: {
        isShowRes: false,
        query: '',
        res: [...allPages]
      }
    }  
  },
  methods: {
    onSearch() {
      this.search.isShowRes = true
      var query = this.search.query.trim()
      if(!query) {
        return [...allPages]
      }

      this.search.res = allPages.filter(item => {
        var hasInTitle = false
        if(item.meta && item.meta.title) {
          hasInTitle = item.meta.title.indexOf(query) !== -1
        }

        return hasInTitle || item.path.indexOf(query) !== -1
      })
    }
  }
}