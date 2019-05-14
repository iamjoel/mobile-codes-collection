<template>
  <div class="main">
    <div class="demo__title">基本用法</div>
    当前：第{{ currentPage1 }}页
    <!-- 
      total-items: 总共多少条
      items-per-page: 一页多少条
    -->
    <van-pagination
      v-model="currentPage1"
      :total-items="101"
      :items-per-page="5"
      @change="pageChange"
    />

    <div class="demo__title">显示省略号</div>
    <!-- 
      force-ellipses: 显示省略号
      最多显示4个页码(show-page-size)，否则在iphone5(320px) 上会破坏布局。
    -->
    <van-pagination
      v-model="currentPage2"
      :total-items="88"
      :items-per-page="5"
      :show-page-size="4"
      force-ellipses
    />

    <div class="demo__title">分页UI</div>
    <div class="pagination ly-m ly-c">
      <a
        href="###"
        class="pagination__btn pagination__btn--op pagination__btn--disabled"
        >上一页</a
      >
      <a href="###" class="pagination__btn pagination__btn--current">1</a>
      <a href="###" class="pagination__btn">2</a>
      <a href="###" class="pagination__btn">3</a>
      <a href="###" class="pagination__btn">4</a>
      <span class="pagination__more">...</span>
      <a href="###" class="pagination__btn">99</a>

      <a href="###" class="pagination__btn pagination__btn--op">下一页</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage1: 1,
      currentPage2: 1
    }
  },
  methods: {
    pageChange (pageAt) {
      console.log(`获取第${pageAt}页的数据。`)
    }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.pagination__btn {
  width: 0.5rem;
  text-align: center;
  border: 1px solid #cfcfcf;
}
.pagination__btn,
.pagination__more {
  margin-right: 0.15rem;
  height: 0.58rem;
  line-height: 0.58rem;
  color: #333;
}
.pagination__btn:last-child {
  margin-right: 0;
}

.pagination__btn--current {
  background-color: #70a3f0;
  border-color: #70a3f0;
  color: #fff;
}
.pagination__btn--op {
  width: 1rem;
}

.pagination__btn--disabled {
  cursor: not-allowed;
  color: #666;
}
</style>
