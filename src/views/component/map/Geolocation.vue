<template>
  <div class="main">
    <div class="ly ly-c mv-10">
      <van-button type="default" @click="getLoc">获取定位</van-button>
    </div>
    <h2>定位信息:</h2>
    <div>
      省: {{ locInfo.province }} <br />
      市: {{ locInfo.city }} <br />
      经纬度: {{ locInfo.lat }} {{ locInfo.lng }} <br />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      locInfo: {}
    }
  },
  methods: {
    getLoc () {
      var geolocation = new qq.maps.Geolocation(
        'B54BZ-KKIWX-HNZ4Q-ZGOTB-HM5KQ-C5FZ7',
        'tspt'
      )
      geolocation.getLocation(
        loc => {
          this.locInfo = loc
        },
        e => {
          this.$toast('定位失败:' + e)
        }
      )
    }
  }
}
</script>

<style scoped></style>
