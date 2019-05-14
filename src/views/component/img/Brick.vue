<template>
  <div class="main">
    <!-- 有问题 -->
    <div class="brick-wrap ly p-10rem">
      <div
        v-for="i in 20"
        :key="i"
        class="brick__item"
        :style="{
          height: getHeight()
        }"
      >
        <img :src="'http://via.placeholder.com/100x200?text=' + i" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// https://github.com/callmecavs/bricks.js#container
import Bricks from 'bricks.js'
export default {
  data () {
    return {}
  },
  mounted () {
    const sizes = [
      { columns: 2, gutter: 10 },
      { mq: '768px', columns: 3, gutter: 25 },
      { mq: '1024px', columns: 4, gutter: 50 }
    ]

    setTimeout(() => {
      const instance = Bricks({
        container: '.brick-wrap',
        packed: 'data-packed',
        sizes
      })
      instance
        .resize(true) // bind resize handler
        .pack()
    }, 1000)
  },
  methods: {
    getHeight () {
      return 150 + Math.round(Math.random() * 100) + 'px'
    }
  }
}
</script>

<style scoped>
.brick__item {
  width: 150px;
}
.brick__item img {
  width: 100%;
  height: 100%;
}
</style>
