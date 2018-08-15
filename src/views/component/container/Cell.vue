<template>
  <div class="main">
    <div class="demo__title">基本用法</div>
     <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <div class="demo__title">只设置value</div>
    <van-cell-group>
      <van-cell value="内容" />
    </van-cell-group>
    <div class="demo__title">展示图标</div>
    <van-cell-group>
      <van-cell title="单元格" icon="location" />
    </van-cell-group>
    <div class="demo__title">展示箭头</div>
    <van-cell-group>
      <van-cell title="单元格" is-link />
      <van-cell title="单元格" is-link value="内容" />
      <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    </van-cell-group>
    <div class="demo__title">自定义</div>
    <van-cell-group>
      <van-cell value="内容" icon="shop" is-link>
        <template slot="title">
          <span class="van-cell-text">单元格</span>
          <van-tag type="danger">标签</van-tag>
        </template>
      </van-cell>
      <van-cell title="单元格" icon="location" is-link />
      <van-cell title="单元格">
        <van-icon slot="right-icon" name="search" class="van-cell__right-icon" />
      </van-cell>
    </van-cell-group>

  </div>
</template>

<script>
export default {
  data() {
    return {
    }  
  },
  methods: {
    
  }
}
</script>

<style scoped>
 
</style>