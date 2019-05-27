<template>
  <div class="main pos-r map-page">
    <a href="javascript:void(0)" class="return-btn" @click="$router.go(-1)">
      <van-icon name="arrow-left" />
    </a>
    <div id="map-container" class="pos-r"></div>
    <div class="nav ly ly-j ly-m" v-if="$route.params.name">
      <div class="nav__des">
        <div class="nav__name t-ddd">{{ $route.params.name }}</div>
        <div class="nav__address t-ddd">{{ $route.params.address }}</div>
      </div>
      <a :href="getMapJumpUrl()" title="导航" class="nav__btn"></a>
    </div>
  </div>
</template>

<script>
// 百度地图url
var mapUrl =
  'http://api.map.baidu.com/marker?location={loc}&title={name}&content={address}&output=html'
// 微信地图url
// var mapUrl = 'https://apis.map.qq.com/uri/v1/marker?marker=coord:{loc};title:{name};addr:{address}'
export default {
  data () {
    return {}
  },
  methods: {
    getMapJumpUrl () {
      var mapJumpUrl = mapUrl
        .replace(
          '{loc}',
          [this.$route.params.lat, this.$route.params.lng].join(',')
        )
        .replace('{name}', encodeURIComponent(this.$route.params.name))
        .replace('{address}', encodeURIComponent(this.$route.params.address))
      console.log(mapJumpUrl)
      return mapJumpUrl
    },
    // 微信地图上面加标注点
    loadMap (pointList) {
      if (pointList.length > 0) {
        var center = new qq.maps.LatLng(pointList[0].lat, pointList[0].lng)
        var map = new qq.maps.Map(document.getElementById('map'), {
          center: center,
          zoom: 13
        })
        this.map = map

        pointList.forEach(item => {
          this.addMapIcon(item.lat, item.lng, item.name, item.id)
        })
      }
    },
    addMapIcon (lat, lng, name, id) {
      var map = this.map

      var point = new qq.maps.LatLng(lat, lng)

      var marker = new qq.maps.Marker({
        position: point,
        map: map
      })

      var anchor = new qq.maps.Point(0, 39),
        size = new qq.maps.Size(42, 68),
        origin = new qq.maps.Point(0, 0),
        markerIcon = new qq.maps.MarkerImage(
          'https://3gimg.qq.com/lightmap/api_v2/2/4/99/theme/default/imgs/marker.png',
          // 'https://infinityicon.infinitynewtab.com/user-share-icon/6e49210c084629259f22609980c48ecf.png',
          size,
          origin,
          anchor
        )
      marker.setIcon(markerIcon)

      // 点击
      var info = new qq.maps.InfoWindow({
        map: map
      })
      qq.maps.event.addListener(marker, 'click', function () {
        info.open()
        info.setContent(`
            <div style="text-align:center;white-space:nowrap;' +
              'margin:10px;">
              <div>${name}</div>
              <a 
                href="${location.origin}/#/common/carrier/detail/${id}"
                class="d-b mt-10"
              >查看详情</a>
            </div>`)
        // debugger
        var pos = marker.getPosition()
        // 弹出框位置的偏移
        pos.lat += 0.002
        pos.lng += 0.002
        info.setPosition(pos)
      })
    }
  },
  mounted () {
    // map/120.614/31.3661
    // 百度
    var map = new BMap.Map('map-container')
    var point = new BMap.Point(this.$route.params.lng, this.$route.params.lat)
    map.centerAndZoom(point, 15)
    var marker = new BMap.Marker(point)
    map.addOverlay(marker)
    // 微信地图 https://apis.map.qq.com/tools/poimarker?type=0&marker=coord:39.96554,116.26719;title:成都;addr:北京市海淀区复兴路32号院|coord:39.87803,116.19025;title:成都园;addr:北京市丰台区射击场路15号北京园博园|coord:39.88129,116.27062;title:老成都;addr:北京市丰台区岳各庄梅市口路西府景园六号楼底商|coord:39.9982,116.19015;title:北京园博园成都园;addr:北京市丰台区园博园内&key=your key&referer=myapp

    // this.loadMap([{
    //   lat: this.$route.params.lat,
    //   lng: this.$route.params.lng 
    // }])

    this.getMapJumpUrl()
  }
}
</script>

<style>
.map-page .van-icon-arrow-left {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
</style>
<style scoped>
.return-btn {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  z-index: 100;
  padding: 0.1rem;
  background-color: #ddd;
}

#map-container {
  height: 100vh;
}

.nav {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 0.2rem 0.4rem;
  background-color: #fff;
}
.nav__name,
.nav__address {
  box-sizing: border-box;
  width: 4.5rem;
}
.nav__name {
  margin-bottom: 0.05rem;
  line-height: 0.4rem;
  padding-left: 0.3rem;
  background: url(./images/map-icon.png) 0 center no-repeat;
  background-size: 0.26rem 0.34rem;
  font-size: 14px;
  font-weight: 700;
  color: #ff6432;
  height: 0.4rem;
}
.nav__address {
  font-size: 12px;
  line-height: 1.2;
  color: #000;
}
.nav__btn {
  width: 1rem;
  height: 1rem;
  background: url(./images/nav-btn.png) no-repeat;
  background-size: 100% 100%;
}
</style>
