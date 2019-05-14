<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">无限加载列表</h2>
      <van-cell-group>
        <lj-list :url="$SERVER_PREFIX + '/singer/list'">
          <template slot-scope="scope" v-if="scope.data">
            <van-cell :value="scope.data.name" />
          </template>
        </lj-list>
      </van-cell-group>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
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
