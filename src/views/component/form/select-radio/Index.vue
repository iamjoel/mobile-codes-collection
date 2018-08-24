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
    
    <section class="demo">
      <div class="demo__title">
        多级联动
      </div>
      <van-cell title="选择城市" @click="isShowCityPicker = true">
        {{selectedCityName}}
      </van-cell>
      <van-popup 
        v-model="isShowCityPicker"
        position="bottom"
      >
        <van-picker 
          show-toolbar
          :columns="cityColumns" 
          @change="provChange"
          @cancel="isShowCityPicker = false"
          @confirm="selectCity"
        />
      </van-popup>
      <div class="mt-5">已选城市ID： {{selectedCityId}}</div>

    </section>
  </div>
</template>

<script>
const citys = [
{
  id: 1,
  name: '浙江',
  children: [{
    id: 11,
    name: '杭州'
  },{
    id: 12,
    name: '宁波'
  },{
    id: 13,
    name: '温州'
  }]
},
{
  id: 2,
  name: '福建',
  children: [{
    id: 21,
    name: '福州'
  },{
    id: 22,
    name: '厦门'
  },{
    id: 23,
    name: '莆田'
  }]
}]
  
  
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

      isShowCityPicker: false,
      cityColumns: [
        {
          values: citys.map(item => item.name),
          className: 'column1'
        },
        {
          values: citys[0].children.map(item => item.name),
          className: 'column2',
          defaultIndex: 2
        }
      ],
      selectedCityName: null,
      selectedCityId: null,
    }  
  },
  methods: {
    selectFruit(name, index) {
      this.select = this.fruitList.filter(item => item.name === name)[0]
      this.show = false
    },

    provChange(picker, values) {
      var prov = citys.filter(item => item.name === values[0])[0]
      picker.setColumnValues(1, prov.children.map(item => item.name));
    },
    selectCity(names, indexs) {
      this.selectedCityName = names[1]
      this.selectedCityId = citys[indexs[0]].children[indexs[1]].id
      this.isShowCityPicker = false
    }
  },
  mounted() {
    this.fruitNameList = this.fruitList.map(item => item.name)
    this.select = this.fruitList[0]
  }
}
</script>

<style scoped>

</style>