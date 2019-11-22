<template>
  <div class="main">
    <van-popup v-model="isShow" position="right" show-toolbar>
      <div class="full">
        <van-nav-bar
          title=""
          left-text="取消"
          right-text="确定"
          left-arrow
          @click-left="isShow = false"
          @click-right="confirm"
        />
        <van-search
          v-model="searchStr"
          placeholder="请输入供应商名词"
          show-action
          @search="fetchList(true)"
        >
          <div slot="action" @click="fetchList(true)">搜索</div>
        </van-search>


        <van-radio-group v-model="selectedId">
          <van-cell-group>
            <van-list v-model="isLoading" :finished="isFinished" @load="fetchList" class="main-list">
                <template v-for="(item, i) in list">
                  <van-cell :title="item.name" clickable @click="selectedId = item.id">
                    <van-radio :name="item.id" />
                  </van-cell>
                </template>
            </van-list>
          </van-cell-group>
        </van-radio-group>
        
        <div v-if="!isLoading && list.length === 0" class="ta-c lh-lg mt-10rem">
          暂无数据
        </div>
      </div>
      
    </van-popup>

    
  
  </div>
</template>

<script src="./main.js"></script>

<style scoped>
.full {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: #fff;
}
.main-list {
  max-height: 70vh;
  overflow-y: auto;
}
</style>