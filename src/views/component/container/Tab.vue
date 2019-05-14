<template>
  <div class="main">
    <div class="demo__title">基本用法</div>
    <van-tabs>
      <van-tab title="选项1">
        内容1
      </van-tab>
      <van-tab title="选项2">
        内容2
      </van-tab>
      <van-tab title="选项3">
        内容3
      </van-tab>
    </van-tabs>

    <div class="demo__title">控制底部条宽度</div>
    <van-tabs :line-width="30">
      <van-tab title="选项1">
        内容1
      </van-tab>
      <van-tab title="选项2">
        内容2
      </van-tab>
      <van-tab title="选项3">
        内容3
      </van-tab>
    </van-tabs>

    <div class="demo__title">改颜色</div>
    <div class="change-tab-color">
      <van-tabs :line-width="30">
        <van-tab title="选项1">
          内容1
        </van-tab>
        <van-tab title="选项2">
          内容2
        </van-tab>
        <van-tab title="选项3">
          内容3
        </van-tab>
      </van-tabs>
    </div>

    <div class="demo__title">另一种外观</div>
    <van-tabs type="card">
      <van-tab title="选项1">
        内容1
      </van-tab>
      <van-tab title="选项2">
        内容2
      </van-tab>
      <van-tab title="选项3">
        内容3
      </van-tab>
    </van-tabs>

    <div class="demo__title">滑动滚动</div>
    <van-tabs swipeable>
      <van-tab :title="'选项' + i" v-for="i in 3" :key="i">
        <div class="ta-c" style="height: 100px;line-height: 100px">
          内容{{ i }}
        </div>
      </van-tab>
    </van-tabs>
    <div class="demo__title">粘性布局(滚动到顶部时会自动吸顶)</div>
    <!-- sticky -->
    <van-tabs sticky>
      <van-tab :title="'选项' + i" v-for="i in 3" :key="i">
        <div class="ta-c" style="height: 200vh;background: #f00"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped></style>

<style>
.change-tab-color .van-tab--active {
  color: #0f0;
}
.change-tab-color .van-tabs__line {
  background-color: #0f0;
}
</style>
