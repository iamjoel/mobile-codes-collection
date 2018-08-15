<template>
  <div class="main order-list-page">
      <div class="filter ly ly-j ly-m">
        <a href="javascript:void(0)" class="filter-item" @click="fetchList()" :class="{'filter-item-active': careStatus == null || careStatus == ''}">全部</a>
        <a href="javascript:void(0)" class="filter-item" @click="fetchList(1)" :class="{'filter-item-active': careStatus == 1}">待付款</a>
        <a href="javascript:void(0)" class="filter-item" @click="fetchList(2)" :class="{'filter-item-active': careStatus == 2}">待服务</a>
        <a href="javascript:void(0)" class="filter-item" @click="fetchList(3)" :class="{'filter-item-active': careStatus == 3}">待评价</a>
      </div>
      <div class="list">
        <div class="item"
          v-for="item in list" :key="item.id">
            <div class="item-status">{{getSatausName(item.status)}}</div>
            <media
              style="padding: .25rem .25rem .25rem .12rem;"
              :img="{
                src: item.logo,
                height:'1.3rem',
                width: '1.3rem'
              }"
              spaceBetween=".3rem"
            >
              <div class="item__info">
                <div class="item__des ly">
                  <div class="item__label item__label--code">订单编号</div>
                  <div class="item__value">{{item.serialNum}}</div>
                </div>
                
                <div class="item__comment ly ly-r">
                  <a href="javascript:void(0);" class="item__btn" @click="$router.push('/page/mall/order-comment/' + item.id)" v-if="item.status == 3">匿名评价</a>
                  <a href="javascript:void(0);" class="item__btn" @click="pay(item.id, item.moreInfo.careService.name)" v-if="item.status == 1">付款</a>
                  <a href="javascript:void(0);" class="item__btn" @click="refund(item.id)" v-if="item.status == 2">退款</a>
                </div>
              </div>
            </media>
        </div>
      </div>
  </div>
</template>

<script src="./main.js"></script>
<style scoped src="./style.css"></style>