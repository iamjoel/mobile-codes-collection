<template>
  <div class="main">
    <section class="demo">
      <div class="demo__title">
        基础用法
      </div>
      <van-checkbox v-model="checked">复选框</van-checkbox>
    </section>

    <section class="demo">
      <div class="demo__title">
        禁用状态
      </div>
      <van-checkbox v-model="checked" disabled>复选框</van-checkbox>
    </section>

    <section class="demo">
      <div class="demo__title">
        自定义图标
      </div>
      <van-checkbox v-model="checked">
        自定义图标
        <img
          slot="icon"
          slot-scope="props"
          :src="props.checked ? icon.active : icon.normal"
        />
      </van-checkbox>
    </section>

    <section class="demo">
      <div class="demo__title">
        checkbox组
      </div>
      <van-checkbox-group v-model="result">
        <van-checkbox v-for="(item, index) in list" :key="item" :name="item">
          复选框 {{ item }}
        </van-checkbox>
      </van-checkbox-group>
    </section>

    <section class="demo">
      <div class="demo__title">
        与cell组件一起使用
      </div>
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="item"
            :title="`复选框 ${item}`"
            @click="toggle(index)"
          >
            <van-checkbox :name="item" ref="checkboxes" />
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      icon: {
        normal:
          'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active:
          'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      },
      list: ['a', 'b', 'c'],
      result: []
    }
  },
  methods: {
    toggle (index) {
      this.$refs.checkboxes[index].toggle()
    }
  }
}
</script>

<style>
.van-checkbox img {
  width: 20px;
}
</style>
