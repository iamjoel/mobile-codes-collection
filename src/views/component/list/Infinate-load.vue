<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">基础用法</h2>
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item + ''" />
      </van-list>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false

        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 500)
    }
  }
}
</script>

<style scoped></style>
