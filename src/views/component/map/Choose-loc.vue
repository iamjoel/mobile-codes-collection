<template>
  <div class="main">
    <div class="ly ly-c p-20rem">
      <van-button type="primary" @click="isShowChooseLoc = true"
        >选地址</van-button
      >
    </div>
    <div class="lh-md ph-20rem">
      经纬度： {{ loc.lat }}, {{ loc.lng }} <br />
      短地址: {{ loc.shortAddress }} <br />
      详细地址: {{ loc.address }}
    </div>

    <van-popup v-model="isShowChooseLoc" position="bottom">
      <iframe
        style="height: 100vh"
        width="100%"
        height="100%"
        frameborder="0"
        :src="mapUrl"
      >
      </iframe>
    </van-popup>
  </div>
</template>

<script>
// 地图选点组件 http://lbs.qq.com/tool/component-picker.html
var qqMapInfo = {
  apiKey: 'OS5BZ-KOG66-EZQSE-EWA27-W3GO5-PTFYH',
  appName: 'FantasyTencentMapTest'
}

var mapUrl = `https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=${
  qqMapInfo.apiKey
}&referer=${qqMapInfo.appName}`

export default {
  data () {
    return {
      isShowChooseLoc: false,
      mapUrl,
      loc: {
        lat: null,
        lng: null,
        shortAddress: null
      }
    }
  },
  mounted () {
    window.addEventListener(
      'message',
      event => {
        // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
        var loc = event.data
        if (loc && loc.module == 'locationPicker') {
          //防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
          // 腾讯经纬度转化成百度经纬度
          this.loc = {
            lat: loc.latlng.lat,
            lng: loc.latlng.lng,
            shortAddress: loc.poiname,
            address: loc.poiaddress
          }
          this.isShowChooseLoc = false
        }
      },
      false
    )
  }
}
</script>

<style scoped></style>
