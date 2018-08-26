<template>
  <div class="main">
    <section class="demo">
      <h2 class="demo__title">基础用法</h2>
      <van-button @click="$toast('我是提示文案，建议不超过十五字~')">显示轻提示</van-button>
    </section>

    <section class="demo">
      <h2 class="demo__title">成功提示</h2>
      <van-button @click="$toast.success('操作成功')">显示成功提示</van-button>
    </section>

    <section class="demo">
      <h2 class="demo__title">失败提示</h2>
      <van-button @click="$toast.fail('操作失败')">显示失败提示</van-button>
    </section>

     <section class="demo">
      <h2 class="demo__title">关闭提示</h2>
      <code>$toast.clear()</code>
    </section>

    <section class="demo">
      <h2 class="demo__title">各种配置</h2>
      <van-button @click="$toast({
        message: '请等待5秒...',
        type: 'loading',
        loadingType: 'spinner',
        duration: 5000, // 展示时长
        mask: true,  //显示背景蒙层
        forbidClick: true,
      })">各种配置</van-button>
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

<style>

</style>