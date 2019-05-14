<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">基础用法</div>
      <van-cell title="选择水果" @click="isShow = true">
        {{ selectedNames }}
      </van-cell>
      <div class="mt-5">已选水果ID：{{ selectedIds }}</div>
      <van-popup v-model="isShow" position="bottom" :overlay="true">
        <div class="van-hairline--top-bottom van-picker__toolbar">
          <div class="van-picker__cancel" @click="isShow = false">取消</div>
          <div class="van-picker__confirm" @click="confirm">确认</div>
        </div>
        <van-checkbox-group v-model="temp">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in list"
              clickable
              :key="item.id"
              :title="item.name"
              @click="toggle(index)"
            >
              <van-checkbox :name="item.id" ref="checkboxes" />
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </van-popup>
    </section>

    <section class="demo">
      <div class="demo__title">
        级联多选
      </div>
      TODO
    </section>
  </div>
</template>

<script>
var list = [
  {
    id: 1,
    name: '桃子'
  },
  {
    id: 2,
    name: '梨子'
  },
  {
    id: 3,
    name: '西瓜'
  }
]

export default {
  data () {
    return {
      isShow: false,
      list,
      listObj: (() => {
        var res = {}
        list.forEach(item => {
          res[item.id] = item
        })
        return res
      })(),
      selected: [],
      temp: []
    }
  },
  computed: {
    selectedNames () {
      return this.selected.map(item => item.name).join(',')
    },
    selectedIds () {
      return this.selected.map(item => item.id).join(',')
    }
  },
  methods: {
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    },
    confirm () {
      this.selected = this.temp.map(id => {
        return this.listObj[id]
      })
      this.isShow = false
    }
  }
}
</script>

<style scoped></style>
