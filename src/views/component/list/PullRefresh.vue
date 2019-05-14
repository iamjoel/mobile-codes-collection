<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">基础用法</h2>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-cell-group>
          <van-cell :title="item" v-for="item in list" :key="item" />
        </van-cell-group>
      </van-pull-refresh>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      var res = []
      for (var i = 0; i < 5; i++) {
        res.push(this.getRandomNum() + '')
      }
      setTimeout(() => {
        this.isLoading = false
        this.list = res
      }, 1000)
    },
    getRandomNum () {
      return Math.ceil(Math.random() * 1000)
    }
  },
  mounted () {
    this.onRefresh()
  }
}
</script>

<style scoped></style>
