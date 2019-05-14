<template>
  <div class="main">
    <h2>获取单个数据</h2>
    <lj-fetch-model :url="$SERVER_PREFIX + '/singer/detail/1'">
      <template slot-scope="scope">
        接口1数据：{{ scope.data.name }}
      </template>
    </lj-fetch-model>

    <h2>获取多个数据</h2>
    <lj-fetch-model
      :url="[
        $SERVER_PREFIX + '/singer/detail/1',
        $SERVER_PREFIX + '/singer/detail/2'
      ]"
    >
      <template slot-scope="scope">
        接口1数据：{{ scope.data[0].name }} <br />
        接口2数据：{{ scope.data[1].name }}
      </template>
    </lj-fetch-model>

    <h2>无限加载列表</h2>
    <van-cell-group>
      <lj-list :url="$SERVER_PREFIX + '/singer/list'">
        <template slot-scope="scope" v-if="scope.data">
          <van-cell :value="scope.data.name" />
        </template>
      </lj-list>
    </van-cell-group>

    <h2>非无限加载列表</h2>
    <van-cell-group>
      <lj-list
        :url="$SERVER_PREFIX + '/singer/list'"
        :is-infinate="false"
        :page-limit="2"
        :order="['name', 'desc']"
      >
        <template slot-scope="scope" v-if="scope.data">
          <van-cell :value="scope.data.name" />
        </template>
      </lj-list>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import fetchModel from '@lucky-joel/vue-fetch-model'
Vue.use(fetchModel)

import List from '@lucky-joel/vue-list'
Vue.use(List)

export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  font-weight: bold;
  line-height: 2;
}
</style>
