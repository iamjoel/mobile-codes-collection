<template>
  <div class="shopcart-page">
    <div v-if="goodsList.length === 0" class="ly lyd-r ly-c ly-m pt-10">暂无数据</div>
    <div v-for="(item,i) in goodsList" :key="i" class="cart_item" v-if="goodsList.length > 0">
      <div class="p-10 rela">
        <div @click="changeGroup(item)" class="click-top"></div>
        <van-checkbox v-model="item.checked" checked-color="#F18700">{{item.storeName}}</van-checkbox>
      </div>
      <div class="ly lyd-r pv-10" v-for="j in item.products" :key="j.index">
        <div class="ly lyd-c ly-c ph-10 rela" >
          <div @click="changeProductItem(i,j)" class="click-top"></div>
          <van-checkbox v-model="j.checked" checked-color="#F18700"></van-checkbox>
        </div>
        <div class="ly lyd-r desc pr-10">
          <img :src="j.productImgUrl.includes('http') ? j.productImgUrl : j.productImgUrl | img" class="br-sm product_img">
          <div class="ml-10 desc_right pt-5 ly lyd-c ly-j">
            <div class="fz-xs">{{j.productName}}</div>
            <div class="fz-sm ly lyd-r ly-j ly-m"><span class="fz-xs sku">{{j.productSkuName}}</span><span><img src="./image/del.png" class="del_icon" @click="deleteGoods(j)"></span></div>
            <div class="fz-md ly lyd-r ly-j">
              <span class="price fz-md"><span class="fz-md">￥</span>{{(j.price / 100).toFixed(2)}}</span>
              <van-stepper v-model="j.quantity" @change="onChange(j)"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar
      :price="totalPrice"
      button-text="去结算"
      @submit="onSubmit"
    >
      <div class="rela">
        <div class="click-top" @click="handleSelectAll"></div>
        <van-checkbox v-model="selectAll" checked-color="#F18700" class="pl-10">全选</van-checkbox>
      </div>
    </van-submit-bar>
  </div>
</template>

<script src="./main.js"></script>
<style scoped src="./style.css"></style>

<style>
.shopcart-page .van-stepper__minus,  .shopcart-page .van-stepper__plus{
  width: 18px;
  height: 18px;
}
.shopcart-page .van-stepper__input{
  width: 20px;
  height: 16px;
}
.shopcart-page .van-stepper__plus::after,  .shopcart-page .van-stepper__plus::before{
  background-color: #F18700
}
.shopcart-page .van-submit-bar__price{
  color: #F18700
}
.shopcart-page .van-button--danger{
  background: #F18700;
  border-color: #F18700
}
</style>
