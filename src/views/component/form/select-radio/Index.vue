<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">
        基础用法
      </div>

      <van-cell title="选择水果" @click="isShowFruitPicker = true">
        {{ selectedFruit.name }}
      </van-cell>
      <div class="mt-5">已选水果ID： {{ selectedFruit.id }}</div>
      <van-popup v-model="isShowFruitPicker" position="bottom">
        <van-picker
          show-toolbar
          title=""
          :columns="fruitNameList"
          @cancel="isShowFruitPicker = false"
          @confirm="selectFruit"
        />
      </van-popup>
    </section>

    <section class="demo mt-20rem">
      <div class="demo__title">
        下拉选择是接口获得的数据
      </div>

      <van-cell title="选择歌手" @click="isShowSingerPicker = true">
        {{ selectedSinger.name }}
      </van-cell>
      <div class="mt-5">已选歌手ID： {{ selectedSinger.id }}</div>
      <van-popup v-model="isShowSingerPicker" position="bottom">
        <van-picker
          show-toolbar
          title=""
          :columns="singerNameList"
          @cancel="isShowSingerPicker = false"
          @confirm="selectSinger"
        />
      </van-popup>
    </section>

    <section class="demo mt-20rem">
      <div class="demo__title">
        多级联动
      </div>
      <van-cell title="选择城市" @click="isShowCityPicker = true">
        {{ selectedCityName }}
      </van-cell>
      <van-popup v-model="isShowCityPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="cityColumns"
          @change="provChange"
          @cancel="isShowCityPicker = false"
          @confirm="selectCity"
        />
      </van-popup>
      <div class="mt-5">已选城市ID： {{ selectedCityId }}</div>
    </section>
  </div>
</template>

<script>
import { fetchList } from '@/service/api'

const citys = [
  {
    id: 1,
    name: '浙江',
    children: [
      {
        id: 11,
        name: '杭州'
      },
      {
        id: 12,
        name: '宁波'
      },
      {
        id: 13,
        name: '温州'
      }
    ]
  },
  {
    id: 2,
    name: '福建',
    children: [
      {
        id: 21,
        name: '福州'
      },
      {
        id: 22,
        name: '厦门'
      },
      {
        id: 23,
        name: '莆田'
      }
    ]
  }
]

export default {
  data () {
    return {
      isShowFruitPicker: false,
      fruitList: [
        {
          id: 'water-melon',
          name: '西瓜'
        },
        {
          id: 'pear',
          name: '梨'
        },
        {
          id: 'apple',
          name: '苹果'
        }
      ],
      fruitNameList: [],
      selectedFruit: {
        id: null,
        name: null
      },

      isShowSingerPicker: false,
      singerList: [],
      singerNameList: [],
      selectedSinger: {
        id: null,
        name: null
      },

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
      selectedCityId: null
    }
  },
  methods: {
    selectFruit (name, index) {
      this.selectedFruit = this.fruitList[index]
      this.isShowFruitPicker = false
    },

    selectSinger (name, index) {
      this.selectedSinger = this.singerList[index]
      this.isShowSingerPicker = false
    },

    provChange (picker, values) {
      var prov = citys.filter(item => item.name === values[0])[0]
      picker.setColumnValues(1, prov.children.map(item => item.name))
    },
    selectCity (names, indexs) {
      this.selectedCityName = names[1]
      this.selectedCityId = citys[indexs[0]].children[indexs[1]].id
      this.isShowCityPicker = false
    }
  },
  mounted () {
    this.fruitNameList = this.fruitList.map(item => item.name)
    this.selectedFruit = this.fruitList[0]

    fetchList('singer', undefined, undefined, {
      current: 1,
      item: 20
    }).then(({ data }) => {
      this.singerList = data.data
      this.singerNameList = data.data.map(item => item.name)
      if (this.singerList.length > 0) {
        this.selectedSinger = this.singerList[0]
      }
    })
  }
}
</script>

<style scoped></style>
