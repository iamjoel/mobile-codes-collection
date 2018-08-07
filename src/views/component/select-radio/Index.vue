<template>
  <div class="main">
    <van-cell title="选择水果" @click="show = true">
      {{select.name}}
    </van-cell>
    <van-popup 
      v-model="show"
      position="bottom"
    >
      <van-picker
        show-toolbar
        title=""
        :columns="fruitNameList"
        @cancel="show = false"
        @confirm="selectFruit"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      select: {
        name: null,
      },
      fruitList: [{
        id: 'water-melon',
        name: '西瓜',
        callback: this.selectFruit
      },{
        id: 'pear',
        name: '梨',
        callback: this.selectFruit
      },{
        id: 'apple',
        name: '苹果',
        callback: this.selectFruit
      }],
      fruitNameList: [],
    }  
  },
  methods: {
    selectFruit(curr) {
      this.select = this.fruitList.filter(item => item.name === curr)[0]
      this.show = false
    },
  },
  mounted() {
    this.fruitNameList = this.fruitList.map(item => item.name)
  }
}
</script>

<style scoped>

</style>