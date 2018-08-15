<template>
  <div class="main">
    <div class="demo__title">列表</div>

    <van-search 
      placeholder="请输入搜索关键词"
      v-model="searchCondition.name"
      @search="fetchList"
    />

    <div class="ly ly-r p-10rem">
      <van-button type="primary" size="small" @click="addModel">新增</van-button>
    </div>
    <div class="p-10rem">按热度排序:</div>
    <div class="list">
      <div class="item ly ly-j ly-m" v-for="item in list" :key="item.id">
        <span>{{item.name}}</span>
        <div>
          <van-button type="primary" @click="editModel(item.id)" size="mini">编辑</van-button>
          <van-button type="danger" @click="deleteItem(item.id)" size="mini">删除</van-button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import {Random} from 'mockjs'
import {fetchList, addModel, editModel, deleteModel} from '@/service/api'
export default {
  data() {
    return {
      KEY: 'singer',
      list: [],
      searchCondition: {
        name: null,
      },
    }  
  },
  methods: {
    fetchList() {
      fetchList(this.KEY, this.searchCondition, undefined, ['hot', 'desc']).then(({data}) => {
        this.list = data.data
      })
    },
    addModel() {
      addModel(this.KEY, {
        id: Random.guid(),
        name: Random.cname()
      }).then(() => {
        this.$toast('操作成功')
        this.fetchList()
      })
    },
    editModel(id) {
      editModel(this.KEY, {
        id,
        name: Random.cname()
      }).then(() => {
        this.$toast('操作成功')
        this.fetchList()
      })
    },
    deleteItem(id) {
      this.$dialog.confirm({
        title: '确定删除?'
      }).then(() => {
        deleteModel(this.KEY, id).then(() => {
          this.fetchList()
          this.$toast('删除成功')
        })
      }).catch(() => {})
      
    }
  },

  mounted() {
    this.fetchList()
  }
}
</script>

<style scoped>
.item {
  padding: 0 .2rem;
  line-height: 3;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
</style>