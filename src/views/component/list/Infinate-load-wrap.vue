<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">无限加载列表</h2>
      <van-cell-group>
        <ListFetcher key-id="singer">
          <template slot-scope="scope" v-if="scope.data">
            <van-cell :value="scope.data.name" />
          </template>
        </ListFetcher>
      </van-cell-group>
    </section>
    
  </div>
</template>

<script>
import ListFetcher from '@/components/list-fetcher'
export default {
  components: {
    ListFetcher
  },
  data() {
    return {
    }  
  },
  methods: {
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