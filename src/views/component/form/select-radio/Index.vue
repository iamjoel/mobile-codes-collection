<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">
        基础用法
      </div>

      <van-cell title="选择你喜欢的水果" @click="show = true">
        {{select.name}}
      </van-cell>
      <div class="mt-5">已选水果ID： {{select.id}}</div>
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
        id: null,
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
    selectFruit(name, index) {
      this.select = this.fruitList.filter(item => item.name === name)[0]
      this.show = false
    },
  },
  mounted() {
    this.fruitNameList = this.fruitList.map(item => item.name)
    this.select = this.fruitList[0]
  }
}
</script>

<style scoped>

</style>