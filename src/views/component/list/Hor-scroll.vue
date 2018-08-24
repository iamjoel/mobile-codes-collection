<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">用 CSS 实现</h2>
      <div class="ly list">
        <img 
          v-for="i in 8"
          :key="i"
          class="item" 
          :src="'http://via.placeholder.com/200x100?text=' + i"  alt=""/>
      </div>
    </section>

    <section class="demo">
      <h2 class="demo__title">滚动一屏幕2个半</h2>
      TODO 
      https://github.com/surmon-china/vue-awesome-swiper <br>
      https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/12-slides-per-view-auto.vue
    </section>
    
  </div>
</template>

<script>
export default {
  data() {
    return {

    }  
  },
  methods: {
    
  }
}
</script>

<style scoped>
h1 {
  margin: .1rem 0;
}
.list {
  overflow-x: auto;
  overflow-y: hidden;
}
.item {
  margin-right: .2rem;
}
</style>