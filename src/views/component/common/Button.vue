<template>
  <div class="main">
    <div class="demo__title">基础用法</div>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <div class="demo__title">朴素按钮(幽灵按钮)</div>
    <van-button type="default" plain>default</van-button>
    <van-button type="primary" plain>primary</van-button>
    <van-button type="warning" plain>warning</van-button>
    <van-button type="danger" plain>danger</van-button>

    <div class="demo__title">尺寸</div>
    <van-button size="large">大号</van-button>
    <div class="ly ly-c mv-20rem ph-10rem">
      <van-button size="large">加点间距</van-button>
    </div>
    <van-button>默认大小</van-button>
    <van-button size="small">小号</van-button>
    <van-button size="mini">迷你</van-button>

    <div class="demo__title">禁用</div>
    <van-button disabled>禁用</van-button>

    <div class="demo__title">加载中</div>
    <van-button loading type="primary" />

    <div class="demo__title">自定义按钮标签</div>
    <van-button type="primary" tag="a" href="http://www.luoo.net/" target="_blank">点我跳转到落网</van-button>

    <div>缺少带图标的按钮</div>
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

<style scoped></style>