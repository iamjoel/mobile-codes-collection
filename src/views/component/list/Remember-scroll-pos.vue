<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">跳转其他页面后，返回进入该页面后，还返回上次浏览器的位置</h2>
       <van-list
            v-model="isLoading"
            :finished="isFinished"
            @load="fetchMore()"
          >
        <van-cell-group>
          <van-cell
              v-for="item in list" :key="item.id"
              :value="item.name" @click="jump"
          />
        </van-cell-group>
      </van-list>
    </section>
    
  </div>
</template>

<script>
import {fetchList} from '@/service/api'
import $ from 'jquery'

export default {
  data() {
    return {
      list: [],
      isLoading: true,
      isFinished: false,
      pager: {
        limit: 5,
        current: 0,
        total: 1,
      },
    }  
  },
  methods: {
    fetchList(isReset, pageLimit, succFn) {
      // debugger
      if(isReset) {
        this.pager.current = 1
      }
      fetchList('singer', undefined, {
        current: this.pager.current,
        item: pageLimit ? pageLimit : this.pager.limit, // 一页几条
      }).then(({data}) => {
        this.list = isReset ? data.data : this.list.concat(data.data)
        this.isLoading = false

        if(this.pager.current >= Math.ceil(data.pager.total / this.pager.limit)) {
          this.isFinished = true
          console.log('加载所有')
        }

        if(succFn) {
          succFn()
        }
      })
    },
    fetchMore() {
      if(!this.isFinished) {
        this.pager.current++
        this.fetchList()
      }
    },
    jump() {
      // 记录滚动位置，及相关信息
      this.$store.commit('setSingerListCache', {
        enable: true, // 是否用该缓存进行搜索
        pagerCurrent: this.pager.current, // 第几页
        scrollTop: $(window).scrollTop() // 滚动条位置
      })
      this.$router.push('/')
    }
  },
  mounted() {
    // 滚动到上次的位置
    if(this.$store.state.singerListCache.enable) {
      let singerListCache = this.$store.state.singerListCache
      // 一次性加载那么多条
      this.fetchList(true, singerListCache.pagerCurrent * this.pager.limit, ()=> {
        this.pager.current = singerListCache.pagerCurrent
        this.$nextTick(()=> {
          setTimeout(()=> {
            $('html,body').animate({
              'scrollTop': singerListCache.scrollTop
            }, 100) //.scrollTop(singerListCache.scrollTop)
          }, 500)
        })
      })
    } else {
      this.fetchList()
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  font-weight: bold;
  line-height: 2;
}
</style>