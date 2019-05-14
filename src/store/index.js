import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  openid: null,
  user: {
    id: null,
    name: null
  },
  isShowFooter: true,
  activeTypeIndex: 0,
  singerListCache: {
    // 歌曲列表页的缓存
    enable: false, // 是否用该缓存进行搜索
    filterValue: null, // 筛选条件
    pagerAt: 1, // 第几页
    scrollTop: 0 // 滚动条位置
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug
})
