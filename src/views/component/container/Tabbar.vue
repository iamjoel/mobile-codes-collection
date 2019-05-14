<template>
  <div class="main">
    <div class="demo__title">基本用法</div>
    <div class="basic">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="shop">标签</van-tabbar-item>
        <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
        <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
        <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="demo__title">自定义图标</div>
    <div class="icon">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="shop">
          <span>自定义</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
          />
        </van-tabbar-item>
        <van-tabbar-item icon="chat">标签</van-tabbar-item>
        <van-tabbar-item icon="records">标签</van-tabbar-item>
      </van-tabbar>
    </div>
    <div class="demo__title">拨打电话</div>
    <div class="tel-icon">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home">
          首页
        </van-tabbar-item>
        <van-tabbar-item icon="wap-nav"> 健康</van-tabbar-item>
        <van-tabbar-item icon="tel" class="tel">
          <a href="tel:40009395"></a>
        </van-tabbar-item>
        <van-tabbar-item icon="gift">护理师</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      icon: {
        normal:
          'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active:
          'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    }
  },
  methods: {}
}
</script>

<style>
.basic .van-tabbar {
  position: relative;
}
.icon .van-tabbar {
  position: relative;
}
.tel-icon .van-tabbar {
  position: relative;
}

.tel-icon .tel {
  position: relative;
}
.tel-icon .tel .van-tabbar-item__icon {
  position: absolute;
  top: 0;
  left: 0;
}
.tel-icon .tel,
.tel-icon .tel .van-tabbar-item__icon,
.tel-icon .tel .van-icon-tel {
  width: 100%;
  height: 100%;
}
.tel-icon .tel .van-icon-tel {
  background-image: url(./images/tel.png);
  background-size: 0.75rem 0.75rem;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 0.07rem;
}
.tel-icon .tel a {
  display: block;
  width: 70px;
  height: 50px;
}
.tel-icon .tel .van-tabbar-item__text {
  z-index: 9999;
}
</style>
