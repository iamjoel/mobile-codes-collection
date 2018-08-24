<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">
        基础用法
      </div>

      <van-cell title="选择水果" @click="show = true">
        {{select.name}}
      </van-cell>
      <div>已现在水果ID： </div>
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
    </section>

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
    selectFruit(curr, name) {
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