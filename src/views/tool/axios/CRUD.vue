<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">接口说明</div>
      <ul>
        <li>
          <h2>获取列表</h2>
          <div>
            <div class="des__item"><strong>调用方式:</strong>fetchList(KEY, 搜索条件, 分页, 排序)</div>
            <div class="des__item"><strong>url:</strong> 服务器前缀/api/KEY/list?where={搜索key1:xx1,搜索key2:xx2}&pageAt=第几页&pageLimit=一页多少条&order=[排序key, 'desc|asc']</div>
            <div class="des__item"><strong>响应: </strong>
            <pre>
{
  data: [],
  pager: {total: 总页数},
  errorCode: 0, // 值不是0,为出错。
  errorMessage: ''
}
            </pre></div>
          </div>
        </li>
        <li>
          <h2>新增</h2>
          <div>
            <div class="des__item"><strong>调用方式:</strong>addModel(KEY, model)</div>
            <div class="des__item"><strong>[POST]url:</strong> 服务器前缀/api/KEY/add</div>
            <div class="des__item"><strong>响应: </strong>
              {
              errorCode: 0,
              errorMessage: ''
            }</div>
          </div>
        </li>
        <li>
          <h2>编辑</h2>
          <div>
            <div class="des__item"><strong>调用方式:</strong>editModel(KEY, model)</div>
            <div class="des__item"><strong>[POST]url:</strong> 服务器前缀/api/KEY/edit</div>
            <div class="des__item"><strong>响应: </strong>{
              errorCode: 0,
              errorMessage: ''
            }</div>
          </div>
        </li>
        <li>
          <h2>删除</h2>
          <div>
            <div class="des__item"><strong>调用方式:</strong>   deleteModel(KEY, id)</div>
            <div class="des__item"><strong>[POST]url:</strong> 服务器前缀/api/KEY/del</div>
            <div class="des__item"><strong>响应: </strong>{
              errorCode: 0,
              errorMessage: ''
            }</div>
          </div>
        </li>
      </ul>
      <div class="demo__title">增删改查</div>
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
    </section>
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
      fetchList(this.KEY, this.searchCondition, {
        current: 1,
        item: 100
      }, ['hot', 'desc']).then(({data}) => {
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
h2 {
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Microsoft Yahei';
}
.des__item {
  line-height: 1.3;
  margin-bottom: 5px;
}
.des__item strong{
  display: inline-block;
  font-weight: bold;
}
.item {
  padding: 0 .2rem;
  line-height: 3;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
</style>