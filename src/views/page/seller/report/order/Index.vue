<template>
  <div class="main">
    <div class="date ly">
      <a href="javascript:void(0)" class="date__normal" @click="isShowTimeType = true"><span class="date__normal-text">{{allTimeType[timeType]}}</span></a>
      <van-popup v-model="isShowTimeType" position="bottom" :overlay="true" :close-on-click-overlay="true">
        <van-picker
          show-toolbar
          :columns="allTimeType"
          @cancel="isShowTimeType = false"
          @confirm="chooseTimeType"
        />
      </van-popup>
      <div class="date__time ly ly-m">
        <a href="javascript:void(0)" class="date__time-start" @click="isShowStartDate = true"><span class="date__time-start-text">{{startDate | time}}</span></a>
        <van-popup v-model="isShowStartDate" position="bottom" :overlay="true" :close-on-click-overlay="true"
        >
          <van-datetime-picker
            v-model="tempStartDate"
            @cancel="isShowStartDate = false"
            @confirm="chooseTime('start')"
            type="date"
          />
        </van-popup>
        <span class="date__time-text">至</span>
        <a href="javascript:void(0)" class="date__time-end" @click="isShowEndDate = true">{{endDate | time}}</a>
        <van-popup v-model="isShowEndDate" position="bottom" :overlay="true" :close-on-click-overlay="true">
          <van-datetime-picker
            v-model="tempEndDate"
            @cancel="isShowEndDate = false"
            @confirm="chooseTime('end')"
            type="date"
          />
        </van-popup>
      </div>
    </div>

    <div style="padding: .25rem; background-color: #fff; border-bottom: 1px solid #ebebeb; height: 3.15rem; overflow: hidden">
      <div style="height:5rem; position: relative; top: -1rem">
        <chart :options="chartOpts"></chart>
      </div>
    </div>
    <div class="ly order-info">
      <div class="order-info__item">
        <span>订单量：</span>3
      </div>
      <div class="order-info__item">
        <span>销售额：</span>￥900
      </div>
    </div>

    <div class="order-data">
      <div class="order-data__item ly" >
        <div class="order-data__title">商品名称</div>
        <div class="order-data__title order-data__first">时间</div>
        <div class="order-data__title order-data__second">金额</div>
      </div>
      <div class="order-data__item ly" v-for="i in 3" :key="i">
        <div class="order-data__value t-ddd">商品{{i}}</div>
        <div class="order-data__value order-data__first">{{Date.now() | time('MM-DD HH:mm')}}</div>
        <div class="order-data__value order-data__second">￥300</div>
      </div>
    </div>
  </div>
</template>

<script src="./main.js">
  
</script>

<style scoped src="../common.css"></style>
<style scoped src="@/assets/chart.css"></style>
<style scoped src="./style.css"></style>