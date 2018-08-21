<template>
  <div class="main">
    <section>
      <div class="demo__title">占位图</div>
      <img class="placeholder-img" src="http://via.placeholder.com/640x100" alt=""/>
      <img class="placeholder-img" src="http://via.placeholder.com/640x100?text=Placeholder" alt=""  />
    </section>

    <section>
      <div class="demo__title">头像</div>
      <div class="ly ly-c">
        <img src="./images/avater.png" alt="" class="avater">
      </div>
    </section>

    <section>
      <div class="demo__title">暂无图片</div>
      <img src="./images/no-pic.gif" alt="" class="w-100per">
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
  .placeholder-img {
    display: block;
    margin-bottom: .1rem;
    width: 100%;
  }

  .avater {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
</style>