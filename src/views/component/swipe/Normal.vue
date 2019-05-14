<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">基础用法</div>
      <div class="swipe mb-10rem">
        <van-swipe :autoplay="3000" class="h-100per ta-c">
          <van-swipe-item v-for="i in 5" :key="i">
            <img class="img" src="/static/demo/2.jpeg" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </section>

    <section class="demo">
      <div class="demo__title">动画慢一点(duration)</div>
      <div class="swipe mb-10rem">
        <!-- duration 的默认值是 500 -->
        <van-swipe :autoplay="3000" :duration="800" class="h-100per ta-c">
          <van-swipe-item v-for="i in 5" :key="i">
            <img class="img" src="/static/demo/2.jpeg" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </section>

    <section class="demo">
      <div class="demo__title">垂直滚动</div>
      <div class="swipe mb-10rem">
        <van-swipe :autoplay="3000" class="h-100per ta-c" vertical>
          <van-swipe-item v-for="i in 5" :key="i">
            <img class="img" src="/static/demo/2.jpeg" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </section>

    <section class="demo">
      <div class="demo__title">不自动播放</div>
      <div class="swipe mb-10rem">
        <van-swipe :autoplay="0" class="h-100per ta-c">
          <van-swipe-item v-for="i in 5" :key="i">
            <img class="img" src="/static/demo/2.jpeg" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </section>

    <section class="demo">
      <div class="demo__title">分页控制滚动</div>
      <div class="swipe mb-10rem">
        <van-swipe :autoplay="0" class="h-100per ta-c" ref="swipe">
          <van-swipe-item v-for="i in 5" :key="i">
            <img class="img" src="/static/demo/2.jpeg" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <van-pagination
        v-model="currentPage"
        :total-items="5"
        :items-per-page="1"
        prev-text="上一张"
        next-text="下一张"
        @change="$refs.swipe.swipeTo(currentPage - 1)"
      />
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {}
}
</script>

<style scoped>
.swipe {
  height: 3rem;
}
.swipe .img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
