<template>
  <div class="main">
    <!-- 跑马灯通知 -->
    <van-notice-bar
      text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
      left-icon="./images/chat.png"
    />
    <div class="mt-20rem ph-10rem">
      注意： 左侧图标(left-icon): 必须是绝对路径。所以将图标放到 static
      下面，用绝对路径，就可以显示出来了...
    </div>
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
