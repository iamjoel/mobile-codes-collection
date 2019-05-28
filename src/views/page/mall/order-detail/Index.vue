<template>
 <div>
   <div class="head ta-c">
     <div class="head__title">订单待收货</div>
   </div> 
   <div class="ly transport ly-m">
     <div class="transport__icon"></div>
     <a href="javascript:void(0)" class="transport__status">江苏省苏州市工业园区 已签收 签收人: 邮件收发章。</a>
     <div class="transport__icon--right"></div>
   </div>
   <div class="transport-address ly ly-m">
     <div class="transport-address__icon"></div>
     <div class="addressee-information">
       <div class="ly">
         <div class="addressee-information__name">张三</div>
         <div class="addressee-information__phone">188****2315</div>
       </div>
       <div class="transport-address__content">江苏省苏州市工业园区新北路2587号</div>
     </div>
   </div>
   <div class="ly product-card">
     <div class="product-card__icon"></div>
     <div class="product-card__information">
       <div class="product-card__information-title">菲力牛排组合套餐10片腌制牛肉 共计1500G</div>
       <div class="ly ly-j">
         <div class="ly product-sku">
           <div class="product-sku__title">规格:</div>
           <div>20片套餐</div>
         </div>
         <div class="product-card__information-number">x1</div>
       </div>
     </div>
   </div>
   <div class="payment-information">
     <div class="ly ly-j payment-information__item">
       <div class="payment-information__item-title">消耗积分</div>
       <div class="payment-information__item-value">8积分</div>
     </div>
     <div class="ly ly-j payment-information__item">
       <div class="payment-information__item-title">应付款</div>
       <div class="payment-information__item-value">¥35.00</div>
     </div>
     <div class="ly ly-j payment-information__item">
       <div class="payment-information__item-title">确认收货后返</div>
       <div class="payment-information__item-value">1积分</div>
     </div>
   </div>
   <div class="order-information">
     <div class="ly order-information__item">
       <div>订单编号:</div>
       <div class="order-information__item-value">123456789</div>
     </div>
     <div class="ly order-information__item">
       <div>创建时间:</div>
       <div class="order-information__item-value">2018-12-12 10:25:07</div>
     </div>
     <div class="ly order-information__item">
       <div>支付时间:</div>
       <div class="order-information__item-value">2018-12-12 10:25:50</div>
     </div>
     <div class="ly order-information__item">
       <div>发货时间:</div>
       <div class="order-information__item-value">2018-12-12 16:20:44</div>
     </div>
   </div>
   <div class="ta-c">
     <a href="javascript:void(0)" class="refund-btn ta-c">我想退款/退货？</a>
   </div>
   <div class="ta-c">
     <a href="javascript:void(0)" class="affirm-btn">确认收货</a>
   </div>
 </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>