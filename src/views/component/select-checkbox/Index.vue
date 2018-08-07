<template>
  <div class="main">
    <van-cell title="选择水果" @click="show = true">
    </van-cell>
    <van-popup v-model="show" position="bottom" :overlay="true">
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="item"
            :title="`${item}`"
            @click="toggle(index)"
          >
            <van-checkbox :name="item" ref="checkboxes" />
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      list: ['桃子', '梨子', '西瓜'],
      result: []
    }  
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
</script>

<style scoped>

</style>