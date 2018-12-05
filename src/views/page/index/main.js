import allPages from '@/router/page'
import {fetchList, addModel, editModel, deleteModel} from '@/service/api'
import md5 from 'md5'
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
  },
  mounted() {
    // this.$http.post('http://127.0.0.1:7001/api/login', {
    //   account: 'b',
    //   password: 'c4ca4238a0b923820dcc509a6f75849b'
    // }).then(({data}) => {
    //   // debugger
    // })
    // return
    this.$http.get('http://127.0.0.1:7001/api/item/list', {
      headers: {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiYiIsInJvbGUiOjIsImV4cCI6MTU0MDU1MzQ4MDU5NH0.sStb17FOr_fkWhF2t81dOyCPYwOPpBs_4pyQpksd8Ow'
      }
    }).then(({data}) => {
      // debugger
    })
    // this.$http.post('http://127.0.0.1:7001/api/category/add', {
    //   name: 'tes',
    //   detail: 'bdfdfdffdfdf'
    // }, {
    //   headers: {
    //     token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50IjoiYiIsInJvbGUiOjIsImV4cCI6MTU0MDU1MzQ4MDU5NH0.sStb17FOr_fkWhF2t81dOyCPYwOPpBs_4pyQpksd8Ow'
    //   }
    // }).then(({data}) => {
    //   // debugger
    // })

  }
}