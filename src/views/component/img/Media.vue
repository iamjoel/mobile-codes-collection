<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">默认Media</h2>
      <div>
        <media v-for="i in 3" :key="i" style="padding: .1rem">
          <h3 class="mb-10">标题</h3>
          <p>内容内容内容内容内容内容内容内容内容</p>
        </media>
      </div>
    </section>
    
    <section class="demo">
      <h2 class="demo__title">垂直的Media</h2>
      <div class="ly ly-multi">
        <media v-for="i in 3" :key="Math.random()"
          style="padding: .1rem;width: 3rem;"
          dir-ver
        >
          <h3 class="mb-10">标题</h3>
          <p>内容内容内容内容内容内容内容内容内容</p>
        </media>
      </div>
    </section>
    
    <section class="demo">
      <h2 class="demo__title">可配置项目的Media</h2>
      <media v-for="i in 3" :key="Math.random()"
        style="padding: .1rem"
        :img="{
          src: '/static/demo/2.jpeg',
          isRight: true,
          isCircle: true,
          height:'1rem',
          width: '1rem'
        }"
      >
        <h3 class="mb-10">标题</h3>
        <p>内容内容内容内容内容内容内容内容内容</p>
      </media>
    </section>
    

    
  </div>
</template>

<script>
import Media from '@/components/media'
export default {
  components: {
    Media
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

h3 {
  font-weight: bold;
}
</style>